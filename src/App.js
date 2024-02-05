import './App.css';
import { ThemeProvider } from './ThemeContext';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <ThemeProvider> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/*<Route path="about" element={<About />} />*/ } {/*Did not get to finish this part*/ } 
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
