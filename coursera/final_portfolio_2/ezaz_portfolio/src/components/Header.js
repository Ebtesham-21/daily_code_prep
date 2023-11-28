import React from 'react';
import { useColorMode, useMediaQuery, Button, Image } from '@chakra-ui/react';
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";

function Header() {

const { colorMode } = useColorMode();
const isDark = colorMode == "dark";

const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");


return (
    <Stack>
        <Circle  position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
        <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px"
        p={isNotSmallerScreen ? "32" : "0" }
        > 
            <Box mt={isNotSmallerScreen ? "0":16} align='flex-start'>
                <Text fontSize="5x1" fontWeight="semibold"> Hi , this is </Text>
                <Text fontSize="7x1" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'> Ebtesham </Text>
                <Text color={ isDark ? "gray.200" : "gray.500" }> Programmer specilised in python, js, c++ and have passion for problem solving and cpp.  </Text>

                <Button mt={8} colorScheme="blue" onClick={() => window.open("https://www.facebook.com/rupayon.official")}>
                Hire Me
                 </Button>




            </Box>
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0": "12"} borderRadius='full' backgroundColor="transparent" boxShadow="lg" boxSize="300px" src='https://avatars.githubusercontent.com/u/83841428?v=4'/>

           
          
        
         </Flex>
        
    </Stack>

);
};
export default Header;