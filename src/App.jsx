import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Seo from "./pages/Seo";
import Chatbot from "./pages/Chatbot";
import Ecommerce from "./pages/Ecommerce";
import Marketing from "./pages/Marketing";
import Mobile from "./pages/Mobile";
import Website from "./pages/Website";
import LoginSignup from './pages/LoginSignup';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route path = "/" element={<Home />} />  
          <Route path="/seo" element={<Seo />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/mobile" element={<Mobile />} /> 
          <Route path="/website" element={<Website />} /> 
          {/* <Route path="/login" element={<LoginSignup />} />  */}
          <Route path="/services" element={<Services />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
        </Routes>
    </div>
  )
}

export default App


