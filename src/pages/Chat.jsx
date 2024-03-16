import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Box, Icon, Text, Input } from "@chakra-ui/react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { TbFolderUp } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";

const Chat = () => {
  return (
    <>
      <Box
        position={"relative"}
        left={"17.2%"}
        height={"99.7vh"}
        width={"82.6vw"}
      >
        <Box
          cursor={"pointer"}
          position={"absolute"}
          display={"flex"}
          width={"80vw"}
          top={"20px"}
          gap={"20px"}
        >
          <Link to={"/"}>
            <Box
              textColor={"black"}
              border={"1px solid black"}
              borderRadius={"5px"}
              boxShadow={"5px 5px 10px #414141"}
              height={"auto"}
              width={"10vw"}
              display={"flex"}
              marginTop={"20px"}
              gap={"10px"}
              marginLeft={"120px"}
              alignItems={"center"}
            >
              <Icon
                fontSize={"25px"}
                marginLeft={"10px"}
                as={RxDashboard}
                height={"40px"}
                color={"black"}
                cursor={"pointer"}
                textAlign={"center"}
              />
              <Text fontWeight={"600"}> Dashboard</Text>
            </Box>
          </Link>
          <Box
            cursor={"pointer"}
            display={"flex"}
            position={"absolute"}
            right={"0px"}
            gap={"10px"}
            marginTop={"9px"}
            zIndex={"2"}
            alignItems={"center"}
          >
            <Icon
              as={IoPersonCircleSharp}
              height={"30px"}
              width={"30px"}
              color={"white"}
              cursor={"pointer"}
            />
            <Text fontWeight={600} color={"white"}>
              Profile
            </Text>
          </Box>
        </Box>
        <Box top={"11%"} height={"88.7vh"} width={"100%"} position={"absolute"}>
          <Box
            border={"1px solid black"}
            height={"75vh"}
            borderRadius={"10px"}
            width={"72%"}
            position={"relative"}
            top={"45px"}
            left={"10%"}
          >
            <Box
              height={"128px"}
              backgroundColor={"#DDDBCB"}
              borderRadius={"10px 10px 0px 0px"}
              boxShadow={"1px 7px 7px #414141"}
            >
              <Box position={"relative"} marginLeft={"40%"}>
                <Text>Name of Company</Text>
              </Box>
              <Box
                border={"1px solid #414141"}
                height={"150px"}
                width={"150px"}
                position={"relative"}
                left={"40px"}
                top={"20px"}
                borderRadius={"100px"}
                backgroundColor={"white"}
              ></Box>
            </Box>
            <Box
              height={"15%"}
              width={"96%"}
              position={"absolute"}
              left={"50px"}
              bottom={"2%"}
              borderRadius={"10px"}
            >
              <Box
                border={"1px solid black"}
                borderRadius={"10px 0px 0px 10px"}
                height={"10.5vh"}
                width={"10%"}
                marginTop={"3.8px"}
                cursor={"pointer"}
              >
                <Icon
                  as={TbFolderUp}
                  marginLeft={"10px"}
                  color={"#414141"}
                  height={"100%"}
                  width={"59px"}
                />
              </Box>
              <Input
                border={"1px solid black"}
                type="text"
                placeholder=" T y p e   y o u r   m e s s a g e   h e r e..."
                fontSize={"18px"}
                paddingLeft={"78px"}
                height={"11.1vh"}
                width={"590px"}
                position={"absolute"}
                bottom={"-1px"}
                marginLeft={"92px"}
              ></Input>
              <Box
                border={"1px solid"}
                height={"11.3vh"}
                width={"80px"}
                position={"absolute"}
                left={"700px"}
                bottom={"-1px"}
                cursor={"pointer"}
              >
                <Icon
                  as={IoIosSend}
                  color={"#414141"}
                  height={"100%"}
                  width={"59px"}
                  position={"relative"}
                  left={"12%"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Chat;
