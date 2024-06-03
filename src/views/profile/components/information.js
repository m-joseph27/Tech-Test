import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

import Card from "../../../components/card/index";

export default function InformationView(props) {
  const { title, value, ...rest } = props;
  const textColorPrimary = useColorModeValue("gray.900", "white");
  const textColorSecondary = "gray.400";
  const bg = useColorModeValue("white", "navy.700");

  return (
    <Card borderRadius='16px' bg={bg} {...rest}>
      <Box p='10px'>
        <Text fontWeight='500' color={textColorSecondary} fontSize='sm'>
          {title}
        </Text>
        <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
          {value}
        </Text>
      </Box>
    </Card>
  );
}
