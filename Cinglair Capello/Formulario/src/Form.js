import React, { useState, useCallback, useEffect } from 'react'
import api from './service/api'
import axios from 'axios'
import './Form.css';

function Form() {
  
  let [nome, setNome] = useState();  
  let [email, setEmail] = useState();
  let [cep, setCep] = useState();
  let [rua, setRua] = useState();
  let [bairro, setBairro] = useState();
  let [cidade, setCidade] = useState();
  let [estado, setEstado] = useState();
  let [numero, setNumero] = useState();

  async function handleMudarCep(event){

    setCep(event.target.value);
    const { data }  = await api.get(`/${event.target.value}`)
    console.log(data);
    setRua ( data.logradouro);
    setBairro (data.bairro);
    setCidade (data.cidade);
    setEstado (data.uf);

  }

  function onchangeNome(event){
    setNome(event.target.value) ;
  }

  function onchangeEmail(event){
    setEmail(event.target.value) ;
  }

  function onchangeRua(event){
    setRua(event.target.value) ;
  }

  function onchangeBairro(event){
    setBairro(event.target.value) ;
  }

  function onchangeCidade(event){
    setCidade(event.target.value) ;
  }

  function onchangeEstado(event){
    setEstado(event.target.value) ;
  }

  function onchangeNumero(event){
    setNumero(event.target.value) ;
  }

async function salvarDados(){
  var cadastro = new Object();
  cadastro.nome = nome;
  cadastro.email = email;
  cadastro.numero = numero;
  cadastro.cep = cep;
  cadastro.rua = rua;
  cadastro.cidade = cidade;
  cadastro.estado = estado;
  console.log(cadastro);

  await axios.post('http://localhost:3333/projects/', cadastro, {
        'content-type': 'application/json'
  });
  document.location.reload();
}

    return (
      <menu>
        <div>
          <h1>FORMULÁRIO</h1>
        </div>
        
        <div>
          <span>Nome</span>
          <input  onBlur = {onchangeNome} defaultValue={nome != '' ? nome : ''}/>
        </div>

        <div>
          <span>Celular</span>
        <input onChange = {onchangeNumero} defaultValue={numero != '' ? numero : ''}/>
        </div>

        <div>
          <span>Email</span>
          <input  onBlur = {onchangeEmail} defaultValue={email != '' ? email : ''}/>
        </div>
        
        <div>
          <span>CEP</span>
        <input  onBlur = {handleMudarCep} defaultValue={cep != '' ? cep : ''}/>
        </div>

        <div>
          <span>Rua</span>
        <input  onChange = {onchangeRua} defaultValue={rua != '' ? rua : ''}/>
        </div>

        <div>
          <span>Bairro</span>
        <input onChange = {onchangeBairro} defaultValue={bairro != '' ? bairro : ''}/>
        </div>
        

        <div>
          <span>Cidade</span>
        <input  onChange = {onchangeCidade} defaultValue={cidade != '' ? cidade : ''}/>
        </div>
        

        <div>
          <span>Estado</span>
        <input  onChange = {onchangeEstado} defaultValue={estado != '' ? estado : ''}/>
        </div>
        


        <div>
          <button onClick = {salvarDados}>CADASTRAR</button>
        </div>


      </menu>
    );
  }

export default Form;
