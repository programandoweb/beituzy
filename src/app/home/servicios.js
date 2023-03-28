import Bg from '../../assets/beituzy/home/fondo-home.png'
const App=()=>{
  const width  = window.innerWidth;
  const height = 1853*width/1920; 
  return   <>
            <div className="container-fluid bg-top height" style={{backgroundImage: 'url("'+Bg+'")',height:height+'px'}}  >

                <div className="row min-height-2x ">
                  <div className="col-12 col-sm-6 center position-relative">
                    <div className="text-middle ">
                      <h2 className="text-white title-section-2x">Servicios</h2>
                      <div className="btn btn-secondary btn-lg btn-block mb-3">
                        <div className="row">
                          <div className="col title-sm">
                            Desarrollo de aplicativos
                          </div>
                          <div className="col-2">
                            +
                          </div>
                        </div>
                      </div>
                      <div className="btn btn-secondary btn-lg btn-block mb-3">
                        <div className="row">
                          <div className="col title-sm">
                            Soluciones pay to pay
                          </div>
                          <div className="col-2">
                            +
                          </div>
                        </div>
                      </div>
                      <div className="btn btn-secondary btn-lg btn-block mb-3">
                        <div className="row">
                          <div className="col title-sm">
                            Soluciones gateway
                          </div>
                          <div className="col-2">
                            +
                          </div>
                        </div>
                      </div>
                      <div className="btn btn-secondary btn-lg btn-block mb-3">
                        <div className="row">
                          <div className="col title-sm">
                            Posicionamiento SEO
                          </div>
                          <div className="col-2">
                            +
                          </div>
                        </div>
                      </div>
                      <div className="btn btn-secondary btn-lg btn-block mb-3">
                        <div className="row">
                          <div className="col title-sm">
                            Servicios Cloud
                          </div>
                          <div className="col-2">
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 pt-5 pr-0 position-relative">

                  </div>
                </div>
            </div>
          </>
}
export default App
