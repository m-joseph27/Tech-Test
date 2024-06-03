import React from "react";
import { SimpleGrid, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import InformationView from "./information";
import Card from "../../../components/card/index";

export default function GeneralInformationView(props) {
  const { ...rest } = props;
  const {colorMode} = useColorMode();
  const textColorPrimary = useColorModeValue("gray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Card
      mb={{ base: "0px", "2xl": "20px" }}
      p='20px'
      borderRadius='16px'
      bg={colorMode === 'dark' ? '#0F0F0F' : '#FFFF'}
      {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum eu libero in suscipit. Etiam sed scelerisque dolor. Ut vel facilisis sem. Nulla commodo lectus id tellus rhoncus, non placerat nulla tincidunt. Vestibulum commodo nunc posuere vulputate bibendum. Praesent ac turpis a tellus aliquet ultrices. In eu rhoncus magna, in fermentum velit. Cras ut facilisis massa. Donec finibus ornare elit, at interdum metus cursus nec.
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <InformationView
          boxShadow={cardShadow}
          title='Education'
          value='ITB'
        />
        <InformationView
          boxShadow={cardShadow}
          title='Languages'
          value='Indonesia, English, Japan'
        />
        <InformationView
          boxShadow={cardShadow}
          title='Department'
          value='Software Engineer'
        />
        <InformationView
          boxShadow={cardShadow}
          title='Work History'
          value='Gojek, Uber'
        />
        <InformationView
          boxShadow={cardShadow}
          title='Organization'
          value='MAPALA'
        />
        <InformationView
          boxShadow={cardShadow}
          title='Birthday'
          value='27 July 1996'
        />
      </SimpleGrid>
    </Card>
  );
}