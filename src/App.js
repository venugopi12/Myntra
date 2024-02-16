import './App.css';
import Category from './components/Category';
import CrazyDeals from './components/CrazyDeals';
import Footer from './components/Footer';
import GenderBanner from './components/GenderBanner';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <GenderBanner />
      <CrazyDeals />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
