import logo from '../../assets/beituzy/header/logo.svg'
import mail from '../../assets/beituzy/footer/mail.svg'
import phone from '../../assets/beituzy/footer/phone.svg'
const App=()=>{
  return  <footer className="p-5">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-3 text-center mb-3">
                  <img src={logo} alt="pgrw" className=" pt-4"/>
                </div>
              </div>
              <div className="row justify-content-center mb-2">
                <div className="col-12 col-sm-3 text-center text-white">
                  <img src={phone} alt="pgrw" className="col-3"/>  PBX(6)310 17 66
                </div>
                <div className="col-12 col-sm-3 text-center text-white">
                  <img src={mail} alt="pgrw" className="col-3"/>  informacion@beituzy.com
                </div>
              </div>
              <div className="row justify-content-center text-white">
                <div className="col-12 col-sm-3 text-center">
                    © 2021 Copyright All Right Reserved
                </div>
              </div>
            </div>
          </footer>
}

export default App
