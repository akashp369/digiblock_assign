import logo from './logo.svg';
import './App.css';
import NavbarComp from './component/NavbarComp';
import FooterComp from './component/FooterComp';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Home />
      <FooterComp />
    </div>
  );
}

export default App;
