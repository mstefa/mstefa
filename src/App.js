// import './App.css';
import { GlobalStyles } from "./GlobalStyles";
import About from './components/About/About';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar'
import SocialMedia from './components/SocialMedia/SocialMedia'


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar></NavBar>
      <SocialMedia></SocialMedia>
      <Home></Home>
      <About></About>
      
      <header className="App-header">
        {/* <h1>Hi there! I am bulding this page, <bn/> it will be ready soon! </h1> */}
      </header>
      
    </div>
  );
}

export default App;
