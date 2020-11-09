import styled from 'styled-components'

export const Container = styled.input`
  outline: none;
  & + & {
    margin-top: 16px;
  }

  
  &::placeholder {
    color: red;
  }
`