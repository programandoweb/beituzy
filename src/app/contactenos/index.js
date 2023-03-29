import React,{useState} from 'react';
import Functions from "../../helpers/Functions";
import Bg from '../../assets/beituzy/contactenos/cielo-contactenos.png'


const App=()=>{
  const [inputs, setInputs] = useState({});

  const onChange=(e)=>{
    let input = {...inputs}
        input[e.target.name]  = e.target.value
        setInputs(input)
  }

  function onSubmit(e){
    e.preventDefault()
    let data  = inputs
    Functions.PostAsync("Contacto","contactenos",data,{},{name:"callbackContinue",funct:callbackContinue})
  }

  function callbackContinue(data){

  }

  return  <>
            <div className="container-fluid bg-top min-height" style={{backgroundImage: 'url("'+Bg+'")'}} >
              <div className="row">
                <div className="col-12 col-sm-4 pt-5">

                </div>
                <div className="col-12 col-sm-4">
                  <div className="p-5 text-center slider">
                    <div className="text-white pt-5">
                      <h2 className="mb-0">Contáctenos</h2>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 positio">

                </div>
              </div>
            </div>
            <div className="container-fluid m-negativo">
              <div className="p-5"></div>
              <div className="row justify-content-center">

                <div className="col-12 col-sm-7 pt-5">
                  <h2 className="mb-0">Contáctenos</h2>
                  <h6 className="mb-0">
                    Conoce todos los canales que nuestro equipo de soporte tiene habilitados
                    para ti. Te responderemos lo antes posible.
                  </h6>
                </div>
              </div>
              <div className="row justify-content-center mb-5">
                <div className="col-12 col-sm-7 pt-5">
                  <div className="card  bg-primary2 text-white">
                    <div className="card-content p-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            info@beituzy.com
                          </div>
                          <div className="col">
                            Lunes a sábado 8:00 A.M. a 5:00 P.M.
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            +57(6)3117654
                          </div>
                          <div className="col">
                            Centro de Negocios Centros Torre 1 Oficina 305, Sector Galicia
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mb-5">
                <div className="col-12 col-sm-4 ">
                  <form onSubmit={onSubmit}>
                    <h3>Déjanos tu mensaje</h3>
                    <div className="mb-2">
                      <input className="form-control" name="nombre" onChange={onChange} placeholder="Nombre" />
                    </div>
                    <div className="mb-2">
                      <input className="form-control" name="email" onChange={onChange} placeholder="Email" />
                    </div>
                    <div className="mb-2">
                      <input className="form-control" name="telefono" onChange={onChange} placeholder="Teléfono" />
                    </div>
                    <div className="mb-2">
                      <textarea className="form-control" name="mensaje" onChange={onChange} placeholder="Escribe tu mensaje aquí">
                      </textarea>
                    </div>
                    <div className="mb-2">
                      <div className="text-right">
                        <button className="btn btn-primary btn-block" type="submit">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-sm-4 ">
                  <iframe title="google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7845703601943!2d-75.68591938533402!3d4.807013242065263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38873c14886ee5%3A0x895244a341e8ee7c!2sedificio%20centro%20de%20negocios!5e0!3m2!1ses!2sco!4v1680090421954!5m2!1ses!2sco" width="100%" height="450" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </>
}


export default App
