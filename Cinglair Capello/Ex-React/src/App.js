import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import './App.css'
import api from './services/api'


function  App(){
    const [projetos, setProjetos] = useState([]);
    useEffect( ()=>{
        api.get("/projects").then((response)=>{
             setProjetos(response.data);
        })
    }, [])

    return (
        <div className = "AreaProjetos">
            {projetos.map(
                projeto => (
                    <Header projeto = {projeto}/>
                )
            )}
        </div>
    );

}

export default App;