import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import introImg from "../assets/introImg.png";
const Introduction = () => {
  return (
    <Box bgColor={"#0a0a0a"} width={"100%"}>
      {/*  large screen view */}
      <Flex
        maxW={"1512px"}
        width={"100%"}
        height={"fit-content"}
        align={"center"}
        justify={"center"}
        mx={"auto"}
        display={{ base: "none", md: "flex" }}
      >
        <Flex
          width={"50%"}
          gap={6}
          direction={"column"}
          justify={"center"}
          p={5}
        >
          <Text
            fontFamily={"Shojumaru"}
            fontSize={"44px"}
            fontWeight={"400"}
            lineHeight={"52.36px"}
            textAlign={"left"}
            color={"#ED0137"}
          >
            Introduction
          </Text>

          <Text
            fontFamily={"ZCOOL KuaiLe"}
            fontSize={"24px"}
            fontWeight={"400"}
            lineHeight={"28.56px"}
            textAlign={"left"}
            color={"white"}
          >
            We've all been in the mud once, and now we've decided to fight it
            out. <br />
            Pay tribute to those pioneers of WEB3 and the warriors who dedicated
            their love to the blockchain. Save the lucky ones alive, join us to
            save the future!
            <br />
            Our mission is to empower everyone to share wealth and succeed. read
            more...
            <br />
            <span style={{ color: "#9b9999" }}>read more...</span>
          </Text>

          <Button
            width={"178.94px"}
            height={"54.06px"}
            p={"17.03px 21.29px"}
            borderRadius={"21.92px"}
            background={
              "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
            }
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"20px"}
            fontFamily={" ZCOOL KuaiLe"}
            textAlign={"left"}
            _hover={{
              bg: "linear-gradient(93.73deg, #F05733 20.19%, #ED0137 88.3%)",
            }}
          >
            Documents &nbsp;
            <ChevronDownIcon fontSize={"22px"} />
          </Button>
        </Flex>

        <Box p={5} boxSizing="border-box">
          <Image src={introImg} w={"100%"} objectFit="cover" />
        </Box>
      </Flex>

      {/*  mobile screen view */}
      <Flex
        width={"100%"}
        height={"fit-content"}
        align={"center"}
        justify={"center"}
        mx={"auto"}
        display={{ base: "flex", md: "none" }}
        px={2}
      >
        <Flex gap={6} direction={"column"} justify={"center"} p={5}>
          <Text
            fontFamily={"Shojumaru"}
            fontSize={"23px"}
            fontWeight={"400"}
            lineHeight={"27.37px"}
            textAlign={"center"}
            color={"#ED0137"}
          >
            Introduction
          </Text>

          <Image src={introImg} w={"100%"} objectFit="cover" />

          <Text
            fontFamily={"ZCOOL KuaiLe"}
            fontSize={"23px"}
            fontWeight={"400"}
            lineHeight={"27.37px"}
            textAlign={"center"}
            color={"white"}
          >
            We've all been in the mud once, and now we've decided to fight it
            out. <br />
            Pay tribute to those pioneers of WEB3 and the warriors who dedicated
            their love to the blockchain. Save the lucky ones alive, join us to
            save the future!
            <br />
            Our mission is to empower everyone to share wealth and succeed. read
            more...
            <br />
            <span style={{ color: "#9b9999" }}>read more...</span>
          </Text>

          <Button
            width={"178.94px"}
            height={"54.06px"}
            p={"17.03px 21.29px"}
            borderRadius={"21.92px"}
            background={
              "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
            }
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"white"}
            fontSize={"13.92px"}
            fontFamily={" ZCOOL KuaiLe"}
            textAlign={"center"}
            _hover={{
              bg: "linear-gradient(93.73deg, #F05733 20.19%, #ED0137 88.3%)",
            }}
            mx={"auto"}
          >
            Documents &nbsp;
            <ChevronDownIcon fontSize={"18px"} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export { Introduction };
