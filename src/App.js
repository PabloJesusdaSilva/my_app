import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';

import CustomersList from './pages/customers/List';
import CustomersRegister from './pages/customers/Register';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <TemplateDefault>
        <Routes>
          <Route path="/customers/add" element={<TemplatePage title="Cadastro de clientes" Component={CustomersRegister} />}/>
        </Routes>
        <Routes>
          <Route path="/customers" element={<TemplatePage title="Lista de clientes" Component={CustomersList} />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<TemplatePage title="Home" Component={Home} />} />
        </Routes>
      </TemplateDefault>
    </Router>
  );
}

export default App;
