import {
  Box,
  Flex,
  Icon,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import BarChart from "../../../components/chart/barChart";

import Card from "../../../components/card/index";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../../../variable/index";

import { RiArrowUpSFill } from "react-icons/ri";

export default function DailyTraffic(props) {
  const { ...rest } = props;
  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("gray.900", "white");
  return (
    <Card
      align='center'
      direction='column'
      w='100%'
      bg={colorMode === 'dark' ? '#0F0F0F' : '#FFFF'}
      borderRadius='15px'
      p='20px'
      {...rest}>
      <Flex
        justify='space-between'
        align='start'
        px='10px'
        pt='5px'>
        <Flex
          flexDirection='column'
          align='start'
          me='20px'>
          <Flex w='100%'>
            <Text
              me='auto'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              Daily Traffic
            </Text>
          </Flex>
          <Flex align='end'>
            <Text
              color={textColor}
              fontSize='34px'
              fontWeight='700'
              lineHeight='100%'>
              2.579
            </Text>
            <Text
              ms='6px'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              Visitors
            </Text>
          </Flex>
        </Flex>
        <Flex align='center'>
          <Icon as={RiArrowUpSFill} color='green.500' />
          <Text color='green.500' fontSize='sm' fontWeight='700'>
            +2.45%
          </Text>
        </Flex>
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
          type={"bar"}
        />
      </Box>
    </Card>
  );
}