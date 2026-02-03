import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
          <Navbar/>
          <Home/>
          <Footer/>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;