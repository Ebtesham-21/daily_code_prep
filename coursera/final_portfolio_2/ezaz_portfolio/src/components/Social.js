import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaGoogle, FaGamepad, FaCar, FaSpotify } from 'react-icons/fa';

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaFacebook} boxSize="50"/>
            <Icon as={FaGoogle} boxSize="50"/>
            <Icon as={FaGamepad} boxSize="50"/>
            <Icon as={FaCar} boxSize="50"/>
            <Icon as={FaSpotify} boxSize="50"/>

        </HStack>
    )
   
    
}

export default Social;