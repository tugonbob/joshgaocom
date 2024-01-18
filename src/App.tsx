import { Route, Routes } from "react-router-dom";
import "./assets/styles.css";
import { Navbar } from "./components/customComponents/navbar/navbar";
import { LinearRegressionPage } from "./components/projectComponents/aiml";
import {
  AskGptPage,
  JoshgaocomPage,
} from "./components/projectComponents/appdev";
import {
  PortfolioTrackerPage,
  RealEstateDealFinderPage,
  RedditLaughsPage,
} from "./components/projectComponents/other";
import { AboutPage, AimlPage, AppdevPage, HomePage, OtherPage } from "./pages";
// @ts-ignore
import { MathJaxContext } from "better-react-mathjax";

function App() {
  return (
    <MathJaxContext>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/aiml" element={<AimlPage />} />
        <Route
          path="/aiml/stanfordCs229/linearRegression"
          element={<LinearRegressionPage />}
        />

        <Route path="/appdev" element={<AppdevPage />} />
        <Route path="/appdev/askGpt" element={<AskGptPage />} />
        <Route path="/appdev/joshgaocom" element={<JoshgaocomPage />} />

        <Route path="/other" element={<OtherPage />} />
        <Route path="/other/redditLaughs" element={<RedditLaughsPage />} />
        <Route
          path="/other/realEstateDealFinder"
          element={<RealEstateDealFinderPage />}
        />
        <Route
          path="/other/portfolioTracker"
          element={<PortfolioTrackerPage />}
        />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </MathJaxContext>
  );
}

export default App;
