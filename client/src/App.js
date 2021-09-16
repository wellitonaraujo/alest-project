
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './components/Product';

import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            
            <Switch>
              <Route exact path="/" component={Product} />
              <Route path="/add" component={AddProduct} />
              <Route path="/edit/:id" component={EditProduct} />
            </Switch>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
