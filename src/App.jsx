
// javascript funtion to return react component defining a component called app return what to apear in page
// only one parent element is allowed per component so we wrap the h1 in a div
// id is used to link to this section from the nav bar 
//main is used to apply styling to all of them collectively - telss browser and search engines SEO
//App.css is for component styles while main.css is for global styles
// min -h screen is a tailwind class that makes the div take up the entire height of the screen 
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'  
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Research from './components/Research.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
function App(){
 return (
  <div className="min-h-screen bg-[var(--background)] text-[var(--text)] flex flex-col overflow-x-hidden">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research/>
      <Contact/>
      <Footer/>

</div>
 );
}
export default App;