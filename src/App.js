import './App.css';
import Home from './containers/Home_Page/home_page';
import Header from './components/Header/header_component';
import Hero from './components/Hero/hero_component';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Home/>
    </div>
  );
}
export default App;