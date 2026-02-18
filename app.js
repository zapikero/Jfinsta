const supabase = window.supabase.createClient(
"https://vmxgzzqfbrbwcgkophzzp.supabase.co",
"sb_publishable_KOA9TR0SKAh--TLh37KSIw_pPjm-GzE"
);

let tablaActual="calderas";

/* LOGIN */
window.login=async()=>{
 const {error}=await supabase.auth.signInWithPassword({
   email:email.value,
   password:password.value
 });
 if(error) errorBox.innerText=error.message;
 else iniciarPanel();
}

window.logout=async()=>{await supabase.auth.signOut();location.reload()}

async function iniciarPanel(){
 login.style.display="none";
 panel.style.display="block";
 cambiarTabla("calderas");
}

/* CAMBIAR TABLA */
window.cambiarTabla=async(tabla)=>{
 tablaActual=tabla;
 crearFormulario();
 cargarLista();
}

/* FORMULARIO SIMPLE */
function crearFormulario(){
 formulario.innerHTML=`
 <h2>Nuevo ${tablaActual}</h2>
 <input id="nombre" placeholder="Nombre">
 <input id="marca" placeholder="Marca">
 <input id="precio" type="number" placeholder="Precio">
 <input id="imagen_url" placeholder="Imagen URL">
 <button onclick="guardar()">Guardar</button>
 `;
}

/* GUARDAR */
window.guardar=async()=>{
 await supabase.from(tablaActual).insert([{
   nombre:nombre.value,
   marca:marca.value,
   precio:precio.value,
   imagen_url:imagen_url.value
 }]);
 cargarLista();
}

/* LISTAR */
async function cargarLista(){
 const {data}=await supabase.from(tablaActual).select("*").order("id",{ascending:false});
 lista.innerHTML="";
 data.forEach(p=>{
   lista.innerHTML+=`
   <div class="card">
     <b>${p.nombre||""}</b> — ${p.precio||""}€
     <br><button onclick="borrar('${p.id}')">Borrar</button>
   </div>`;
 });
}

/* BORRAR */
window.borrar=async(id)=>{
 await supabase.from(tablaActual).delete().eq("id",id);
 cargarLista();
}
                            <h4 class="boiler-name">Caldera Bosch Condens 4300i W 24/25</h4>
                            <div class="boiler-price">1.350€</div>
                            <ul class="boiler-features">
                                <li>Durabilidad</li>
                                <li>Tecnología</li>
                                <li>Eficiencia</li>
                            </ul>
                        </div>
                        <div class="boiler-card">
                            <img src="images/caldera-saunier-duval.png" alt="Caldera Saunier Duval ThemaCondens 26 MiSet - Caldera de alta eficiencia" class="boiler-image">
                            <h4 class="boiler-name">Caldera Saunier Duval ThemaCondens 26 MiSet</h4>
                            <div class="boiler-price">1.890€</div>
                            <ul class="boiler-features">
                                <li>Tecnología</li>
                                <li>Rendimiento</li>
                                <li>Conectividad</li>
                            </ul>
                        </div>
                        <div class="boiler-card">
                            <img src="images/caldera-vaillant.png" alt="Caldera Vaillant ecoTEC plus VMW 26CS - Caldera inteligente con conectividad" class="boiler-image">
                            <h4 class="boiler-name">Caldera Vaillant ecoTEC plus VMW 26CS + Senso Home Radio</h4>
                            <div class="boiler-price">1.960€</div>
                            <ul class="boiler-features">
                                <li>Tecnología</li>
                                <li>Calidad</li>
                                <li>Conectividad</li>
                            </ul>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 2rem;">
                        <a href="https://wa.me/34644278969?text=Hola,%20me%20gustaría%20consultar%20sobre%20las%20calderas%20Baxi%20disponibles" target="_blank" class="btn btn-primary">Consulta calderas disponibles</a>
                    </div>
                </div>
                <div class="catalog-grid" style="margin-top: 4rem;">
                    <div class="catalog-item">
                        <div class="catalog-icon">⚡</div>
                        <h3>Termos Eléctricos de Agua Caliente</h3>
                        <p>Ideales para viviendas sin instalación de gas o para segundas residencias. Son seguros, fáciles de instalar y requieren poco mantenimiento.</p>
                        <ul class="catalog-features">
                            <li>Seguros y fiables</li>
                            <li>Fácil instalación</li>
                            <li>Bajo mantenimiento</li>
                            <li>Perfectos para viviendas sin gas</li>
                        </ul>
                    </div>
                    <div class="catalog-item">
                        <div class="catalog-icon">💧</div>
                        <h3>Calentadores de Gas</h3>
                        <p>Una solución práctica y económica para producir agua caliente sanitaria de forma instantánea, sin necesidad de acumulación.</p>
                        <ul class="catalog-features">
                            <li>Agua caliente instantánea</li>
                            <li>Solución económica</li>
                            <li>Sin necesidad de acumulación</li>
                            <li>Compactos y eficientes</li>
                        </ul>
                    </div>
                </div>
                <div class="catalog-advice">
                    <h3>Asesoramiento Personalizado</h3>
                    <p>Te asesoramos personalmente para que elijas el equipo más adecuado en función de:</p>
                    <div class="advice-list">
                        <div class="advice-item">
                            <span class="advice-icon">📐</span>
                            <span>Tamaño de tu vivienda</span>
                        </div>
                        <div class="advice-item">
                            <span class="advice-icon">🚿</span>
                            <span>Número de baños y puntos de agua</span>
                        </div>
                        <div class="advice-item">
                            <span class="advice-icon">💡</span>
                            <span>Consumo habitual de agua caliente y calefacción</span>
                        </div>
                        <div class="advice-item">
                            <span class="advice-icon">💰</span>
                            <span>Presupuesto disponible</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Página Catálogo Ariston -->
    <div id="page-catalogo-ariston" class="page">
        <section class="section section-alt" style="padding-top: 100px;">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Catálogo Ariston</h2>
                    <div class="title-underline"></div>
                    <p class="section-subtitle">Calderas Ariston con instalación profesional incluida</p>
                </div>
                <div class="brand-header">
                    <img src="images/logos/ariston.png" alt="Ariston - Logo oficial" class="brand-logo">
                </div>
                <div class="boilers-section">
                    <h3 class="boilers-title">Calderas Ariston más vendidas con la instalación incluida</h3>
                    <div class="boilers-grid">
                        <div class="boiler-card">
                            <img src="images/caldera-bosch.png" alt="Caldera Bosch Condens 4300i W 24/25 - Caldera de condensación eficiente" class="boiler-image">
                            <h4 class="boiler-name">Caldera Bosch Condens 4300i W 24/25</h4>
                            <div class="boiler-price">1.350€</div>
                            <ul class="boiler-features">
                                <li>Durabilidad</li>
                                <li>Tecnología</li>
                                <li>Eficiencia</li>
                            </ul>
                        </div>
                        <div class="boiler-card">
                            <img src="images/caldera-saunier-duval.png" alt="Caldera Saunier Duval ThemaCondens 26 MiSet - Caldera de alta eficiencia" class="boiler-image">
                            <h4 class="boiler-name">Caldera Saunier Duval ThemaCondens 26 MiSet</h4>
                            <div class="boiler-price">1.890€</div>
                            <ul class="boiler-features">
                                <li>Tecnología</li>
                                <li>Rendimiento</li>
                                <li>Conectividad</li>
                            </ul>
                        </div>
                        <div class="boiler-card">
                            <img src="images/caldera-vaillant.png" alt="Caldera Vaillant ecoTEC plus VMW 26CS - Caldera inteligente con conectividad" class="boiler-image">
                            <h4 class="boiler-name">Caldera Vaillant ecoTEC plus VMW 26CS + Senso Home Radio</h4>
                            <div class="boiler-price">1.960€</div>
                            <ul class="boiler-features">
                                <li>Tecnología</li>
                                <li>Calidad</li>
                                <li>Conectividad</li>
                            </ul>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 2rem;">
                        <a href="https://wa.me/34644278969?text=Hola,%20me%20gustaría%20consultar%20sobre%20las%20calderas%20Ariston%20disponibles" target="_blank" class="btn btn-primary">Consulta calderas disponibles</a>
                    </div>
                </div>
                <div class="catalog-grid" style="margin-top: 4rem;">
                    <div class="catalog-item">
                        <div class="catalog-icon">⚡</div>
                        <h3>Termos Eléctricos de Agua Caliente</h3>
                        <p>Ideales para viviendas sin instalación de gas o para segundas residencias. Son seguros, fáciles de instalar y requieren poco mantenimiento.</p>
                        <ul class="catalog-features">
                            <li>Seguros y fiables</li>
                            <li>Fácil instalación</li>
                            <li>Bajo mantenimiento</li>
                            <li>Perfectos para viviendas sin gas</li>
                        </ul>
                    </div>
                    <div class="catalog-item">
                        <div class="catalog-icon">💧</div>
                        <h3>Calentadores de Gas</h3>
                        <p>Una solución práctica y económica para producir agua caliente sanitaria de forma instantánea, sin necesidad de acumulación.</p>
                        <ul class="catalog-features">
                            <li>Agua caliente instantánea</li>
                            <li>Solución económica</li>
                            <li>Sin necesidad de acumulación</li>
                            <li>Compactos y eficientes</li>
                        </ul>
                    </div>
                </div>
                <div class="catalog-advice">
                    <h3>Asesoramiento Personalizado</h3>
                    <p>Te asesoramos personalmente para que elijas el equipo más adecuado en función de:</p>
                    <div class="advice-list">
                        <div class="advice-item">
                            <span class="advice-icon">📐</span>
                            <span>Tamaño de tu vivienda</span>
                        </div>
                        <div class="advice-item">
                            <span class="advice-icon">🚿</span>
                            <span>Número de baños y puntos de agua</span>
                        </div>
                        <div class="advice-item">
                            <span class="advice-icon">💡</span>
                            <span>Consumo habitual de agua caliente y calefacción</span>
                        </div>
                        <div class="advice-item">
                            <span class="advice-icon">💰</span>
                            <span>Presupuesto disponible</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Página Catálogo Ferroli -->
    <div id="page-catalogo-ferroli" class="page">
        <section class="section section-alt" style="padding-top: 100px;">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Catálogo Ferroli</h2>
                    <div class="title-underline"></div>
                    <p class="section-subtitle">Calderas Ferroli con instalación profesional incluida</p>
                </div>
                <div class="brand-header">
                    <img src="images/logos/ferroli.png" alt="Ferroli - Logo oficial" class="brand-logo">
                </div>
                <div class="boilers-section">
                    <h3 class="boilers-title">Calderas Ferroli más vendidas con la instalación incluida</h3>
                    <div class="boilers-grid">
                        <div class="boiler-card">
                            <img src="images/caldera-bosch.png" alt="Caldera Bosch Condens 4300i W 24/25 - Caldera de condensación eficiente" class="boiler-image">
                            <h4 class="boiler-name">Caldera Bosch Condens 4300i W 24/25</h4>
                            <div class="boiler-price">1.350€</div>
                            <ul class="boiler-features">
                                <li>Durabilidad</li>
                                <li>Tecnología</li>
                                <li>Eficiencia</li>
                            </ul>
                        </div>
                        <div class="boiler-card">
                            <img src="images/caldera-saunier-duval.png" alt="Caldera Saunier Duval ThemaCondens 26 MiSet - Caldera de alta eficiencia" class="boiler-image">
                            <h4 class="boiler-name">Caldera Saunier Duval ThemaCondens 26 MiSet</h4>
                            <div class="boiler-price">1.890€</div>
                            <ul class="boiler-features">
                                <li>Tecnología</li>
                                <li>Rendimiento</li>
                                <li>Conectividad</li>
                            </ul>
                        </div>
                        <div class="boiler-card">
                            <img src="images/caldera-vaillant.png" alt="Caldera Vaillant ecoTEC plus VMW 26CS - Caldera inteligente con conectividad" class="boiler-image">
                            <h4 class="boiler-name">Caldera Vaillant ecoTEC plus VMW 26CS + Senso Home Radio</h4>
                            <div class="boiler-price">1.960€</div>
                            <ul class="boiler-features">
                                <li>Tecnología</li>
                                <li>Calidad</li>
                                <li>Conectividad</li>
                            </ul>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 2rem;">
                        <a href="https://wa.me/34644278969?text=Hola,%20me%20gustaría%20consultar%20sobre%20las%20calderas%20Ferroli%20disponibles" target="_blank" class="btn btn-primary">Consulta calderas disponibles</a>
                    </div>
                </div>
                <div class="catalog-grid" style="margin-top: 4rem;">
                    <div class="catalog-item">
                        <div class="catalog-icon">⚡</div>
                        <h3>Termos Eléctricos de Agua Caliente</h3>
                        <p>Ideales para viviendas sin instalación de gas o para segundas residencias. Son seguros, fáciles de instalar y requieren poco mantenimiento.</p>
                        <ul class="catalog-features">
                            <li>Seguros y fiables</li>
                            <li>Fácil instalación</li>
                            <li>Bajo mantenimiento</li>
                            <li>Perfectos para viviendas sin gas</li>
                        </ul>
                    </div>
                    <div class="catalog-item">
                        <div class="catalog-icon">💧</div>
                        <h3>Calentadores de Gas</h3>
                        <p>Una solución práctica y económica para producir agua caliente sanitaria de forma instantánea, sin necesidad de acumulación.</p>
                        <ul class="catalog-features">
                            <li>Agua caliente instantánea</li>
                            <li>Solución económica</li>
                            <li>Sin necesidad de acumulación</li>
                            <li>Compactos y eficientes</li>
                        </ul>
                    </div>
                </div>
                <div class="catalog-advice">
                    <h3>Asesoramiento Personalizado</h3>
                    <p>Te asesoramos personalmente para que elijas el equipo más adecuado en función de:</p>
                    <div class="advice-list">
                        <div class="advice-item">
                            <span class="advice-icon">📐</span>
                            <span>Tamaño de tu vivienda</span>
                        </div>
                        <div class="advice-item">
                            <span class="advice-icon">🚿</span>
                            <span>Número de baños y puntos de agua</span>
                        </div>
                        <div class="advice-item">
                            <span class="advice-icon">💡</span>
                            <span>Consumo habitual de agua caliente y calefacción</span>
                        </div>
                        <div class="advice-item">
                            <span class="advice-icon">💰</span>
                            <span>Presupuesto disponible</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Página Instalaciones -->
    <div id="page-instalaciones" class="page">
        <section class="section" style="padding-top: 100px;">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Galería de Instalaciones</h2>
                    <div class="title-underline"></div>
                    <p class="section-subtitle">Algunos de nuestros trabajos realizados</p>
                </div>
                <div class="gallery-section">
                    <div class="gallery-grid" id="galleryGrid">
                    </div>
                    <p style="text-align: center; color: var(--text-light); margin-top: 2rem; padding: 2rem; background: var(--gray-light); border-radius: 8px;">
                        Haz clic en cualquier imagen para verla en tamaño completo
                    </p>
                </div>
            </div>
        </section>
    </div>

    <!-- Página Contacto -->
    <div id="page-contacto" class="page">
        <section class="section section-alt" style="padding-top: 100px;">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Contacto</h2>
                    <div class="title-underline"></div>
                    <p class="section-subtitle">Solicita tu presupuesto sin compromiso</p>
                </div>
                <div class="contact-content">
                    <div class="contact-intro">
                        <p class="contact-intro-text">Estamos aquí para ayudarte. Elige el método de contacto que prefieras y te responderemos lo antes posible.</p>
                    </div>
                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="contact-method-icon">📞</div>
                            <div class="contact-method-content">
                                <h3>Teléfono</h3>
                                <p class="contact-method-description">Llámanos para una consulta rápida</p>
                                <a href="tel:+34644278969" class="contact-link-large">644 278 969</a>
                            </div>
                        </div>
                        <div class="contact-method">
                            <div class="contact-method-icon">✉️</div>
                            <div class="contact-method-content">
                                <h3>Email</h3>
                                <p class="contact-method-description">Escríbenos y te responderemos pronto</p>
                                <a href="mailto:info@instalacionesjf.es" class="contact-link-large">info@instalacionesjf.es</a>
                            </div>
                        </div>
                        <div class="contact-method contact-method-whatsapp">
                            <div class="contact-method-icon">
                                <svg class="whatsapp-icon" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            </div>
                            <div class="contact-method-content">
                                <h3>WhatsApp</h3>
                                <p class="contact-method-description">Chatea con nosotros directamente</p>
                                <a href="https://wa.me/34644278969" target="_blank" class="whatsapp-link-large">
                                    <svg class="whatsapp-icon-small" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    Enviar mensaje
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="contact-hours">
                        <h3>Horario de Atención</h3>
                        <p>Lunes a Viernes: 9:00 - 18:00</p>
                        <p class="contact-hours-note">Estamos disponibles para atenderte en estos horarios. Para emergencias, contacta por teléfono o WhatsApp.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Lightbox para galería -->
    <div class="lightbox" id="lightbox">
        <button class="lightbox-close" id="lightboxClose">&times;</button>
        <button class="lightbox-prev" id="lightboxPrev">‹</button>
        <button class="lightbox-next" id="lightboxNext">›</button>
        <div class="lightbox-content">
            <img id="lightboxImage" src="" alt="">
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-left">
                    <div class="footer-logo">
                        <img src="images/logoWeb.svg" alt="JF Instalaciones - Logo de empresa especializada en calderas y calefacción">
                    </div>
                    <div class="footer-info">
                        <p>&copy; 2026 JF Instalaciones. Todos los derechos reservados.</p>
                        <p>Especialistas en calderas, calefacción y agua caliente sanitaria.</p>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="footer-authorization">
                        <img src="images/autorizacion.png" alt="Empresa instaladora autorizada por el Ministerio de Industria y la Comunidad de Madrid" class="authorization-image">
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
