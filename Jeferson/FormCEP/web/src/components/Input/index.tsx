import React, { InputHTMLAttributes, ChangeEvent, Children } from 'react';
import { BodyInput } from './styles';
import { Link } from 'react-router-dom';
import InputMask, { Props } from 'react-input-mask';

interface InputProps extends Props {
  name: string;
  label?: string;
  icon?: React.ReactNode;
  error?:boolean;
}
const Input: React.FC<InputProps> = ({ name, label, icon, ...rest }) => {
  return (
    <BodyInput>
      <label htmlFor={name}>
        {label}
      </label>
      <aside>

        <span>{icon}</span>
        <InputMask type="text" id={name} name={name} maskChar="" {...rest} />
      </aside>
    </BodyInput>

  )

}

export default Input;