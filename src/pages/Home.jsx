import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Count from "../components/Count";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";


const Home = () => {
  return (
    <>
        <div>
            <Header /> 
            <Hero />
            <Benefits /> 
            <Count/>           
            <Roadmap />
            <Footer />
        </div>
    <ButtonGradient />
   </>
  )
}

export default Home
