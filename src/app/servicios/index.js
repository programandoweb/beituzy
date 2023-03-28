import Bg from '../../assets/beituzy/servicios/fondo-servicios-superior.png'
import profesionales from '../../assets/beituzy/servicios/profesionales.png'

import Servicios from './servicios'

const App=()=>{
  return  <>
            <div className="container-fluid bg-top min-height" style={{backgroundImage: 'url("'+Bg+'")'}} >
              <div className="row justify-content-center">
                <div className="col-12 col-sm-12">
                  <div className="p-5 text-center slider">
                    <div className="text-white pt-5">
                      <h2 className="mb-0">Servicios</h2>
                      <h5>conoce nuestros servicios complementarios</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 positio">

                </div>
              </div>
            </div>
            <div className="container-fluid m-negativo">
              <div className="row">
                <div className="col-12 col-sm-1">

                </div>
                <div className="col-12 col-sm-5 pt-5">
                  <div className="p-5"></div>
                  <div className="p-5"></div>
                  <p>
                      Como integradora multiempresarial contamos con uno de los
                      portafolios más amplios y diversos de la industria, hoy
                      prestamos a nuestros clientes más de 117 servicios y 11
                      productos diferentes, nuestro campo de acción nos permite
                      llegar a cualquier País del mundo donde se pueda garantizar
                      una conexión a Internet con ancho de banda superior a 3,5 megas de bajada.
                      <br/>
                      <br/>
                      Sin embargo ninguno de nuestros servicios o productos se encuentran limitados,
                      nuestra promesa de venta nos permite hoy garantizar que el 100% de estos
                      pueden ser modificados con el fin de adaptarlos a las necesidades de nuestros
                      clientes y consumidores finales.
                  </p>
                  <div className="p-5"></div>
                  <div className="p-5"></div>
                </div>
                <div className="col-12 col-sm-6">
                  <img className="col-10" src={profesionales} alt=""/>
                </div>
              </div>
            </div>
            <Servicios/>
          </>
}


export default App
