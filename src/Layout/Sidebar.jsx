import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { List, Box, Flex } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import logo from "../assets/img/logo.png";
import { CiSliderHorizontal } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsChatRightText } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import vector from "../assets/img/vector.png";
import Background from "./VectorBackground";

const Sidebar = () => {
  return (
    <>
      <Background />
      <Box
        position={"fixed"}
        left={"0"}
        bgColor={"#434143"}
        height={"100vh"}
        width={{ base: "none", lg: "15vw" }}
        display={{ base: "none", lg: "block" }}
        color={"white"}
        p={"20px 15px"}
        fontSize={"17px"}
        gap={"10px"}
      >
        <Box alignItems={"center"} margin={"0px 25px"} padding={"10px 20px"}>
          <img src={logo} height={"100%"} width={"114px"} alt=""></img>
        </Box>
        <Box marginTop={"10vh"} marginLeft={"15px"} display={"flex"}>
          <ul>
            <List paddingLeft={"20px"}>
              <Link to="/">
                <Box display={"flex"} gap={"10px"}>
                  <RxDashboard
                    fontSize={"20px"}
                    paddingRight={"20px"}
                    cursor={"pointer"}
                  />
                  Dashboard
                </Box>
              </Link>
            </List>

            <List marginTop={"3vh"} paddingLeft={"20px"}>
              <Link to="/filter">
                <Box display={"flex"} gap={"10px"}>
                  <CiSliderHorizontal fontSize={"20px"} cursor={"pointer"} />
                  Filter
                </Box>
              </Link>
            </List>

            <List marginTop={"3vh"} paddingLeft={"20px"}>
              <Link to="/notification">
                <Box display={"flex"} gap={"10px"}>
                  <IoMdNotificationsOutline
                    fontSize={"20px"}
                    cursor={"pointer"}
                  />
                  Notification
                </Box>
              </Link>
            </List>
            <List marginTop={"3vh"} paddingLeft={"20px"}>
              <Link to="/setting">
               <Box display={"flex"} gap={"10px"}>
               <IoSettingsOutline fontSize={"20px"} cursor={"pointer"} />
                Setting
               </Box>
              </Link>
            </List>
            <List marginTop={"3vh"} paddingLeft={"20px"}>
              <Link to="/chat">
                <Box display={"flex"} gap={"10px"}>
                <BsChatRightText  fontSize={"20px"} cursor={"pointer"}  />
                Chat
                </Box>
              </Link>
            </List>
          </ul>
        </Box>
        <ul>
          <Flex
            align="center"
            position={"absolute"}
            left={"4rem"}
            top={"90vh"}
            direction="column"
            transition={".1s"}
          >
            <List>
              <Link to="/help">
               <Box display={"flex"} gap={"10px"}> 
               Help
                <IoMdHelpCircleOutline  fontSize={"22px"} cursor={"pointer"} />
               </Box>
              </Link>
            </List>
            <List marginTop={"0%"} mt={"1vh"}>
              <Link to="/login">
               <Box display={"flex"} gap={"10px"}>
               Logout
                <RiLogoutBoxLine fontSize={"20px"} cursor={"pointer"} />
               </Box>
              </Link>
            </List>
          </Flex>
        </ul>
      </Box>
      <Outlet />
    </>
  );
};

export default Sidebar;
