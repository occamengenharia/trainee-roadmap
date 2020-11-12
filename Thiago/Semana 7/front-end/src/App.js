import React,{useState, useEffect} from 'react'
import api from './services/api'
import Header from './components/Header'
import './App.css'

function App () {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        api.get('posts').then(response =>{
            console.log(response)
            setProjects(response.data)
        })
    },[])

    function HandleAddProject(){
      api.post('posts',{
          title: `novo projeto ${Date.now()}`,
          author: "thiago Caun"
      }).then(response=>{const project = response.data;
        setProjects([...projects,project])})
      

    }

    return (
        <>
        <Header title = "Projects" />
        <ul>
    {projects.map(project => <li key= {project.id}>{project.title}</li>)}
        </ul>
        <button type = "button" onClick = {HandleAddProject} >adicionar projeto</button>
        </>
    )   
}
export default App;