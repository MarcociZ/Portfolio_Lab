import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: zma@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];



const Header = () => {
  
  

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  function SocialList(props) {
    const social = props.socials.map((social) =>
      <a 
	key={social.icon.iconName}
	href={social.url}>
        <FontAwesomeIcon icon={social.icon} size="2x"/>
      </a>
    );

    return  (
      <HStack spacing={4}>
        {social}
      </HStack>      
    );
  }

  
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [topY, setTopY] = useState(0);
  
  const handleScroll = () => {

    let position = window.scrollY;

    if (prevScrollPos - position < 0) {
        setTopY(-200);
      } else {
        setTopY(0);
      }
    setPrevScrollPos(position);

  };

  useEffect (() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [prevScrollPos]);


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform='auto'
      translateY={`${topY}px`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <SocialList socials={socials} />
            {/* Add social media links based on the `socials` data */}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='/#landing' onClick={handleClick("landing")}>Home</a>
              <a href='/#projects' onClick={handleClick("projects")} >Projects</a>
              <a href='/#contact-me' onClick={handleClick("contactme")}>Contact Me</a>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
