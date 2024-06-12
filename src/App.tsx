import Navbar from './components/navbar';
import Main from './components/sections/main';
import 'starry-night-sass/dist/index.css';
import './App.css';
import SectionTitle from './components/section title';
import OurDifference from './components/sections/our difference';
import Statistics from './components/sections/statistics';
import Pricing from './components/sections/pricing';
import Founders from './components/sections/founders';
import Contact from './components/sections/contact';
import Footer from './components/footer';

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <SectionTitle title='Our difference'/>
      <OurDifference />
      <SectionTitle title='Statistic'/>
      <Statistics />
      <SectionTitle title='Pricing'/>
      <Pricing />
      <SectionTitle title='Founders'/>
      <Founders />
      <Contact />
      <Footer />
    </>
  )
}

export default App
