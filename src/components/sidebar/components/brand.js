import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { HorizonLogo } from "../../icons/index";
import { HSeparator } from "../../separator/index";

export function SidebarBrand() {
  let logoColor = useColorModeValue("navy.700", "blue");

  return (
    <Flex align='center' direction='column'>
      <h1 className="text-logo">Tech Test</h1>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
