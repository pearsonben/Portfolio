import "./App.css";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app">
        
        <main className="container">
          <Header />  
          <Bio />
          <Experience />
        </main>
      </div>
    </>
  );
}

export default App;
