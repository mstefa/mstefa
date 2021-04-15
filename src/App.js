// import './App.css';
import { GlobalStyles } from "./GlobalStyles";
import About from './components/About/About';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar'
import Projects from './components/projects/Projects'
import SocialMedia from './components/socialmedia/SocialMedia'
import Contact from './components/contact/Contact'


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar></NavBar>
      <SocialMedia></SocialMedia>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      
      <footer>
        Designed & Built by Matías Stefanutti
      </footer>
      
    </div>
  );
}

export default App;
