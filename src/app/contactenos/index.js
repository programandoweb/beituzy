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
                            informacion@beituzy.com
                          </div>
                          <div className="col">
                            Lunes a sábado 8:00 A.M. a 5:00 P.M.
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            +57 555 888843
                          </div>
                          <div className="col">
                            Carrera 45 #55-65 Pereira
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
                  <iframe title="google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6673207793065!2d-75.68681428523719!3d4.827064196494762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3881c06573199b%3A0x74417381ceba030e!2sAlma%20Cat%20Centro%20Veterinario!5e0!3m2!1ses-419!2sco!4v1626355197286!5m2!1ses-419!2sco" width="100%" height="450" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </>
}


export default App
