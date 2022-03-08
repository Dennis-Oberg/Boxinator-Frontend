import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

import { AddContainerView } from './Views/AddContainerView';
import { ViewContainers } from './Views/ViewContainers';
import { Navbar } from './Components/Navbar'
import './Style/master.css'
import { BoxProvider } from "./Context/BoxContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BoxProvider>
        <Routes>
          <Route path="/" element={<AddContainerView />} />
          <Route path="/view" element={<ViewContainers />} />
        </Routes>
      </BoxProvider>
      <Footer />
    </div>
  );
}

export default App;
