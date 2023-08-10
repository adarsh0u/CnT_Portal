import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useColorMode,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";


const Links = ["Dashboard", "About Us", "News"];
const targets = ["/dashboard", "/about", "#"];


export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"}>
            <Box>CnT PORTAL</Box>

           
          </HStack>

          <Flex alignItems={"center"}>

          <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              justifyContent="flex-end"
              margin={{ base: "0", md: "auto" }}
            >
              {Links.map((link,index) => (
                <Link key={link} 
                href={targets[index]}
                padding= "10px"
                _hover={{ 
                  textDecoration: "none",
                  bg:"gray.400",
                  
                  rounded: "md"
                 }}
                >{link}</Link>
              ))}
            </HStack>

            <Button
              variant={"solid"}
              color={"green.500"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              <Link href="/login" textDecoration="none">
                Sign In
              </Link>
            </Button>

            <IconButton
              ml={8}
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound="true"
              onClick={toggleColorMode}
            />
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} />
              </MenuButton>
              <MenuList>
                <MenuItem>Track Record</MenuItem>

                <Link href="/editprofile" textDecoration="none">
                <MenuItem href="/editprofile">Edit Profile</MenuItem>
                </Link>

                <MenuItem>Settings</MenuItem>

                <MenuDivider />

                <MenuItem>
                  <Link href="/">Logout</Link>
                </MenuItem>

              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>

          <Stack as={"nav"} spacing={4}>
            {Links.map((link, index) => (
              <Link key={link} href={targets[index]}  px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none" }}> {link} </Link> 
            ))}
            </Stack>

          </Box>
        ) : null}
      </Box>
    </>
  );
}
