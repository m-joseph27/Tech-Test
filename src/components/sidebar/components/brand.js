import React from "react";
import { Flex } from "@chakra-ui/react";
import { HSeparator } from "../../separator/index";

export function SidebarBrand() {

  return (
    <Flex align='center' direction='column'>
      <h1 className="text-logo">ADMIN</h1>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
