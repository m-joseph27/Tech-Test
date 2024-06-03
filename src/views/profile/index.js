import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import banner from "../../assets/img/banner.png";
import person from "../../assets/img/person.png";
import Banner from "./components/banner";
import GeneralInformationView from "./components/general";

export default function ProfileOverview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        mb='20px'
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Banner
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={person}
          name='John Brown'
          job='Software Engineer'
          posts='45'
          followers='17.9k'
          following='521'
        />
        <GeneralInformationView
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          pe='20px'
        />
      </Grid>
    </Box>
  );
}