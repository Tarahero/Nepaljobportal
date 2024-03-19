import { Box, Image } from "@chakra-ui/react";
import React from "react";
import chat from "../assets/img/Chat.png"

const Application = () => {
  return (
    <>
      <Box
        border={"1px solid"}
        bgColor={"#DDDBCB"}
        ml={"221px"}
        h={"200px"}
        width={"84vw"}
      >
        <Box
          border={"1px solid #414141"}
          height={"180px"}
          width={"180px"}
          position={"relative"}
          left={"100px"}
          top={"9px"}
          borderRadius={"100px"}
          backgroundColor={"white"}
        ></Box>
        <Box
          border={"1px solid"}
          h={"50px"}
          width={"50vw"}
          position={"absolute"}
          left={"620px"}
          top={"40px"}
        >
          Name of the Company
          <br />
          What kind of Company
        </Box>
        <Box
          border={"1px solid"}
          h={"50px"}
          width={"50vw"}
          position={"absolute"}
          left={"620px"}
          top={"100px"}
        >
          Mail of the company
          <br />
          Contact of the company
        </Box>
        <Image src={chat} shadow={"15px 15px 15px grey"} alt="" position={'absolute'} left={"92vw"} top={"86vh"} h={"80px"}/>
      </Box>
    </>
  );
};

export default Application;
