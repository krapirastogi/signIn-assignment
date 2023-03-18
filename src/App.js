import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Signin from './components/Signinpage/Signin';
import Otppage from './components/Otp-page/Otppage';
import Success from './components/Success/Success';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/otppage" element={<Otppage />} />
          <Route path="/success" element={<Success/>} />
        </Routes>
      </BrowserRouter>
      
      </div>
  
  );
}

export default App;
