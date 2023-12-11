import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const Projects = () => {
    //featured projects gula jabye

    return (
        <Box id="projects">
            <Text fontSize="2x1" fontWeight="bold" mb={4}>
                Featured Projects
            </Text>
            <SimpleGrid columns={3} spacing={4}>
                /* Map through your projects and create Project card components
            </SimpleGrid>

        </Box>
    );
};

export default Projects;