import styled from "styled-components";

export const Container = styled.main`
    font-family: Roboto, 'sans-serif';
    background: #141221;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        color: #fff;
        font-size: 36px;
        margin-bottom: 20px;
    }

    `

export const Form = styled.form`
    background: #fff;
    border-radius: 8px;
    padding: 16px;

    button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        padding: 0 16px;
        
        border: none;
        border-radius: 8px;
        background: #9FE841;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }

    @media only screen and (min-width: 768px){
        padding: 24px;
    }
`

export const CitySelect = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;

    select:nth-child(1){
        width: 20%;
        margin-right: 16px;
    }

    select:nth-child(2){
        width: 74%;
    }

    select{
        background: #efefef;
        height: 45px;
        border: none;
        border-radius: 8px;
        padding-left: 12px;
        appearance: none;
        cursor: pointer;
    }
`