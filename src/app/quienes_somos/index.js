import Bg from '../../assets/beituzy/quienes_somos/cielo-quienes-somos.png'
import Astrologos from '../../assets/beituzy/quienes_somos/astrologos.png'

import Servicios from './servicios'

const App=()=>{
  return  <>
            <div className="container-fluid bg-top min-height" style={{backgroundImage: 'url("'+Bg+'")'}} >
              <div className="row">
                <div className="col-12 col-sm-4 pt-5">

                </div>
                <div className="col-12 col-sm-4">
                  <div className="p-5 text-center slider">
                    <div className="text-white pt-5">
                      <h2 className="mb-0">¿Quienes</h2>
                      <h3>somos?</h3>
                      <div className="btn btn-primary btn-lg">
                        Contáctenos
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 positio">

                </div>
              </div>
            </div>
            <div className="container-fluid m-negativo">
              <div className="row">
                <div className="col-12 col-sm-5">
                  <img src={Astrologos} className="img-fluid" alt=""/>
                </div>
                <div className="col-12 col-sm-6 pt-5">
                  <div className="p-5"></div>
                  <div className="p-5"></div>
                  <p>
                      Amamos lo que hacemos y nos comprometemos de lleno con cada uno de nuestros
                      proyectos, pero no nos limitamos a sólo funcionalidad, en esto marcamos la diferencia,
                      nuestros productos no sólo son potentes, también son bellos, creemos fielmente en la
                      idea de que un aplicativo debe ir más allá de la funcionalidad, siendo amigable con el usuario
                      y con el entorno que busca una solución informática, sabemos que no somos una agencia de
                      publicidad, pero debemos volar nuestra imaginación para entregar a nuestros clientes
                      software con un nivel de estética digno de una empresa.
                  </p>
                  <p>
                    <b>Nuestro eslogan ¡By your side! en español ¡A tu lado!</b>, es nuestra mayor promesa
                    de venta, entender a nuestros clientes se nos da muy bien, con el paso de los años
                    hemos entendido lo fundamental que resulta acompañar  a cada uno de nuestros
                    no sólo en el código, este si bien lo es todo para nosotros, es sólo un todo
                    de los muchos elementos a contemplar dentro de lo que cada empresario busca para su empresa,
                    en momentos donde el tiempo es un privilegio valioso, nos damos  a la tarea de no desperdiciar
                    el de nuestros clientes, por ello hacemos un profundo análisis de sus necesidades, garantizando
                    de esta manera que estaremos a la altura de sus necesidades.

                  </p>
                </div>
              </div>
            </div>
            <Servicios/>
          </>
}


export default App
