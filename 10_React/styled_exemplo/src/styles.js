import styled, { css } from 'styled-components'

import Input from './components/Input'

export const Container = styled.main`
  background: #fd84ac;

  ${props => props.checked && css`
    background: #f00;
  `}

  height: 100vh;
  width: 100vw;

  display: flex;

  justify-content: center;
  align-items: center;

  > div {
    border: 0;
    border-radius: 24px;
    background: #fff;
    width: 550px;
    height: 600px;

    display: flex;
    flex-direction: column;
    padding: 40px 20px;
  }
`

export const StyledInput = styled(Input)`
  &::placeholder {
    color: blue;
  }
`