import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import logo from "../assets/logo.png";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box maxW={"1512px"} m={"0 auto"}>
      <Flex
        bg={useColorModeValue("transparent", "transparent")}
        color={useColorModeValue("white", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          align={"center"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            color={"white"}
          />

          <Flex align={"center"}>
            <Image
              boxSize="60.31px"
              objectFit="cover"
              src={logo}
              alt="Saviour"
              objectPosition={"50% 0"}
            />
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={useColorModeValue("white", "white")}
              fontFamily={"ZCOOL KuaiLe"}
              fontSize={"18.21px"}
              fontWeight={"400"}
              lineHeight={"18.21px"}
            >
              Saviour
            </Text>
          </Flex>
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center" }}
          display={{ base: "none", md: "flex" }}
          alignItems={"center"}
        >
          <Image
            boxSize="106px"
            objectFit="cover"
            src={logo}
            alt="Saviour"
            objectPosition={"50% 0"}
          />
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            color={useColorModeValue("white", "white")}
            fontFamily={"ZCOOL KuaiLe"}
            fontSize={"32px"}
            fontWeight={"400"}
            lineHeight={"32px"}
          >
            Saviour
          </Text>

          <Flex display={{ base: "none", md: "flex" }} mx={"auto"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            width={"127px"}
            height={"38px"}
            fontSize={"12px"}
            py={"10px"}
            px={"16px"}
            fontWeight={600}
            borderRadius={"15.44px"}
            color={"white"}
            bg={"linear-gradient(93.73deg, #ED0137 20.19%, #F05733 88.3%)"}
            href={"#"}
            _hover={{
              bg: "linear-gradient(93.73deg, #F05733 20.19%, #ED0137 88.3%)",
            }}
          >
            Connect Wallet
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("gray.400", "gray.400");
  const popoverContentBgColor = useColorModeValue("#191818", "#191818");

  return (
    <Stack
      direction={"row"}
      spacing={4}
      borderRadius={"20px"}
      p={"16px 24px"}
      bg={useColorModeValue("#191818", "gray.800")}
    >
      {NAV_ITEMS.map((navItem) => (
        <Flex
          direction={"column"}
          key={navItem.label}
          alignItems={"center"}
          justify={"center"}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontFamily={" ZCOOL KuaiLe"}
                lineHeight={"20px"}
                textAlign={"center"}
                fontSize={"20px"}
                fontWeight={400}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Flex>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.900", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#ED0137" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#ED0137"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("#191818", "#191818")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("white", "white")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            color="white"
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={4} borderLeft={1} align={"start"}>
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                color={"gray.200"}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "IDO",
    href: "#",
  },
  {
    label: "Tokenomics",
    href: "#",
  },
  {
    label: "Roadmap",
    href: "#",
  },
  {
    label: `Coming Soon `,
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.28113 5.32526C2.46866 5.13779 2.72296 5.03247 2.98813 5.03247C3.25329 5.03247 3.5076 5.13779 3.69513 5.32526L8.64513 10.2753L13.5951 5.32526C13.7837 5.1431 14.0363 5.0423 14.2985 5.04458C14.5607 5.04686 14.8115 5.15203 14.9969 5.33744C15.1824 5.52285 15.2875 5.77366 15.2898 6.03586C15.2921 6.29805 15.1913 6.55065 15.0091 6.73926L9.35213 12.3963C9.1646 12.5837 8.91029 12.689 8.64513 12.689C8.37996 12.689 8.12566 12.5837 7.93813 12.3963L2.28113 6.73926C2.09366 6.55173 1.98834 6.29742 1.98834 6.03226C1.98834 5.76709 2.09366 5.51278 2.28113 5.32526Z"
          fill="white"
        />
      </svg>
    ),
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
];

export { Navbar };
