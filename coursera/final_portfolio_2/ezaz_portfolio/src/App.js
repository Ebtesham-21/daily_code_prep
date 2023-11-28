import { IconButton } from "@chakra-ui/button";
import { Flex, Heading ,VStack } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useCallback } from "react";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedIn} from "react-icons/fa";


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color='cyan.400'> 
          ebtesham portfolio

        </Heading>

      </Flex>
      <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/> } onClick={toggleColorMode}  isRound="true"></IconButton>
    </VStack>
  );
}

export default App;
