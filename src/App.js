import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

import Header from './components/header';
import Product from './components/products/products.jsx';

function App() {
  return (
    <>
      <Header />
      <Product />
    </>
  );
}

export default App;
