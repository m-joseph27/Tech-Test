import React from "react";
import { Avatar, Box, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Card from "../../../components/card/index";

export default function Banner(props) {
  const { banner, avatar, name, job, posts, followers, following } = props;
  const { colorMode } = useColorMode();
  
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );

  return (
    <Card
      mb={{ base: "0px", lg: "20px" }}
      bg={colorMode === 'dark' ? '#0F0F0F' : '#FFFF'}
      borderRadius='16px'
      p='20px'
      align='center'>
      <Box
        bg={`url(${banner})`}
        bgSize='cover'
        borderRadius='16px'
        h='131px'
        w='100%'
      />
      <Avatar
        mx='auto'
        src={avatar}
        h='87px'
        w='87px'
        mt='-43px'
        border='4px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {job}
      </Text>
      <Flex w='max-content' h='100px' mx='auto' mt='26px'>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {posts}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Posts
          </Text>
        </Flex>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {followers}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Followers
          </Text>
        </Flex>
        <Flex mx='auto' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {following}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Following
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}