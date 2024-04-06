
import './App.css';
import Reviews from './components/reviews/Reviews';

import Footer from './components/footer/Footer';
import HeroSection from './components/herosection/HeroSection';
import LastSection from './components/lastsection/LastSection';
import CustomNavbar from './components/navbar/CustomNavbar';
import MiddleBlog from './components/pages/blog/MiddleBlog';
import Bussiness from './components/pages/bussiness/Bussiness';
import Culture from './components/pages/culture/Culture';
import Politics from './components/pages/politics/Politics';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
     <CustomNavbar/> 
     <HeroSection/>
     <Bussiness/>
     <MiddleBlog/>
     <Culture/>
     <Politics/>
     <LastSection/>
     {/* popular blogs */}
     <Profile/>
     <Reviews/>
     <Footer/>
    
    </div>
  );
}

export default App;
