import './App.css';

import Header from '../src/components/Header/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div className="app">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
