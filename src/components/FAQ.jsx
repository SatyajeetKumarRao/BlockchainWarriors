import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import FaqImg from "../assets/faq.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const FAQ = () => {
  return (
    <>
      {/* LargeScreen View */}
      <Box
        // height="889px"
        w="100%"
        bg="#0a0a0a"
        display={{ base: "none", md: "block" }}
        py={10}
      >
        <Flex
          boxSizing="border-box"
          // pt={"64px"}
          pl={"87px"}
          pr={"100px"}
          justify={"space-between"}
          w="100%"
          alignItems={"start"}
        >
          <Image src={FaqImg} objectFit={"contain"} w={"503px"} mt={"45px"} />
          <Box width={"640px"}>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}
              h="100%"
              rowGap={"64px"}
            >
              <Text
                fontSize={"44px"}
                fontWeight={400}
                fontFamily={"Shojumaru"}
                color={"#ED0137"}
              >
                FAQ
              </Text>
              <Accordion w={"100%"} border={"none"}>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"20px"}
                  mt={"16px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"77px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="20px"
                    fontWeight="400"
                    line-height="26.48px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>1</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>WHY CHOOSE "SAVIOR"?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"34px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"20px"}
                  mt={"16px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"77px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="20px"
                    fontWeight="400"
                    line-height="26.48px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>2</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>Why is the IDO duration so long?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"34px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"20px"}
                  mt={"16px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"77px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="20px"
                    fontWeight="400"
                    line-height="26.48px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>3</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>When will trading go live?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"34px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"20px"}
                  mt={"16px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"77px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="20px"
                    fontWeight="400"
                    line-height="26.48px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>4</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>When can we claim the tokens?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"34px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Mobile View */}
      <Box
        height="944px"
        w="100%"
        bg="#0a0a0a"
        display={{ base: "block", md: "none" }}
      >
        <Flex
          boxSizing="border-box"
          p={"56px 16px 56px 16px"}
          flexDirection={"column"}
          alignItems={"center"}
          justify={"space-between"}
          w="100%"
        >
          <Text
            fontSize={"32px"}
            fontWeight={400}
            fontFamily={"Shojumaru"}
            color={"#ED0137"}
          >
            FAQ
          </Text>
          <Image src={FaqImg} w={"395px"} />
          <Box width={"356px"}>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}
              h="100%"
            >
              <Accordion w={"100%"} border={"none"}>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"11px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AccordionButton
                    h={"43px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="11px"
                    fontWeight="400"
                    line-height="14.73px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>1</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>WHY CHOOSE "SAVIOR"?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"18px 10px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"11px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={"16px"}
                >
                  <AccordionButton
                    h={"43px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="11px"
                    fontWeight="400"
                    line-height="14.73px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>2</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>Why is the IDO duration so long?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"18px 10px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"11px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={"16px"}
                >
                  <AccordionButton
                    h={"43px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="11px"
                    fontWeight="400"
                    line-height="14.73px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>3</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>When will trading go live?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"18px 10px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px solid #ED0137"}
                  borderRadius={"11px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={"16px"}
                >
                  <AccordionButton
                    h={"43px"}
                    border={"none"}
                    w={"100%"}
                    fontFamily="Shojumaru"
                    fontSize="11px"
                    fontWeight="400"
                    line-height="14.73px"
                    color="white"
                  >
                    <Flex justify={"space-between"} w={"100%"}>
                      <Text w={"10%"}>4</Text>
                      <Flex w={"90%"} justify={"space-between"}>
                        <Text>When can we claim the tokens?</Text>
                        <AccordionIcon />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel p={"18px 10px"}>
                    <Text
                      borderRadius={"20px"}
                      bg="#181818"
                      p={4}
                      fontFamily="ZCOOL KuaiLe"
                      fontSize="15px"
                      fontWeight="400"
                      line-height="25.56px"
                      color="#FBF9F9"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export { FAQ };
