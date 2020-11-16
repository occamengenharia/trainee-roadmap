import styled from 'styled-components';


export const BodyInput = styled.div`
  position: relative;
  border:none;
  width: 100%;
  label {
      font: 400 1.4rem Poppins;
      color:white;
  }
  aside{
    border-radius: 0.8rem;
    background: white;
    border: 2px solid white;
    height: 3rem;
    display:flex;
    align-items:center;
    padding:.2rem .4rem;
    input {
      margin-top: 0.2rem;
      border:0;
      height:100%;
      width:100%;
      background:transparent;
      outline: 0;
      padding: 0  .6rem;
      font: 1.6rem;
    }
    span{
      height:1.6rem;
      font-size:1.6rem;
    }
    :focus-within::after {
      width: calc(100% -3.2rem);
      height: 4px;
      content: '';
      background: #191717;
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }

  }
  &+& {
      margin-top: 1.4rem;
  }

  

  

  
`;
