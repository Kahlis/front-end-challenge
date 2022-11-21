import './App.css';
import { Vertical } from './Components/InputField/style';
import Home from './Pages/Home';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Vertical>
      <GlobalStyle />
      <Home />
    </Vertical>
  );
}

export default App;
