import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {MdPerson,MdEmail, MdSmartphone, MdHome, MdKeyboardTab, MdPlace} from 'react-icons/md';
import {FaMapSigns} from 'react-icons/fa';

import Input from './components/Input'
import './styles.css';
import {Form, Container, CitySelect} from './styles';

const Modal = withReactContent(Swal);

function App() {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const [disableInput, setDisableInput] = useState(false);

  //carregar ufs do ibge
  useEffect(()=>{
    async function loadUfs(){
      const {data} = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
      const ufInitials = data.map(uf => uf.sigla);
      setUfs(ufInitials);
    }

    loadUfs();
  }, [])

  //carregar cidades por UF
  useEffect(()=>{
    if(selectedUf === ''){
      return;
    }

    async function loadCities(){
      const {data} = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`);

      const cityNames = data.map(city=>city.nome);
      setCities(cityNames);
    }

    loadCities();
  }, [selectedUf]);

  //carregar informações do cep
  useEffect(()=>{
    //não realizar a consulta caso o cep não esteja completo
    if(cep.length < 8){
      setDisableInput(false);
      return;
    }

    async function loadAddress(){
      try{
        //consultar cep
        const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        setSelectedUf(data.uf);
        setSelectedCity(data.localidade);
        setAddress(data.logradouro);
        setNeighborhood(data.bairro);
        setDisableInput(true);
      } catch(err){
        console.log("Houve um erro ao tentar consultar o CEP. " + err);
      }
    }

    loadAddress();
  }, [cep]);

  function handleSelectedUf(event){
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectedCity(event){
    const city = event.target.value;
    setSelectedCity(city);
  }

  async function handleSubmit(event){
    event.preventDefault();
    
    const userData = {
      name,
      email,
      phone,
      cep,
      uf: selectedUf,
      city: selectedCity,
      address,
      neighborhood,
    }

    try{
      await axios.post('http://localhost:3333/users/', userData, {
        'content-type': 'application/json'
      });

      return Modal.fire(<h1>Usuário inserido com sucesso</h1>);
    } catch(err){
      console.log("Houve um erro ao tentar criar o usuário. " + err);
    }
  }

  return (
    <Container>
      <h1>Formulário legal</h1>
      <Form onSubmit={handleSubmit}>
        <Input placeholder={'nome'} icon={MdPerson} type={'text'} setState={setName}/>
        <Input placeholder={'email'} icon={MdEmail} type={'email'} setState={setEmail}/>
        <Input placeholder={'telefone'} icon={MdSmartphone} type={'tel'} setState={setPhone}/>
        <Input placeholder={'CEP'} icon={MdHome} type={'text'} setState={setCep}/>
        <CitySelect>
          <select 
            name="uf" 
            id="uf" 
            onChange={handleSelectedUf} 
            disabled={disableInput} 
            required
          >
            <option value="0" hidden>{selectedUf !== '0' ? selectedUf : 'UF'}</option>
            {ufs.map(uf => (
              <option key={uf} value={uf}>{uf}</option>
            ))}
          </select>
          <select 
            name="city" 
            id="city" 
            onChange={handleSelectedCity} 
            disabled={disableInput}
          >
            <option value="0" hidden>{selectedCity !== '0' ? selectedCity : 'Selecione uma cidade'}</option>
            {cities.map(city=>(
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </CitySelect>
        <Input 
          placeholder={'endereço'} 
          type={'text'} 
          icon={MdPlace}
          setState={setAddress} 
          state={address} 
          disable={disableInput}
        />
        <Input 
          placeholder={'bairro'} 
          type={'text'} 
          icon={FaMapSigns}
          setState={setNeighborhood} 
          state={neighborhood}
          disable={disableInput}
        />
        <button type="submit">
          <p>Enviar</p>
          <MdKeyboardTab />
        </button> 
      </Form>
    </Container>
  );
}

export default App;
