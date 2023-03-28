import Bg from '../../assets/beituzy/home/fondo-home.png'
import Satelite from '../../assets/beituzy/home/satelite.svg'
import Cohete from '../../assets/beituzy/home/cohete-home.svg'
import Astronauta from '../../assets/beituzy/home/astronauta-1.svg'
import Planeta from '../../assets/beituzy/home/planeta1.svg'
const App=()=>{
  return   <>
            <div className="container-fluid bg-top height" style={{backgroundImage: 'url("'+Bg+'")'}}  >

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
                    <div className="b-0 position-absolute pl-0 pt-5">
                      <img src={Planeta} alt="" className="d-none d-sm-block col-9"/>
                    </div>
                    <div className="b-1 position-absolute pl-0 pt-5">
                      <img src={Astronauta} alt="" className="d-none d-sm-block col-8"/>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 pt-5 pr-0 position-relative">
                    <div className="row">
                      <div className="col-4 d-none d-sm-block">
                        <img src={Satelite} alt="" className="img-fluid"/>
                      </div>
                    </div>
                    <div className="text-right pt-5">
                      <div className="row">
                        <div className="col-4">

                        </div>
                        <div className="col-8 ">
                          <img src={Cohete} alt="" className="img-fluid d-none d-sm-block"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </>
}
export default App
