import { Navbar } from "./Navbar";
import { Box, Text } from "@chakra-ui/react";

import hero from "../assets/hero.png";

const HeroBanner = () => {
  return (
    <Box
      m={"0 auto"}
      height={{ base: "fit-content", md: "588px" }}
      width={"100%"}
      backgroundImage={hero}
      backgroundPosition={{ base: "50% 35%", md: "0 35%" }}
      backgroundSize={"cover"}
      boxSizing="border-box"
    >
      <Navbar />

      <Box p={{ base: "100px 10px", md: "150px 0px" }}>
        <Text
          bg={{ base: "rgba(0, 0, 0, 0.5)", md: "none" }}
          borderRadius={"20px"}
          p={{ base: "29px", md: "0px" }}
          mx={"auto"}
          maxW={"1268px"}
          width={"100%"}
          fontFamily={"Shojumaru"}
          fontSize={{ base: "32px", md: "45px" }}
          fontWeight={"400"}
          lineHeight={{ base: "38.08px", md: "53.55px" }}
          color={"#f8f8f8"}
          textAlign={"center"}
        >
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </Text>
      </Box>
    </Box>
  );
};

export { HeroBanner };
