import React,{useState,useEffect} from 'react';
import Input from '../../screens/inputs';
import Select from '../../screens/select';
import StateContext from '../../helpers/ContextState';
import Functions from '../../helpers/Functions';
import Config from '../../helpers/Config';
import queryString from 'query-string';
const queryStringParams = queryString.parse(window.location.search);


const App=(props)=>{
  const context         =   React.useContext(StateContext);
  const modulo          =   Functions.segments_modulos(queryStringParams.app);
  const [privilegios, setPrivilegios] = useState({});
  const [inputs, setInputs] = useState({});
  const [departamento, setDepartamento] = useState([]);
  const [municipio, setMunicipio] = useState([]);
  const [data, setData] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData(props.data)
    getInit()
  },[])


  const getInit=()=>{
    let data        =   {}
        data.user   =   context.Store.get("user").token
        data.app    =   JSON.stringify(modulo)
        data.token  =   context.Store.get("user").token
        data.tabla  =   "ma_tipo_funcionario"
        data.get_funcionarios    =   "ma_tipo_funcionario"
    Functions.PostAsync("Maestros","get_tablas_maestras",data,context,{name:"callbackTablasMaestras",funct:callbackTablasMaestras})
  }

  const callbackInit=(data)=>{
    if (data.response.data.departamento!=='0') {
      getMunicipio(data.response.data.departamento);
    }
    setData(data.response.data)
    setPrivilegios(data.response.privilegios)
    setInputs(data.response.data)
    setOpen(true)
  }

  const callbackTablasMaestras=(data)=>{
    setFullData(data.response.data)
    setFuncionarios(data.response.funcionarios)
    setDepartamento(data.response.data.ma_departamentos)
    let dataR        =   {}
        dataR.user   =   context.Store.get("user").token
        dataR.token  =   props.data.token
        dataR.app    =   JSON.stringify(modulo)
    Functions.PostAsync("Usuarios","getUsuario",dataR,context,{name:"callbackInit",funct:callbackInit})
  }

  const onChange=(e)=>{
    let inputs_                 =   {...inputs};
        inputs_[e.target.name]  =   e.target.value
        setInputs(inputs_)
      if (e.target.name==="departamento") {
        getMunicipio(e.target.value)
      }
      if (e.target.name==="apellidos") {
        let elemento    = document.getElementById("nombres");
        elemento.value  = e.target.value
      }
  }

  const getMunicipio=(departamento_)=>{
    let datar                =   {}
        datar.user           =   context.Store.get("user").token
        datar.token          =   context.Store.get("user").token
        datar.departamento   =   departamento_;
    Functions.PostAsync("Maestros","get_municipios",datar,context,{name:"callbackMunicipios",funct:callbackMunicipios})
  }

  const callbackMunicipios=(dataR)=>{
    setMunicipio(dataR.response.data)
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    let dataR                =   {...inputs}
        dataR.user           =   context.Store.get("user").token
        dataR.token          =   props.data.token
        dataR.app            =   JSON.stringify(modulo)
    Functions.PostAsync("Usuarios","setUsuarios",dataR,context,{name:"callbackSubmit",funct:callbackSubmit})
  }

  const callbackSubmit=(dataR)=>{
      context.setModalShow({
                              show:true,
                              size:"sm",
                              message:  <div className="text-center">
                                          <div>{dataR.response.message}</div>
                                          <div className="btn btn-primary mt-3" onClick={()=>context.setModalShow({show:false,message:"",size:"sm"})}>Continuar</div>
                                        </div>
                            })
  }

  return  <>  {open?<div className="row">
                      <div className="col pt-3">
                        <form onSubmit={onSubmit}>
                          <div className="row pb-2">
                            <div className="col-12 col-sm-12 mb-2">
                              <Select
                                  defaultValue={data.funcionario}
                                  title="Funcionario asignado"
                                  selectDefault="Funcionario asignado"
                                  data={(funcionarios!==undefined)?funcionarios:[]}
                                  name="funcionario"
                                  className="form-control"
                                  onChange={onChange}
                                />
                            </div>
                          </div>
                          <div className="row pb-2">
                            <div className="col-12 col-sm-4 mb-2">
                              <Select
                                  defaultValue={data.tipo_propiedad}
                                  title="Tipo de propiedad"
                                  selectDefault="Tipo de propiedad"
                                  data={(fullData.ma_tipo_propietario!==undefined)?fullData.ma_tipo_propietario:[]}
                                  name="tipo_propiedad"
                                  className="form-control"
                                  onChange={onChange}
                                />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">

                              <Select
                                  defaultValue={data.naturaleza}
                                  title="Naturaleza"
                                  selectDefault="Naturaleza"
                                  data={(fullData.ma_naturaleza!==undefined)?fullData.ma_naturaleza:[]}
                                  name="naturaleza"
                                  className="form-control"
                                  onChange={onChange}
                                />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Select
                                  defaultValue={data.tipo_identificacion}
                                  title="Tipo de identificación"
                                  selectDefault="Tipo de identificación"
                                  data={(fullData.ma_tipo_identificacion!==undefined)?fullData.ma_tipo_identificacion:[]}
                                  name="tipo_identificacion"
                                  className="form-control"
                                  onChange={onChange}
                                />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Input
                                  defaultValue={data.nro_documento}
                                  title="Número de documento"
                                  placeholder="Número de documento"
                                  type="text"
                                  name="nro_documento"
                                  className="form-control"
                                  onChange={onChange}
                              />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Input
                                  defaultValue={data.apellidos}
                                  title="Nombre Legal"
                                  placeholder="Nombre Legal"
                                  type="text"
                                  name="apellidos"
                                  className="form-control"
                                  onChange={onChange}
                              />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Input
                                  defaultValue={data.nombres}
                                  title="Nombre Comercial"
                                  placeholder="Nombre Comercial"
                                  type="text"
                                  name="nombres"
                                  className="form-control"
                                  onChange={onChange}
                              />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Select
                                  defaultValue={data.denominacion}
                                  title="Denominación"
                                  selectDefault="Denominación"
                                  data={(fullData.ma_denominacion!==undefined)?fullData.ma_denominacion:[]}
                                  name="denominacion"
                                  className="form-control"
                                  onChange={onChange}
                                />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Input
                                  defaultValue={data.contacto}
                                  title="Contacto"
                                  placeholder="Contacto"
                                  type="text"
                                  name="contacto"
                                  className="form-control"
                                  onChange={onChange}
                              />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Input
                                  defaultValue={data.email}
                                  title="Email"
                                  placeholder="Email"
                                  type="text"
                                  name="email"
                                  className="form-control"
                                  onChange={onChange}
                              />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Input
                                  defaultValue={data.telefono}
                                  title="Teléfono"
                                  placeholder="Teléfono"
                                  type="text"
                                  name="telefono"
                                  className="form-control"
                                  onChange={onChange}
                              />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Input
                                  defaultValue={data.celular}
                                  title="Celular"
                                  placeholder="Celular"
                                  type="text"
                                  name="celular"
                                  className="form-control"
                                  onChange={onChange}
                              />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Select
                                  defaultValue={data.cargo}
                                  title="Cargo"
                                  selectDefault="Cargo"
                                  data={(fullData.ma_cargos!==undefined)?fullData.ma_cargos:[]}
                                  name="cargo"
                                  className="form-control"
                                  onChange={onChange}
                                />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Select
                                  defaultValue={data.horario}
                                  title="Horario"
                                  selectDefault="Horario"
                                  data={(fullData.ma_horarios!==undefined)?fullData.ma_horarios:[]}
                                  name="horario"
                                  className="form-control"
                                  onChange={onChange}
                                />
                            </div>
                            <div className="col-12 col-sm-4 mb-2">
                              <Select
                                  defaultValue={data.departamento}
                                  title="Departamento"
                                  selectDefault="Departamento"
                                  data={departamento}
                                  name="departamento"
                                  className="form-control"
                                  onChange={onChange}
                                />
                            </div>


                            <div className="col-12 col-sm-4 mb-2">
                              {data.departamento!=='0' && municipio.length>0?<>
                                <Select
                                    defaultValue={data.municipio}
                                    title="Municipio"
                                    selectDefault="Municipio"
                                    data={municipio}
                                    name="municipio"
                                    className="form-control"
                                    onChange={onChange}
                                  />
                              </>:<div>
                                      Por favor espere...
                                      <input type="hidden" name="municipio" value={data.municipio} />
                                  </div>}
                            </div>
                            <div className="col-12 mb-2">
                              <Input
                                  defaultValue={data.direccion}
                                  title="Dirección"
                                  placeholder="Dirección"
                                  type="text"
                                  name="direccion"
                                  className="form-control"
                                  onChange={onChange}
                              />
                            </div>
                            <div className="col-12 col-sm-6 mb-2">
                              <Input
                                  defaultValue={data.sector}
                                  title="Sector"
                                  placeholder="Sector"
                                  type="text"
                                  name="sector"
                                  className="form-control"
                                  onChange={onChange}
                              />
                            </div>
                            <div className="col-12 col-sm-6 mb-2">
                              <Select
                                  defaultValue={data.estrato_economico}
                                  title="Estrato social"
                                  selectDefault="Estrato social"
                                  data={fullData.ma_estrato_economico}
                                  name="estrato_economico"
                                  className="form-control"
                                  onChange={onChange}
                                />
                            </div>
                            <div className="col-12 col-sm-6 mb-2">
                              <button type="submit" className="btn btn-primary mr-2">Grabar</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>:false}
          </>
}

export default App
