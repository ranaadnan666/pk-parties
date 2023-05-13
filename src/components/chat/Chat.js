import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import { Avatar, Divider, Stack, Typography } from "@mui/material";
import Sidebar from "./left/Sidebar";
import Head from "./right/Head";
import { Box } from '@mui/system';
import SendIcon from "@mui/icons-material/Send";
import moment from 'moment';

function Chat() {
    const [mobilechat, setMobilechat] = useState(false);

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message }]);
            setMessage("");
        }
    };
    return (
        <Grid
            container
            padding={"20px 0px"}
            width={{ xs: "100%", sm: "90%", md: "95%" }}
            mx="auto"
            height="86vh"
        >
            <Grid item xs={12}
                sm={12}
                md={4}>
                <Sidebar />
            </Grid>
           

            <Grid
                display={{ xs: mobilechat ? 'block' : 'none', md: 'block' }}
                item
                xs={12}
                sm={12}
                md={8}
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
                        {/* ==================body============== */}
                        <Box>
                            <p
                                style={{
                                    background: '#edf7ed',
                                    padding: '5px 0px',
                                    textAlign: 'center',
                                    width: '20%',
                                    margin: 'auto',
                                    marginTop: '10px',

                                }}>
                                {/* {group.date} */}
                                12 june 2022
                            </p>
                            {/* message */}
                            {messages.map((message, index) => (
                                <Stack direction="row-reverse"
                                    padding={"5px"}
                                    
                                    margin={"4px 0px"}
                                  spacing={1}
                                    key={index}
                                    sx={{
                                        borderRadius: "10px",
                                    }}
                                >
                                    {/* Avatar */}
                                    <Avatar
                                        sx={{
                                            width: { xs: "30px", sm: "50px" },
                                            height: { xs: "30px", sm: "50px" },
                                            cursor: "pointer",
                                        }}

                                        src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    />
                                   
                                    <Stack direction={"column"} maxWidth={"500px"} overflow={"hidden"} >
                                        {/* Message */}
                                        <div
                                            style={{
                                                backgroundColor: "lightgray",
                                                borderRadius: "20px",
                                                padding: "10px 15px",
                                                overflowWrap: "break-word",
                                                maxWidth: "80%",
                                            }}
                                        >
                                            <Typography>
                                                {message.text}
                                            </Typography>
                                            <Typography style={{ fontSize: "12px" }} textAlign="right">
                                                {moment().format("hh:mm A")}
                                            </Typography>
                                        </div>
                                    </Stack>

                                </Stack>
                            ))}



                        </Box>
                    </div>
                    {/* ==============Foot========== */}
                    <Stack
                        mt={2}
                        direction={"row"}
                        rowGap={1}
                        // backgroundColor="red"
                        fontSize={{
                            xs: "8px",
                            sm: "10px",
                            md: "12px",
                            lg: "14px",
                            xl: "14px",
                        }}
                    >
                        <textarea
                            placeholder="Write a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{
                                width: '100%',
                                resize: "none",
                                padding: "5px",
                                borderRadius: "10px",
                                border: "none",
                                outline: "none",
                                backgroundColor: "lightgray",
                                fontSize: "inherit",
                                "&:hover": {
                                    color: "skyblue",
                                },
                            }}

                        ></textarea>
                        <SendIcon
                            onClick={handleSend}
                            sx={{
                                cursor: "pointer",
                                padding: "4px",
                                fontSize: { xs: "10px", md: "25px", lg: "25px" },
                                color: "#666666",
                                "&:hover": {
                                    color: "skyblue",
                                },
                            }}
                        />
                    </Stack>
                </Stack>
                {/* : "none"} */}
            </Grid>
        </Grid>
    )
}

export default Chat


