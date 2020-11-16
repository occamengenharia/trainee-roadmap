import React, { useState, FormEvent, useCallback, ChangeEvent, useEffect, useRef } from 'react';
import { BodyForm } from './styles';
import Input from '../../components/Input';
import { MdColorLens, MdEmail } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi';
import Axios from 'axios';
const Form = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cep: "",
    celular: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: ""
  });
  const [errorFormData, setErrosFormData] = useState({
    nome: false,
    email: false,
    cep: false,
    celular: false,
    logradouro: false,
    bairro: false,
    localidade: false,
    uf: false
  });
  const handleSubmit = (event: FormEvent) => {
    //event.preventDefault();
    Object.keys(formData).forEach((prop) => {
      console.log(prop); //column01...
  });

    
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }
  useEffect(() => {

    const res = Axios
      .get(`https://viacep.com.br/ws/${formData.cep}/json`)
      .then((response) => {
        const celular = `(${response.data.ddd})`;
        setFormData({ ...formData, ...response.data, celular })
      })

  }, [formData.cep.length >= 9])
  return (
    <BodyForm>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          label="Nome"
          name="nome"
          mask=""
        />
        <Input
          onChange={handleInputChange}
          label="Email"
          name="email"
          mask="" type="email"
          icon={<MdEmail />}
        />
        <Input
          onChange={handleInputChange}
          label="Cep"
          name="cep"
          mask="99999-999"
        />
        <Input
          onChange={handleInputChange}
          label="Celular"
          name="celular"
          mask="(99) 9-9999-9999"
          icon={<AiTwotonePhone />}
          value={formData.celular}
        />
        <Input
          onChange={handleInputChange}
          label="Rua"
          name="logradouro"
          mask=""
          defaultValue={formData.logradouro}
        />
        <Input
          onChange={handleInputChange}
          label="Bairro"
          name="bairro"
          mask=""
          defaultValue={formData.bairro}

        />
        <Input
          onChange={handleInputChange}
          label="Cidade"
          name="localidade"
          mask=""
          defaultValue={formData.localidade}
        />
        <Input
          onChange={handleInputChange}
          label="Uf"
          name="uf"
          mask=""
          defaultValue={formData.uf}
        />
        <section className="button">
          <span>
            <BiSend />
          </span>
          <button type="submit">Enviar</button>
        </section>
      </form>
    </BodyForm>
  )
}
export default Form;