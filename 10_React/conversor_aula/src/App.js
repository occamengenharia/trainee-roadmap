import React, { useState, useCallback, useEffect } from 'react'
import api from './service/api'
import './styles.css'

function App() {
  let [quantidade, setQuantidade] = useState(100)
  let [moeda, setMoeda] = useState('USD')
  let [conversao, setConversao] = useState(0)
  let [currencies, setCurrencies] = useState([])
  let [currenciesNames, setCurrenciesNames] = useState({})

  useEffect(() => {
    async function load() {
      let { data } = await api.get('/currencies')

      delete data.BRL

      setCurrenciesNames(data)
      data = Object.keys(data)
      setCurrencies(data)
    }

    load()
  }, [])

  const handleConvert = useCallback(async () => {
    const {data} = await api.get(`/latest?amount=${quantidade}&from=BRL&to=${moeda}`)

    setConversao(data.rates[moeda].toFixed(2).replace('.', ','))
  }, [moeda, quantidade])

  function altera(e) {
    setMoeda(e.target.value)
    setConversao('')
    setQuantidade('')
  }


  return (
    <main id="content">
      <select className="select-currency" name="moeda" id="moeda" onChange={(e) => altera(e)}>
        <option hidden value="USD">{currenciesNames['USD']}</option>
        {currencies.map(c => {
          return (
            <option key={c} value={c}>{currenciesNames[c]}</option>
          )
        })}
      </select>
      
      <div className="flex-group">
        <aside>
          <input type="number" value={quantidade || ''} onChange={(e) => setQuantidade(e.target.value)} placeholder={`R$: ${quantidade}`}/>
        </aside>
        <aside>
          <input type="text" placeholder={`${moeda}: ${conversao}`}/>
        </aside>
      </div>
      <button style={{marginTop: 20}} onClick={handleConvert}>Calcular</button>
    </main>
  )
}

export default App
