import Bg from '../../assets/beituzy/quienes_somos/fondo-quienes-somos.png'
import cometa from '../../assets/beituzy/quienes_somos/cometa.svg'

const App=()=>{

  return   <>
            <div className="container-fluid bg-top height position-relative" style={{backgroundImage: 'url("'+Bg+'")'}}  >
              <div className="position-absolute cometa">
                <img src={cometa} alt=""/>
              </div>
              <div className="row min-height-2x ">
                <div className="col-1"></div>
                <div className="col-9 center position-relative ">
                  <div className="text-middle-quienes-somos ">
                    <div className="p-100"></div>
                    <h2 className="title-quienes-somos text-white text-center">¿Quienes somos?</h2>
                    <p className="text-white">
                      Beituzy™️ es una de las integradoras multiempresas del campo de la ingeniería social, la programación y el posicionamiento SEO más importantes de América Latina, nacimos en el 2008 en la ciudad de Pereira (Risaralda) Colombia, hoy estamos presentes gracias a nuestros partners de internacionalización en Brasil, Chile, Argentina, México y España desde donde atendemos operaciones a más de 45 clientes en 9 Países del mundo.
                      <br/>
                      <br/>
                      Todos nuestros sistemas hoy son implementados por medio del Sistema de Gestión a la Calidad ISO 9001 Versión 2008 e ISO 27001 Versión 2013.
                      <br/>
                      <br/>
                      Nuestros proyectos son desarrollados por la más alta ingeniería 100% Colombiana, Beituzy™️ tiene como lineamiento empresarial emplear más del 90% de su personal Administrativo y Operativo con mano de obra formada en Colombia, la inversión de sus acciones y capitales de participación así lo demuestran al ser accionista de importantes integradoras tecnológicas donde genera 56 fuentes de trabajo directos, ¡bienvenidos a una empresa de pujanza Paisa con proyección mundial!.
                      <br/>
                      <br/>
                      Hoy orgullosamente somos parte de la comunidad ParqueSoft®️ Risaralda, en dónde hemos establecido una unidad de programación avanzada para nuestro proyecto JobERP®️, así mismo contamos con sedes propias en la ciudades de Medellín, Bogotá, Cali y Manizales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
}
export default App
