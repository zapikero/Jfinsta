const supabase = window.supabase.createClient(
"https://vmxgzzqfbrbwcgkophzzp.supabase.co",
"sb_publishable_KOA9TR0SKAh--TLh37KSIw_pPjm-GzE"
);

let tablaActual = "calderas";

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btnLogin");

  btn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorBox = document.getElementById("error");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      errorBox.innerText = error.message;
    } else {
      iniciarPanel();
    }
  });

});

function iniciarPanel(){
  document.getElementById("login").style.display="none";
  document.getElementById("panel").style.display="block";
  cambiarTabla("calderas");
}

async function cambiarTabla(tabla){
  tablaActual = tabla;
  crearFormulario();
  cargarLista();
}

function crearFormulario(){
  document.getElementById("formulario").innerHTML=`
    <h2>Nuevo ${tablaActual}</h2>
    <input id="nombre" placeholder="Nombre">
    <input id="marca" placeholder="Marca">
    <input id="precio" type="number" placeholder="Precio">
    <input id="imagen_url" placeholder="Imagen URL">
    <button id="guardarBtn">Guardar</button>
  `;

  document.getElementById("guardarBtn").addEventListener("click", guardar);
}

async function guardar(){
  await supabase.from(tablaActual).insert([{
    nombre:nombre.value,
    marca:marca.value,
    precio:precio.value,
    imagen_url:imagen_url.value
  }]);

  cargarLista();
}

async function cargarLista(){
  const {data} = await supabase.from(tablaActual).select("*").order("id",{ascending:false});
  const lista = document.getElementById("lista");
  lista.innerHTML="";

  data.forEach(p=>{
    lista.innerHTML+=`
      <div class="card">
        <b>${p.nombre||""}</b> — ${p.precio||""}€
        <br><button onclick="borrar('${p.id}')">Borrar</button>
      </div>`;
  });
}

async function borrar(id){
  await supabase.from(tablaActual).delete().eq("id",id);
  cargarLista();
}
