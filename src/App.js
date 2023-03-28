import React,{useState,useEffect} from 'react';
import Store from "./helpers/Store";
import In from "./app/In";
import Out from "./app/Out";
import Modal from './screens/modal';

const App=()=>{
  const [user, setUser] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    Store.clear()
    if (Store.get("user").nombre_usuario!==undefined) {
      Store.get("user");
      setUser(Store.get("user"));
    }else {
      setUser(false);
    }
  },[])

  return <><Modal modalShow={modalShow} setModalShow={setModalShow}/>{user?<In  user={user}
                                                                                setUser={setUser}
                                                                                setModalShow={setModalShow}
                                                                                />:<Out
                                                                                setUser={setUser}
                                                                                setModalShow={setModalShow}/>}</>

}

export default App;
