import "./App.css"

function Home () {
  return (
    <div>

      <nav>
        <h1>hello</h1>
        <ul className="nav-bar">
          <li>Home</li>
          <li>Nowhere</li>
        </ul>
      </nav>

    </div>
  )
}

function App() {
  return (
    <Home />
  );
}

export default App;
