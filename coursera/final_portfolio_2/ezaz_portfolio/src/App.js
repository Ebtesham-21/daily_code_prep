import { IconButton } from "@chakra-ui/button";
import { Spacer, Flex, Heading ,VStack } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useCallback } from "react";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color='cyan.400'> 
          Ebtesham Portfolio

        </Heading>

     
      <Spacer ></Spacer>
      <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml={2} icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml={2} icon={isDark ? <FaSun/> : <FaMoon/> } onClick={toggleColorMode}  isRound="true"></IconButton>
    </Flex>
    <Header></Header>
    <Social></Social>
    <Profile></Profile>

  </VStack>
  );
};

export default App;
