import logo from './logo.svg';
import './App.css';
import Quotes from "./quotes.json"
import File from "./Quote"
import Header from './Header';
function App() {
  return (
    <div className="App">
     <Header/>
     <div className='Container'>
    {
   
      Quotes.map((Information  , index ) =>(
        <File key={index} detail={Information.detail} name = {Information.name}/>
      ))
      
    }
    </div>
    </div>
  );
}

export default App;
