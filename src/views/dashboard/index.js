import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import MiniCard from "../../components/card/miniCard";
import React from "react";
import {
  MdNoteAdd,
  MdAttachMoney,
  MdInsertChart,
  MdInsertDriveFile,
} from "react-icons/md";
import IconBox from "../../components/icons/iconBox";
import TotalSpent from "./components/totalSpent";

export default function DashboardView() {
  const brandColor = useColorModeValue("orange.500", "white");
  const boxBg = useColorModeValue("#F3F6FC", "whiteAlpha.100");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'
      >
        <MiniCard
          content={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdInsertChart} color={brandColor} />
              }
            />
          }
          name='Earnings'
          value='$350.4'
        />
        <MiniCard
          content={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name='Spend this month'
          value='$642.39'
        />
        <MiniCard growth='+23%' name='Sales' value='$574.34' />
        <MiniCard growth='+75%' name='User' value='1000+' />
        <MiniCard
          content={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdNoteAdd} color='white' />}
            />
          }
          name='New Tasks'
          value='154'
        />
        <MiniCard
          content={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdInsertDriveFile} color={brandColor} />
              }
            />
          }
          name='Total Projects'
          value='2935'
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        {/* <WeeklyRevenue /> */}
      </SimpleGrid>
    </Box>
  )
}