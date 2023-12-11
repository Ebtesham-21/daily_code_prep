import React from 'react';
import HStack from '@chakra-ui/react';
import { Link } from 'react-scroll'; 

const Header = () => {
    return (
        <header>
            <nav>
                <HStack spacing = {8} >
                    {
                        socials.map((social) =>
                        <a href={social.url} key={social.url}
                        >
                            <FontAwesomeIcon icon={social.icon} size="2x" />

                        </a>
                        )
                    }
                    
                </HStack>
            </nav>
            <nav>
                <HStack spacing={8}>
                    <a href="#projects-section" onClick={handleClick("projects")}>
                        Projects
                    </a>
                    <a href="contactme-section" onClick={handleClick("projects")}>
                        Contact Me
                    </a>
                </HStack>
            </nav>
        </header>
    );
};

export default Header;