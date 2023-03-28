import Store from "../helpers/Store";
const App=()=>{
  return <div>{Store.get("user").nombre_usuario}</div>
}

export default App
