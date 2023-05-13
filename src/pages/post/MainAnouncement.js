import { Box, Stack } from "@mui/material";
import React from "react";
import Anouncement from "../../components/anouncement/Anouncement";
import Rightbar from "../../components/home/Rightbar";
import CreatePost from "./Create";

const MainAnouncement = () => {
  return (
    <Box sx={{ marginLeft: {xs:0,md:"-40px"} }}>
<Stack width={"60%"} marginLeft={"120px"}>
<Stack
        width={{ xs: "96%", md: "84%",lg:"83%",xl:"82%" }}
        sx={{ marginLeft: { md: "28px", lg: "38px", xl: "63px" } }}
        rowGap={2}
        p={1}
      >
        <CreatePost />
      </Stack>
      <Stack>
          <Anouncement />
          <Anouncement />
          <Anouncement />
          <Anouncement />
        </Stack>
</Stack>
      <Stack direction={"row"} width={"76%"}>
    
        <Stack
          display={{ xs: "none", md: "block" }}
          sx={{
            position: "fixed",
            right: { md: "-10px", xl: "-80px" },
            top: "95px",
          }}
          width={{ md: "25%", xl: "35%" }}
          p={0.5}
          overflow={"auto"}
          height={
            "85vh"}
        >
          <Rightbar />
        </Stack>
      </Stack>
    </Box>
  );
};

export default MainAnouncement;
