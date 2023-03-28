import React,{useState,useEffect} from 'react';
import StateContext from '../helpers/ContextState';
import logo from '../assets/images/new/logo_belle.png'
import Store from "../helpers/Store";

import {
  BrowserRouter as Router
} from "react-router-dom";


function App(props) {

  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);

  // const openSubMenu=(row,e)=>{
  //   e.preventDefault()
  //   if (open===row) {
  //     setOpen(false)
  //   }else {
  //     setOpen(row)
  //   }
  // }

  useEffect(() => {
    document.getElementById("sidebar").style.height = window.innerHeight+"px";
    if (Store.get("user").user_id!==undefined && !menu) {
      setMenu(Store.get("user").menu)
    }
  },[])
  return  <StateContext.Provider value={{...props}}>
            <Router>
              <div className="position-absolute w-100 top-0">
                <div className="p-3 bg-gray text-white">
                  s
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-2 sidebar" id="sidebar">
                    <div className="row justify-content-center mt-3 ">
                      <div className="text-center col-6 mb-3">
                        <img src={logo} alt="PGRW" className="img-fluid"/>
                      </div>
                      <div className="col-12 p-0" id="vertical">
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-10" onClick={()=>setOpen(false)}>
                    {open?true:false}
                  </div>
                </div>
              </div>
          </Router>
        </StateContext.Provider>
}

export default App;
