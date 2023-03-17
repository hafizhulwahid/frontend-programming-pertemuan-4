import "./App.css";
/**
 * Import Component Hello
 */
import Hello from "./components/Hello";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      {/*
        Memanggil Component Hello.
        Mengirim props name. 
       */}
      {/* <Hello name="Aufa" /> */}
    </div>
  );
}

export default App;
