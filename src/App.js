import logo from './logo.svg';
import './App.css';
import Profile from '../src/profil/Profile';
import image1 from '../src/profil/Ronaldo 1.jpg';



function App() {
const style7= {border: "6px solid green", padding: "8px", width: "320px", height: "260px", marginBottom: "30px"}
  

  
  return ( <div className="App">
    <Profile><img src={image1} style= {style7}/></Profile> 
    </div>
  
  );
}

export default App;
