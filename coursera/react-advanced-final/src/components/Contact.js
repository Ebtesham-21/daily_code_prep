import React from 'react';
import { Box, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const Conatact = () => {
    return (
        <Box id="contact">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Let's Connect
            </Text>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder='Your Name' mb={4}/>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='Your Email' mb={4}/>
                <FormLabel>Message</FormLabel>
                <Input as="textarea" placeholder='Your Message' mb={4}/>
                <Button colorScheme='teal' type="submit">
                    Send
                </Button>
            </FormControl>
        </Box>
    );
};

export default Conatact;