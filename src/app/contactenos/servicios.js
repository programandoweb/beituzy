import Bg from '../../assets/beituzy/quienes_somos/fondo-quienes-somos.png'
const App=()=>{
  return   <>
            <div className="container-fluid bg-top height" style={{backgroundImage: 'url("'+Bg+'")'}}  >
                <div className="row min-height-2x ">
                  <div className="col-12 center position-relative">
                    <div className="text-middle-quienes-somos">
                      <h2 className="title-quienes-somos text-white text-center">¿Quienes somos?</h2>
                    </div>
                  </div>
                </div>
            </div>
          </>
}
export default App
