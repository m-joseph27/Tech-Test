import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import banner from "../../assets/img/banner.png";
import avatar from "../../assets/img/avatar1.png";
import Banner from "./components/banner";

export default function ProfileOverview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Banner
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
      </Grid>
    </Box>
  );
}