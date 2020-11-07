import { useEffect, useState } from 'react'

function App() {
  let [ estado, setEstado ] = useState({}) 

  useEffect(() => {
      fetch('https://api.github.com/users/gprando').then(res =>  res.json().then(data=> setEstado(data)))
  }, [])



  return (
    <div className="App">
      <h1>Hellow OCCAM a hora é: </h1> 
      {estado.login}
      <br/>
      <button type="button"> mudar a hora</button>
    </div>
  );
}

export default App;
