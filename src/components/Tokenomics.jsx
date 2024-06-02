import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import tokenomicsBg from "../assets/tokenomicsBg.png";
import tokenomicsImg from "../assets/tokenomicsImg.png";

const Tokenomics = () => {
  const data = [
    {
      name: "Name",
      value: "Saviour",
    },
    {
      name: "Symbol",
      value: "SVR",
    },
    {
      name: "Total Supply",
      value: "1000 Trillion",
    },

    {
      name: "Decimals",
      value: "18",
    },
  ];

  return (
    <Box w="100%" height={"706px"} position={"relative"}>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        bgImage={tokenomicsBg}
        zIndex="0"
        m={"0 auto"}
        height={"706px"}
        backgroundPosition={{ base: "50% 35%", md: "0 35%" }}
        backgroundSize={"cover"}
        boxSizing="border-box"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          height={"706px"}
          bg="rgba(0, 0, 0, 0.75)" // This creates a dark overlay
          zIndex="1"
        />
        <Box position="relative" zIndex="2" pt={20}>
          <Text
            fontFamily={"Shojumaru"}
            fontSize={{ base: "32px", md: "44px" }}
            fontWeight={"400"}
            lineHeight={{ base: "38.08px", md: "52.36px" }}
            textAlign={"center"}
            color={"#ED0137"}
          >
            Tokenomics
          </Text>

          <Flex
            m={{ base: 5, md: 10 }}
            pt={{ base: 5, md: 10 }}
            justify={"center"}
            align={"center"}
            gap={10}
            direction={{ base: "column", md: "row" }}
          >
            <Flex
              width={{ base: "100%", md: "40%" }}
              direction={"column"}
              align={"center"}
            >
              <Box
                width={{ base: " 206.73px", md: "244px" }}
                height={{ base: "59.31px", md: "70px" }}
                fontFamily={"Shojumaru"}
                fontSize={"18px"}
                fontWeight={400}
                lineHeight={"23.84px"}
                color={"white"}
                bg={"#ED0137"}
                borderRadius={{ base: "16px", md: "20px" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                zIndex={1}
              >
                Token Details
              </Box>

              <Box
                mt={{ base: "-30px", md: "-35px" }}
                width={{ base: "349px", md: "412px" }}
                height={{ base: "249px", md: "306px" }}
                borderRadius={"20px"}
                border={"1.5px solid red"}
              >
                <Grid
                  h="200px"
                  templateRows="repeat(4 1fr)"
                  gap={{ base: 1, md: 2 }}
                  color={"white"}
                  mt={{ base: 10, md: 16 }}
                  fontFamily={"ZCOOL KuaiLe"}
                >
                  {data.map((item) => {
                    return (
                      <GridItem
                        key={item.name}
                        px={14}
                        fontSize={{ base: "16px", md: "20px" }}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        textAlign={"left"}
                      >
                        <Flex justify={"space-between"} textAlign={"left"}>
                          <Text textAlign={"left"}>{item.name}</Text>
                          <Text textAlign={"left"} color={"#DF180A"}>
                            {item.value}
                          </Text>
                        </Flex>
                      </GridItem>
                    );
                  })}
                </Grid>
              </Box>
            </Flex>
            <Box
              width={{ base: "100%", md: "60%" }}
              boxSizing="border-box"
              overflow={"hidden"}
            >
              <Image src={tokenomicsImg} w={"100%"} objectFit="cover" />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export { Tokenomics };
