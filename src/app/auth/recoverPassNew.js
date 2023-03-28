import React,{useState,useEffect} from 'react';
import bg from '../../assets/images/new/fondo.png'
import logo from '../../assets/images/new/logo_belle.png'
import mujer from '../../assets/images/new/mujer-login.png'
import img1 from '../../assets/images/new/icon-usuario-login.svg'
import Functions from "../../helpers/Functions";
import { NavLink } from "react-router-dom";

const App=(props)=>{
  const [h, setH] = useState(window.innerHeight);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    document.getElementById("root").style.height = h+"px";
    setH(window.innerHeight);
  },[h])

  const onChange=(e)=>{
    Functions.Inputs(e,inputs, setInputs)
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    let data  = {...inputs}
    Functions.PostAsync("Users","recoverPWA",data,{},{name:"callbackContinue",funct:callbackContinue})
  }

  const callbackContinue=(data)=>{
    console.log(data);
  }

  return  <div className="container-fluid login" style={{ height:{h},backgroundImage: `url(${bg})`,}}>
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 mt-0 mt-sm-5 pt-5">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-sm-5">
                        <div className="logo text-center">
                          <img className="col-7" src={logo} alt="Logo"/>
                        </div>
                        <div className="welcome text-center mt-3">
                          <h1>¡Bienvenidos!</h1>
                        </div>
                        <form onSubmit={onSubmit}>
                          <div className="mt-4">
                            <div className="input-group d-flex align-items-center">
                              <span className="input-group-addon">
                                  <i aria-hidden="true">
                                    <img src={img1} alt="login" />
                                  </i>
                              </span>
                              <input  className="form-control space"
                                      type="text"
                                      name="nombre_usuario"
                                      placeholder="Usuario"
                                      require="require"
                                      onChange={onChange}/>
                            </div>
                          </div>
                          <div className="mt-2">
                            <button className=" form-control2 btn btn-primary btn-block" type="submit">
                              Recuperar contrasena
                            </button>
                          </div>
                          <div className="mt-2 text-right">
                            {console.log(props)}
                            <NavLink to="/" activeClassName="selected" className="contrasena">
                              Iniciar sesión
                            </NavLink>
                          </div>
                        </form>
                      </div>
                      <div className="col-7 position-relative d-none d-sm-block">
                        <img src={mujer} className="col-122 mujer position-absolute" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
}

export default App;
