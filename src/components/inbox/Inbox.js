 import React, { useState } from 'react'
 import Grid from "@mui/material/Grid";
 import { Divider, Stack } from "@mui/material";
import Sidebar from './left/Sidebar';
import Body from './right/Body';
import Head from './right/Head';
import Foot from './right/Foot';
import {useAppContext} from "../../context/AppContext"
const Inbox = () => {
    // const { mobilechat, setMobilechat } = useAppContext();
    // const handleClick = () => {
    //   setMobilechat(!mobilechat);
    // };
  
    const [mobilechat, setMobilechat] = useState(false);
    return (
      <Grid
        container
        padding={"20px 0px"}
        width={{ xs: "100%", sm: "90%", md: "95%" }}
        mx="auto"
        height="86vh"
      >
        <Sidebar/>

        <Grid
          display={{ xs: mobilechat ? 'block' : 'none', md: 'block' }}
          item
          xs={12}
          sm={12}
          md={7}
          p={{ xs: "5px", md: "20px" }}
          border="1px solid silver"
        >
          {/* main area */}
          {/* {activeChatUser ? */}
          <Stack
            direction={"column"}
            justifyContent="space-between"
            height="100%"
          >
            <div>
              <Head />
              <Divider />
              <Body/>
            </div>
            <Foot />
          </Stack>
          {/* : "none"} */}
        </Grid>
      </Grid>
    )
  }
export default Inbox