import './App.css';
import Conversor from './components/Conversor'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conversor de Moedas</h1>
        <div className="linha">
          <Conversor  moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor  moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className="linha">
          <Conversor  moedaA="CAD" moedaB="BRL"></Conversor>
          <Conversor  moedaA="BRL" moedaB="CAD"></Conversor>
        </div>
        <div className="linha3">
          <Conversor  moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor  moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
      {/*
        <select>
          <option value={this.moedaA}>USD</option>
          <option value={this.moedaB}>BRL</option>
        </select>
        */}
      </header>
    </div>
  );
}

export default App;
