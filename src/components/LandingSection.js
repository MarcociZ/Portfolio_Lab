import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="landing-section"
  >
    <VStack  spacing={6}>
      <VStack spacing={1}>
        <Avatar size='1xs' name='Pete' src="https://i.pravatar.cc/150?img=7" />
        <p h='16px'>{greeting}</p>
      </VStack>  
      <Heading align='center'>
        {bio1}
        <br></br>
        {bio2}
      </Heading>      
    </VStack>
  </FullScreenSection>
  
);

export default LandingSection;
