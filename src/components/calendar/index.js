import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import { Text, Icon } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "../card/index";

export default function CalenderComponent(props) {
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());

  return (
    <Card
      align='center'
      direction='column'
      w='100%'
      maxW='max-content'
      p='20px 15px'
      bg="white"
      borderRadius="15px"
      {...rest}>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={selectRange}
        view={"month"}
        tileContent={<Text color='brand.500'></Text>}
        prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
        nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />}
      />
    </Card>
  );
}