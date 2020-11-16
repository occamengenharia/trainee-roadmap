import styled, {css} from "styled-components";

export const Container = styled.div`
    background: #efefef;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    margin-bottom: 16px;
    ${props => props.isFocused && css`
        border: 2px solid #9FE841;
    `}

    input{
        border-radius: 8px;
        outline: 0;
        background: #efefef;
        height: 45px;
        width: 100%;
        border: 0;
        margin-left: 12px;
        opacity: 25%;
    }

    input:invalid{
        box-shadow:none;
    }

    @media only screen and (min-width: 768px){
        width: 445px;
    }
`