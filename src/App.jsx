import { Box } from "@chakra-ui/react";
import "./App.css";
import { Event } from "./components/Event";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { HeroBanner } from "./components/HeroBanner";
import { Introduction } from "./components/Introduction";
import { RoadMap } from "./components/RoadMap";
import { Tokenomics } from "./components/Tokenomics";

function App() {
  return (
    <Box>
      <HeroBanner />
      <Introduction />
      <Event />
      <Tokenomics />
      <RoadMap />
      <FAQ />
      <Footer />
    </Box>
  );
}

export default App;
