import * as React from 'react';
import { Stack } from '@mui/material';
import PostCard from '../userprofile/PostCard';


const Anouncement=()=> {
  return (
    <>
      <Stack width={{ xs: "96%", md: "80%" }} mx={"auto"} rowGap={2} p={1}>
      <PostCard/>
    </Stack>
    </>
  );
}

export default Anouncement