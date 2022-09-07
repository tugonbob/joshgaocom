import { Navbar } from "./components/customComponents/navbar/navbar";
import { HomePage } from "./pages";
// import { Tofu60Page } from "./components/projectComponents/Tofu60";
import { Route, Routes } from "react-router-dom";
import "./assets/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/software" element={<SoftwarePage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/other" element={<OtherPage />} />

        <Route path="/other/tofu60" element={<Tofu60Page />} /> */}
      </Routes>
    </>
  );
}

export default App;