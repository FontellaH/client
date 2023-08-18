// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./views/Main";
import ViewProduct from "./views/ViewProduct";
import UpdateProduct from "./views/UpdateProduct";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/products" element={<Main />} />
          <Route path="/products/:id" element={<ViewProduct />} />
          <Route path="/products/:id/edit" element={<UpdateProduct />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
