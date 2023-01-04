import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending'
import SuperHero from './components/Superhero';
import "../src/style/landingPage.css"


function App() {
  return (
   <div>
    {/* Intro section */}
    <div className='myBG'>
      <NavigationBar />
      <Intro />
    </div>
    {/* end of intro */}

    {/* Trending section */}
    <div className='trending'>
      <Trending />
    </div>
    {/* end of trending section */}

    {/* SuperHero section */}
    <div className='superhero'>
      <SuperHero />
    </div>
    {/* end of SuperHero section */}

   </div>
  );
}

export default App;
