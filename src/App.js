import Square from './components/Square';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="App-header">
        <table>
          <caption>Tic tac toe</caption>  
            <tr> 
                <td><Square value=""/></td>
                <td><Square value=""/></td>
                <td><Square value=""/></td>
            </tr>
            <tr>       
              <td><Square value=""/></td>
              <td><Square value=""/></td>
              <td><Square value=""/></td>
            </tr>
            <tr>
              <td><Square value=""/></td>
              <td><Square value=""/></td>
              <td><Square value=""/></td>
            </tr>
        </table>
      </div>
    </>
  );
}

export default App;
