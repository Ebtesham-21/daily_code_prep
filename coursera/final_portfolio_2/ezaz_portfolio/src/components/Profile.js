import React from 'react';
import { useMediaQuery} from '@chakra-ui/media-query';
import { HStack, Icon } from '@chakra-ui/react';
import { Stack, Circle, Flex, Box, Text, Heading} from "@chakra-ui/layout";

function Profile() {
    const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");
    return (
        <Flex direction={isNotSmallerScreen ? "row":"column"} w="100%" maxWidth={{base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading alignSelf="center" fontWeight="extrabold" color="cyan.500" size="4xl">
                    2+ 

                </Heading>
                <Text alignSelf="center" font="2xl" >years of experience.</Text>

            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl" >
                    Product Designer and Developer, specilised in design, seo, and dev.
                </Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" 
                    w="30vh" justify="flex-end"
                    >
                        {/* <Icon color="white" p="4" as={DiAndroid} w="24" h="24" /> */}
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold"/>

                    </Flex>

                </Flex>
               

            </Box>


        </Flex>
        
    )
}

export default Profile;