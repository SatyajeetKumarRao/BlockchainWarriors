import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RoadmapBg from "../assets/Roadmap.png";
import RoadmapCard1 from "../assets/RoadmapCard1.png";
import RoadmapCard2 from "../assets/RoadmapCard2.png";
import RoadmapCard3 from "../assets/RoadmapCard3.png";
import RoadmapCard4 from "../assets/RoadmapCard4.png";
const arr = [
  {
    title: "Phase 1",
    deg: "scaleX(-1)",
    top: "50%",
    src: `${RoadmapCard1}`,
    description: "Technical Readiness and Smart Contract Audit",
  },
  {
    title: "Phase 2",
    deg: "scaleX(-1)",
    top: "57%",
    src: `${RoadmapCard2}`,
    description: "Increase Liquidity and Trading Volume",
  },
  {
    title: "Phase 3",
    deg: "scaleX(-1)",
    top: "57%",
    src: `${RoadmapCard3}`,
    description: "Community Building and Marketing",
  },
  {
    title: "Phase 4",
    deg: "scaleX(-1)",
    top: "57%",
    src: `${RoadmapCard4}`,
    description: "Ecosystem Expansion and Partnerships",
  },
];

const RoadMap = () => {
  useEffect(() => {
    Aos.init({ duration: 4500, delay: 600 });
  }, []);

  return (
    <Box
      w="100%"
      h={["80vh", "100vh"]}
      position="relative"
      backgroundImage={RoadmapBg}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <Flex justifyContent={"center"} mb="8%">
        <Text
          color="#ED0137"
          mt="12"
          fontFamily={"Shojumaru"}
          fontSize={["32px", "44px", "44px", "44px"]}
          position="relative"
          zIndex="1"
        >
          Road Map
        </Text>
      </Flex>

      <Grid
        justifyContent="center"
        alignItems="center"
        templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"]}
        pl={[35, 40]}
        pr={[25, 50]}
      >
        {arr.map((item, index) => (
          <Box
            key={index}
            w={["131px", "237px", "237px", "237px"]}
            h={["193px", "349px", "349px", "349px"]}
            display={{
              base: index >= 2 ? "none" : "block",
              md: "block",
            }}
            data-aos="fade-up"
            borderWidth="2px"
            bg="black"
            borderColor="red"
            position="relative"
            borderRadius="10px"
            zIndex="1"
            mx="8px"
            css={{
              transition: "transform 0.3s ease",
              ":hover": {
                transform: "scale(1.05)",
                cursor: "pointer",
              },
            }}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              opacity={"0.6"}
              backgroundImage={`url('${item.src}')`}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              borderRadius="10px"
              filter="blur(0.5px)"
              transform={item.deg}
              css={{
                transition: "transform 0.3s ease",
                ":hover": {
                  transform: "scale(1.05)",
                  cursor: "pointer",
                },
              }}
            />
            <Flex
              flexDirection="column"
              justifyContent="center"
              position="absolute"
              w="100%"
              top={item.top}
              color="white"
              padding={["10px", "20px", "20px", "20px"]}
            >
              <Flex pr="20px" flexDirection="column" rowGap={2}>
                <Text
                  fontSize={["12px", "22px", "22px", "22px"]}
                  fontWeight={500}
                >
                  {item.title}
                </Text>
                <Box
                  fontSize={["9px", "17px", "17px", "17px"]}
                  fontWeight={400}
                  color="#AEB1B8"
                >
                  {item.description}
                </Box>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export { RoadMap };
