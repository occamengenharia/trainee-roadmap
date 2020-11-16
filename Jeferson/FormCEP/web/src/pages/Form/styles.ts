import styled from 'styled-components';


export const BodyForm = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    width:100vw;
    background-color:#191717;
    
    &,* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    form{
      display:flex;
      flex-direction:column;
      justify-content:center;
      width:min(900px,90vw);
      border-radius:.8rem;
      background-color:#2C2929;
      padding:2rem;
      .button{
        cursor: pointer;
        color:white;
        display:flex;
        margin:1.2rem 0;
        align-self:flex-end;
        width:12rem;
        height:3rem;
        span{
          font:500 1.4rem Poppins;
          height:100%;
          width:3rem;
          background-color:black;
          border-radius:.8rem 0 0 .8rem;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        button{
          height:100%;
          width:9rem;
          border: 0;
          background-color:#191717;
          border-radius: 0 .8rem .8rem 0;
          display:flex;
          align-items:center;
          justify-content:center;
          color:white;
          font:500 1.4rem Poppins;
          outline:0;
          cursor: pointer;
        }
        
      } 
    }
    
`;