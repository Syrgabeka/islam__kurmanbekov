import "./styleApp.css";
import AboutMe from "./component/AboutMe";
import Header from "./component/Header";
import { Servicer } from "./component/Servicer";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <Servicer />
      <Footer />
    </div>
  );
}

export default App;
