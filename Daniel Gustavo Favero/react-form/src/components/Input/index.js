import React, { useState } from 'react';
import { Container } from './styles';

function Input({ placeholder, icon: Icon, type, state, setState, disable }){
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus(){
    setIsFocused(true)
  }

  function handleInputBlur(e){
    setIsFocused(false);
    setState(e.target.value);
  }

  return (
    <Container
        isFocused={isFocused}
    >
      {Icon && <Icon size={24} style={{opacity: '25%'}}/>}
      <input 
        type={type} 
        placeholder={placeholder} 
        onFocus={handleInputFocus} 
        onBlur={handleInputBlur}
        defaultValue={state !== '' ? state : ''}
        disabled={disable}
        required
      />
    </Container>
  );
}

export default Input;