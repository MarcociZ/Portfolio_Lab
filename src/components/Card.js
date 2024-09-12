import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const border = 12;
  const style1 = {
    color:"black",
    margin: 10,
  }
  return  (
    <div className="container" 
        style={{background: "white", 
                borderRadius: border,
                margin: 4}}>
      <VStack spacing={2} align='stretch'>
        <Image src={imageSrc} style={{borderRadius: border}}/>
        <Heading style={style1}>{title}</Heading>
        <Text style={style1}>{description}</Text>
        <HStack>
          <Text style={style1}>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" style={style1}/>
        </HStack>
      </VStack>
    </div>
  );
};

export default Card;
