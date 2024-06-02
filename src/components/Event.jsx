import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";

import eventBg from "../assets/eventBg.png";

import { IoIosCopy } from "react-icons/io";
import { useEffect, useState } from "react";

const Event = () => {
  const data = [
    {
      name: "Total Token Supply",
      value: "20%",
    },
    {
      name: "Soft Cap",
      value: "200 BNB",
    },
    {
      name: "Initial exchange rate",
      value: "1 BNB",
    },
  ];

  const data1 = [
    {
      name: "1st Generation",
      value: "5%",
    },
    {
      name: "2nd Generation",
      value: "2%",
    },
  ];

  const [seconds, setSeconds] = useState(25 * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) clearInterval(timer);

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours < 10 ? "0" + hours : hours}${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  return (
    <Box
      bgImage={eventBg}
      width={"100%"}
      height={{ base: "fit-content", md: "1145px" }}
      bgPos={{ base: "50% 35%", md: "0 95%" }}
      bgSize={"cover"}
    >
      <Box bgColor={"#000000B3"} width={"100%"} height={"100%"}>
        <Box maxW={"1512px"} mx={"auto"} pt={12}>
          <Text
            fontFamily={"Shojumaru"}
            fontSize={{ base: "28px", md: "40.92px" }}
            fontWeight={"400"}
            lineHeight={{ base: "37px", md: "54.19px" }}
            textAlign={"center"}
            color={"#ED0137"}
          >
            Participate in our IDO Event!
          </Text>

          <Flex mt={16} direction={{ base: "column", md: "row" }}>
            <Flex
              width={{ base: "100%", md: "45%" }}
              gap={10}
              direction={"column"}
              justify={"center"}
              align={"center"}
            >
              <Text
                fontFamily={"ZCOOL KuaiLe"}
                fontSize={{ bas: "16.92px", md: "20.92px" }}
                fontWeight={"400"}
                lineHeight={{ bas: "29.53px", md: "36.51px" }}
                textAlign={"center"}
                maxW={"539px"}
                width={"100%"}
                color={"#E6E3E3"}
                display={{ base: "none", md: "block" }}
              >
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to share
                wealth and achieve success.
              </Text>

              <Text
                fontFamily={"ZCOOL KuaiLe"}
                fontSize={{ bas: "16.92px", md: "20.92px" }}
                fontWeight={"400"}
                lineHeight={{ bas: "29.53px", md: "36.51px" }}
                textAlign={"center"}
                maxW={"539px"}
                width={"100%"}
                color={"#E6E3E3"}
                display={{ base: "block", md: "none" }}
              >
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to share
                wealth and achieve success. By participating in this exclusive
                event, you'll secure your position at the forefront of
                blockchain innovation, with the potential for high rewards.
              </Text>

              <Flex direction={"column"} justify={"center"} align={"center"}>
                <Box
                  width={{ base: " 206.73px", md: "244px" }}
                  height={{ base: "59.31px", md: "70px" }}
                  fontFamily={"Shojumaru"}
                  fontSize={{ flex: "16px", md: "18px" }}
                  fontWeight={400}
                  lineHeight={{ base: "21px", md: "23.84px" }}
                  color={"white"}
                  bg={"#ED0137"}
                  borderRadius={{ base: "16px", md: "20px" }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  zIndex={1}
                >
                  Token Info
                </Box>

                <Box
                  mt={{ base: "-30px", md: "-35px" }}
                  width={{ base: "265.11px", md: "412px" }}
                  // height={{ base: "249px", md: "382px" }}
                  borderRadius={"20px"}
                  border={"1.5px solid red"}
                  pb={12}
                >
                  <Grid
                    color={"white"}
                    mt={{ base: 10, md: 16 }}
                    fontFamily={"ZCOOL KuaiLe"}
                    gap={8}
                  >
                    {data.map((item) => {
                      return (
                        <GridItem
                          key={item.name}
                          px={10}
                          fontSize={{ base: "12.87px", md: "20px" }}
                          fontWeight={"400"}
                          lineHeight={{ base: "12.87px", md: "20px" }}
                          textAlign={"left"}
                        >
                          <Flex justify={"space-between"} textAlign={"left"}>
                            <Text textAlign={"left"} maxW={"155px"}>
                              {item.name}
                            </Text>
                            <Text textAlign={"left"} color={"#DF180A"}>
                              {item.value}
                            </Text>
                          </Flex>
                        </GridItem>
                      );
                    })}
                  </Grid>

                  <Text
                    fontFamily={"ZCOOL KuaiLe"}
                    color={"#E6E3E3"}
                    fontSize={{ base: "16px", md: "20px" }}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                    textAlign={"center"}
                    mt={8}
                  >
                    Recommended Referral Commission
                  </Text>

                  <Grid
                    color={"white"}
                    mt={{ base: 10, md: 10 }}
                    fontFamily={"ZCOOL KuaiLe"}
                    gap={8}
                  >
                    {data1.map((item) => {
                      return (
                        <GridItem
                          key={item.name}
                          px={10}
                          fontSize={{ base: "16px", md: "20px" }}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          textAlign={"left"}
                        >
                          <Flex justify={"space-between"} textAlign={"left"}>
                            <Text textAlign={"left"} maxW={"155px"}>
                              {item.name}
                            </Text>
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
              <Button
                w={"138.49px"}
                h={"39.2px"}
                p={"12.6px 15.75px"}
                borderRadius={"16.21px"}
                fontFamily={"ZCOOL KuaiLe"}
                fontSize={"14.08px"}
                fontWeight={"400"}
                lineHeight={"14.08px"}
                textAlign={"center"}
                background={
                  "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
                }
                color={"#ffffff"}
                _hover={{
                  bg: "linear-gradient(93.73deg, #EE6910 10.19%, #D51B46 98.19%)",
                }}
              >
                Connect Wallet
              </Button>

              <Text
                color={"#ED0137"}
                fontFamily={"Shojumaru"}
                fontSize={{ base: "24px", md: "28px" }}
                fontWeight={"400"}
                lineHeight={{ base: "31px", md: "37.08px" }}
                textAlign={"center"}
              >
                Become an affiliate & Earn 7% as Commission!
              </Text>

              <Flex justify={"center"} align={"center"} gap={2}>
                <Box
                  width={{ base: "300px", md: "467px" }}
                  height={"48px"}
                  borderRadius={"20px"}
                  border={"1px solid #C4110C"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={1}
                >
                  <Input
                    placeholder="Generate a unique referral link"
                    border={"none"}
                    color={"#ffffff"}
                    fontSize={"16px"}
                    fontFamily={"ZCOOL KuaiLe"}
                    outline={"none"}
                    _focus={{
                      border: "none",
                      outline: "none",
                    }}
                  />

                  <Button
                    bg="linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
                    color={"#ffffff"}
                    borderRadius={"16px"}
                    _hover={{
                      cursor: "pointer",
                      bg: "linear-gradient(93.73deg, #EE6910 10.19%, #D51B46 98.19%)",
                    }}
                  >
                    Generate
                  </Button>
                </Box>
                <IoIosCopy color="#ED0137" fontSize={"25px"} />
              </Flex>
            </Flex>

            <Box width={{ base: "100%", md: "55%" }} mt={{ base: 20, md: 0 }}>
              <Flex direction={"column"} justify={"center"} align={"center"}>
                <Box
                  width={{ base: " 139px", md: "262px" }}
                  height={{ base: "42.9px", md: "80.86px" }}
                  fontFamily={"Roboto Mono"}
                  fontSize={{ base: "34.32px", md: "64.69px" }}
                  fontWeight={700}
                  lineHeight={"23.84px"}
                  color={"white"}
                  // bg={"#ED0137"}
                  borderRadius={{ base: "16px", md: "20px" }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  zIndex={1}
                >
                  <Flex gap={1} justify={"center"} align={"center"}>
                    <Text
                      width={{ base: "27.46px", md: "51.75px" }}
                      height={{ base: "42.48px", md: "80.06px" }}
                      padding={"16.17px 6.47px 15.37px 6.47px"}
                      borderRadius={"3.23px"}
                      border={"0.86px solid #ED0137"}
                      bg={"#000000"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      {parseInt(formatTime(seconds) / 1000)}
                    </Text>
                    <Text
                      width={{ base: "27.46px", md: "51.75px" }}
                      height={{ base: "42.48px", md: "80.06px" }}
                      padding={"16.17px 6.47px 15.37px 6.47px"}
                      borderRadius={"3.23px"}
                      border={"0.86px solid #ED0137"}
                      bg={"#000000"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      {parseInt((formatTime(seconds) / 100) % 10)}
                    </Text>
                    <Text> : </Text>
                    <Text
                      width={{ base: "27.46px", md: "51.75px" }}
                      height={{ base: "42.48px", md: "80.06px" }}
                      padding={"16.17px 6.47px 15.37px 6.47px"}
                      borderRadius={"3.23px"}
                      border={"0.86px solid #ED0137"}
                      bg={"#000000"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      {parseInt((formatTime(seconds) / 10) % 10)}
                    </Text>

                    <Text
                      width={{ base: "27.46px", md: "51.75px" }}
                      height={{ base: "42.48px", md: "80.06px" }}
                      padding={"16.17px 6.47px 15.37px 6.47px"}
                      borderRadius={"3.23px"}
                      border={"0.86px solid #ED0137"}
                      bg={"#000000"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      {parseInt(formatTime(seconds) % 10)}
                    </Text>
                  </Flex>
                </Box>

                <Box
                  mt={{ base: "-20px", md: "-35px" }}
                  maxW={{ base: "353px", md: "708px" }}
                  width={"100%"}
                  // height={{ base: "249px", md: "382px" }}
                  borderRadius={"20px"}
                  border={"1.5px solid red"}
                  pb={12}
                >
                  <Flex
                    direction={"column"}
                    mt={{ base: 10, md: 16 }}
                    gap={{ base: 7, md: 10 }}
                  >
                    <Text
                      color={" #ED0137"}
                      fontFamily={"Shojumaru"}
                      fontSize={{ base: "23.91px", md: "48px" }}
                      fontWeight={"400"}
                      lineHeight={{ base: "31.67px", md: "63.56px" }}
                      textAlign={"center"}
                    >
                      PRESALE 1
                    </Text>

                    <Text
                      color={"#F5F1F1"}
                      fontFamily={"ZCOOL KuaiLe"}
                      fontSize={{ base: "15.94px", md: "32px" }}
                      fontWeight={"400"}
                      lineHeight={"32px"}
                      textAlign={"center"}
                    >
                      1 Saviour = 0.657 USDT
                    </Text>

                    <Text
                      color={"#F5F1F1"}
                      fontFamily={"ZCOOL KuaiLe"}
                      fontSize={{ base: "12.96px", md: "24px" }}
                      lineHeight={{ base: "12.96px", md: "24px" }}
                      fontWeight={"400"}
                      textAlign={"center"}
                    >
                      Next Stage Price = 0.723 USDT
                    </Text>
                    <Text
                      color={"#F5F1F1"}
                      fontFamily={"ZCOOL KuaiLe"}
                      fontSize={{ base: "12.96px", md: "24px" }}
                      lineHeight={{ base: "12.96px", md: "24px" }}
                      fontWeight={"400"}
                      textAlign={"center"}
                    >
                      Sold - $34,56,56,764/$50,00,00,000
                    </Text>
                    <Text
                      color={"#F5F1F1"}
                      fontFamily={"ZCOOL KuaiLe"}
                      fontSize={{ base: "12.96px", md: "24px" }}
                      lineHeight={{ base: "12.96px", md: "24px" }}
                      fontWeight={"400"}
                      textAlign={"center"}
                    >
                      Raised - $34,56,56,764/$40,00,00,000
                    </Text>

                    <Flex gap={5} direction={"column"}>
                      <Input
                        border={"1px solid #C4110C "}
                        width={{ base: "232.65px", md: "467px" }}
                        height={{ base: "23.91px", md: "48px" }}
                        borderRadius={"20px"}
                        mx={"auto"}
                        placeholder="Enter the amount (BNB)"
                        fontFamily={"ZCOOL KuaiLe"}
                        fontSize={{ base: "7.97px", md: "16px" }}
                        lineHeight={{ base: "7.97px", md: "16px" }}
                        fontWeight={"400"}
                        _hover={{
                          borderColor: "#C411aa",
                        }}
                      />
                      <Input
                        border={"1px solid #C4110C "}
                        width={{ base: "232.65px", md: "467px" }}
                        height={{ base: "23.91px", md: "48px" }}
                        borderRadius={"20px"}
                        mx={"auto"}
                        placeholder="Minimum Quantity to Buy"
                        fontFamily={"ZCOOL KuaiLe"}
                        fontSize={{ base: "7.97px", md: "16px" }}
                        lineHeight={{ base: "7.97px", md: "16px" }}
                        fontWeight={"400"}
                        _hover={{
                          borderColor: "#C411aa",
                        }}
                      />

                      <Input
                        border={"1px solid #C4110C "}
                        width={{ base: "232.65px", md: "467px" }}
                        height={{ base: "23.91px", md: "48px" }}
                        borderRadius={"20px"}
                        mx={"auto"}
                        placeholder="Maximum Quantity of Tokens"
                        fontFamily={"ZCOOL KuaiLe"}
                        fontSize={{ base: "7.97px", md: "16px" }}
                        lineHeight={{ base: "7.97px", md: "16px" }}
                        fontWeight={"400"}
                        _hover={{
                          borderColor: "#C411aa",
                        }}
                      />
                    </Flex>

                    <Flex align={"center"} justify={"center"} gap={10}>
                      <Button
                        bg={
                          "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
                        }
                        height={"45px"}
                        p={"14px 21.29px"}
                        borderRadius={"21.92px"}
                        color={"#ffffff"}
                        fontFamily={" ZCOOL KuaiLe"}
                        fontSize={{ base: "10px", md: "17.03px" }}
                        lineHeight="17.03px"
                        fontWeight={"400"}
                        _hover={{
                          bg: "linear-gradient(93.73deg, #EE6910 10.19%, #D51B46 98.19%)",
                        }}
                      >
                        Buy
                      </Button>

                      <Button
                        bg={
                          "linear-gradient(93.73deg, #D51B46 10.19%, #EE6910 98.19%)"
                        }
                        height={"45px"}
                        p={"14px 21.29px"}
                        borderRadius={"21.92px"}
                        color={"#ffffff"}
                        fontFamily={" ZCOOL KuaiLe"}
                        fontSize={{ base: "10px", md: "17.03px" }}
                        lineHeight="17.03px"
                        fontWeight={"400"}
                        _hover={{
                          bg: "linear-gradient(93.73deg, #EE6910 10.19%, #D51B46 98.19%)",
                        }}
                      >
                        Claim Drop
                      </Button>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export { Event };
