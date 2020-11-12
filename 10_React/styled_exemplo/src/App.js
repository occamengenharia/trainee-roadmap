import Input from './components/Input'

import { Container, StyledInput } from './styles'

function App() {
  return (
    <Container>
      <div>
        <Input placeholder="username"/>
        <Input placeholder="full name"/>
        <StyledInput placeholder="e-mail"/>


      </div>
    </Container>
  );
}

export default App;
