import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { HorizonLogo } from "../../icons/index";
import { HSeparator } from "../../separator/index";

export function SidebarBrand() {
  let logoColor = useColorModeValue("navy.700", "blue");

  return (
    <Flex align='center' direction='column'>
      <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
