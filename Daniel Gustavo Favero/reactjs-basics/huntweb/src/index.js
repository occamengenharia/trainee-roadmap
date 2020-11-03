// PRIMEIRO ARQUIVO A SER LIDO PELO REACTJS

import React from 'react'; // sempre é preciso importar o rect para o jsx funcionar
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//renderizar toda a aplicação
ReactDOM.render(
  //pegando todo conteudo do componente App e "jogando" na div root do index.html da pasta public
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
