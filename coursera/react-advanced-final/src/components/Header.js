import React from 'react';
import { Link } from 'react-scroll'; 

const Header = () => {
    return (
        <header>
            <nav>
                <HStack >
                    {
                        socials.map((social) =>
                        <a href={social.url}>
                            
                        </a>
                        )
                    }
                    
                </HStack>
            </nav>
        </header>
    );
};

export default Header;