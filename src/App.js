import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://create-react-app.dev/docs/deployment/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to deploy React
        </a>
        <p>This page was deployed using Github and gh-pages</p>
      </header>
      <div>
        <p>If you want to update your deployed page, there is 2 easy steps:</p>
        <ol>
          <li>
            <p>Commit your changes to your git</p>
          </li>
          <li>
            <p>
              Run the deploy commend once more <code>npm run deploy</code>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
