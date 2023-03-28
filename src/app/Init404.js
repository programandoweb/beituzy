import React,{useState,useEffect} from 'react';
import logo from '../assets/images/new/logo_belle.png'
import Store from "../helpers/Store";
import Config from "../helpers/Config";
import Breadcrumbs from "./breadcrumbs";
import Profile from "./profile";

import {
  NavLink
} from "react-router-dom";

const   HtmlToReactParser = require('html-to-react').Parser;
let     htmlToReactParser = new HtmlToReactParser();


const App=()=>{

  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.getElementById("sidebar").style.height = window.innerHeight+"px";
    if (Store.get("user").user_id!==undefined) {
      setMenu(Store.get("user").menu)
    }
  },[])

  const openSubMenu=(row,e)=>{
    e.preventDefault()
    if (open===row) {
      setOpen(false)
    }else {
      setOpen(row)
    }
  }

  return <>
          <div className="position-absolute w-100 top-0">
            <div className="p-3 bg-gray text-white">
              s
            </div>
          </div>
          <div className="container-fluid position-relative">
            <div className="row">
              <div className="col-12 col-sm-2 sidebar" id="sidebar">
                <div className="row justify-content-center mt-3 ">
                  <div className="text-center col-6 mb-3">
                    <img src={logo} alt="PGRW" className="img-fluid"/>
                  </div>
                  <div className="col-12 p-0" id="vertical">
                    <nav className="navbar-default">
                      <div id="navbarSupportedContent" className="collapse-navbar-collapse">
                        <ul className="navbar-nav d-flex flex-column">
                          <li className="nav-item dropdown ttmenu-full active">
                            <a href={Config.ConfigAppUrl} className="text-white">Inicio</a>
                          </li>
                          {menu?<>{
                            menu.roles_modulos_padre.map((row,key)=>{
                              let icons_   =  htmlToReactParser.parse(row.ico);
                              return  <li key={key} className="nav-item dropdown ttmenu-full" >
                                        <a href="./"  data-toggle="dropdown"
                                            className="dropdown-toggle cursor-pointer"
                                            aria-expanded="false"
                                            onClick={(e)=>openSubMenu("show"+key,e)}>
                                          <span className="cursor-pointer">
                                            {icons_}
                                            {row.modulo}
                                          </span>
                                        </a>
                                            <ul class={open==="show"+key?"dropdown-menu vertical-menu show":"d-none dropdown-menu vertical-menu"} id={"show"+key}>
                                              <li>
                                                <div className="ttmenu-content">
                                                  <div className="row row-mega-menu">
                                                  {menu.roles_modulos_hijos[row.id][0].map((row2,key2)=>{
                                                    let icons2_   =  htmlToReactParser.parse(row2.ico);
                                                    return    <div className="col-12 col-sm-3 mb-5" key={key2}>
                                                                <h4 className="d-flex align-items-start">
                                                                  {icons2_}
                                                                  {row2.modulo}
                                                                </h4>
                                                                {menu.roles_modulos_nietos[row2.id].length>0?<>
                                                                  <ul>
                                                                    {
                                                                      menu.roles_modulos_nietos[row2.id].map((row3,key3)=>{
                                                                        return  <li key={key3}>
                                                                                  <NavLink  to={"/"+row3.url}
                                                                                            activeClassName="selected">
                                                                                    {row3.modulo}
                                                                                  </NavLink>
                                                                                </li>
                                                                      })
                                                                    }
                                                                  </ul>
                                                                </>:false}
                                                              </div>
                                                  })}
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>

                                      </li>
                            })
                          }</>:false}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-10" onClick={()=>setOpen(false)}>
                <div className="navtop pl-3 pt-3 pb-3">
                  <div className="row">
                    <div className="col">
                      <Breadcrumbs/>
                    </div>
                    <div className="col text-right">
                      <Profile/>
                    </div>
                  </div>

                </div>
                <div className="bg-white mt-3 text-center">
                  <h3>Componente no existe o no tienes privilegios para estar aquí</h3>
                </div>
              </div>
            </div>
          </div>
        </>
}

export default App;
