import Bg from '../../assets/beituzy/home/cielo-home.png';
import Cohete from '../../assets/beituzy/home/cohete-home-principal.svg';
import Cohete2 from '../../assets/beituzy/home/nave-sobre-nosotros.png';
import Servicios from './servicios';

const App=()=>{
  return  <>
            <div className="container-fluid bg-top min-height" style={{backgroundImage: 'url("'+Bg+'")'}} >
              <div className="row">
                <div className="col">
                  <div className="p-5 text-center slider">
                    <div className="text-white pt-5">
                      <h2 className="mb-0">Apasionado</h2>
                      <h3>por el software</h3>
                      <div className="btn btn-primary btn-lg">
                        Contáctenos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-7">

                </div>
                <div className="col text-center">
                  <img src={Cohete} className="img-cohete" alt=""/>
                </div>
              </div>
            </div>
            <div className="container-fluid ">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <img src={Cohete2} className="img-fluid" alt=""/>
                </div>
                <div className="col-12 col-sm-6 pt-5">
                  <h1 className="title-section">Sobre nosotros</h1>
                  <p>
                      Somos una integradora multiempresa del campo de la ingeniería social,
                      la programación y el posicionamiento SEO creada en latinoamérica,
                      nacimos en la ciudad de Pereira (Risaralda) Colombia y rapidamente nos convertimos
                      en un punto de referencia de la industria de los servicios informáticos especializados.
                  </p>
                  <p>
                    Nuestro sistema IIS (Social Engineering interaction™) es el tercer sistema de posicionamiento Web
                    bajo demanda más utilizado por plataformas retail de Hispanoamérica, de la mano de nuestro partners
                    para el año 2020 proyectamos generar 5,45 millones de visitas dirigidas al día.

                  </p>
                </div>
              </div>
            </div>
            <Servicios/>
          </>
}


export default App
