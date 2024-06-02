import React from "react";
import {
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  IconButton
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function TableSearch(props) {
  const { search, setSearch, background, borderRadius } = props;
  const searchIconColor = useColorModeValue("gray.700", "white");

  return (
    <Box mb={4} width="100%">
      <InputGroup>
        <InputLeftElement
          children={
            <IconButton
              bg='inherit'
              borderRadius='inherit'
              _hover='none'
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={
                <SearchIcon color={searchIconColor} w='15px' h='15px' />
              }></IconButton>
          }
        />
        <Input
          placeholder="Search in table..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          width="100%"
          bg={background}
          borderRadius={borderRadius ? borderRadius : "30px"}
        />
      </InputGroup>
    </Box>
  );
}