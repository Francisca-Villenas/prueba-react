import MiApi from "./components/MiApi";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";


import './index.css'

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="calendar-app">
      <MiApi />
      <Calendar />
      </div>
      <Footer/>
    </div>
  

  );
};

export default App;