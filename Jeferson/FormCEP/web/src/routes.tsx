import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Form from './pages/Form';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Form} />

    </BrowserRouter>
  )
}
export default Routes;