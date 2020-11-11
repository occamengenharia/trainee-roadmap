import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import api from './services/api'


function  App(){
    const [projects, setProjects] = useState([]);
    useEffect( ()=>{
        api.get("/projects").then((resp)=>{
             setProjects(resp.data);
        })
    }, [])

    return (
        <div>
            {projetcs.map(
                atual => (
                    <Header projeto = {atual}/>
                )
            )}
        </div>
    );

}

export default App;
