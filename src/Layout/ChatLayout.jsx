import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { List } from "@chakra-ui/react";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Search2Icon } from "@chakra-ui/icons";
import vector from "../assets/img/vector.png";
import logo from "../assets/img/logo.png";
import { Input } from "@chakra-ui/react";

const ChatLayout = () => {
  return (
    <>
      <div className="background">
        <Box>
          <img src={vector} className="vector" alt=""></img>
        </Box>
      </div>
      <Box className="navbar">
        <Box
          className="topsection"
          alignItems={"center"}
          margin={"0px 25px"}
          padding={"10px 20px"}
        >
          <img src={logo} height={"100%"} width={"114px"} alt=""></img>
        </Box>
        <Box
          border={"1px solid black"}
          height={"70%"}
          borderRadius={"15px"}
          backgroundColor={"white"}
        >
          <Box
            border={"1px solid black"}
            height={"14%"}
            backgroundColor={"#DDDBCB"}
            borderRadius={"15px 15px 0px 0px"}
          >
            <Input
              margin={"9%"}
              width={"70%"}
              placeholder="S e a r c h. . ."
              backgroundColor={"white"}
              color={"black"}
            />
            <Search2Icon
              position={"relative"}
              color={"black"}
              marginLeft={"85%"}
              bottom={"50px"}
              cursor={"pointer"}
            />
          </Box>
        </Box>
        <ul>
          <Box margin={"40px 0px 0px 10px"}>
            <List>
              <Link to="/help">
                Help
                <IoMdHelpCircleOutline fontSize={"22px"} cursor={"pointer"} />
              </Link>
            </List>

            <List marginTop={"0%"}>
              <Link to="/logout">
                Logout
                <RiLogoutBoxLine fontSize={"20px"} cursor={"pointer"} />
              </Link>
            </List>
          </Box>
        </ul>
      </Box>
      <Outlet />
    </>
  );
};

export default ChatLayout;
