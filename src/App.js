import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar'
import SocialMedia from './components/SocialMedia/SocialMedia'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <SocialMedia></SocialMedia>
      <header className="App-header">
        {/* <h1>Hi there! I am bulding this page, <bn/> it will be ready soon! </h1> */}
        
        <Home></Home>

      </header>
      
    </div>
  );
}

export default App;
