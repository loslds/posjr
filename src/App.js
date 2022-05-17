// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <div class="box-button">
          <div>
            <h5>
              "Bem Vindo ao Sistema."
            </h5>
          </div>
          <button id="send" class="send">
            <span>Send</span>
            <svg viewBox="0 0 90.594 59.714">
              <polyline class="check" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-miterlimit="10" points="1.768,23.532 34.415,56.179 88.826,1.768"/>
            </svg>
          </button>
        </div>



        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
