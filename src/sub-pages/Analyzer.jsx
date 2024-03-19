import { Box, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import critical from "../assets/img/critical.png";
import piechart from "../assets/img/piechart.png";
import process from "../assets/img/Process.png";
const Analyzer = () => {
  return (
    <>
      <Box
        border={"1px solid black"}
        position={"absolute"}
        height={"520px"}
        width={"900px"}
        marginLeft={"25%"}
        marginTop={"7%"}
        bgColor={"#DDDBCB"}
      >
        <Image
          src={critical}
          height={"17.6%"}
          marginTop={"32px"}
          marginLeft={"11px"}
          position={"fixed"}
        ></Image>

        <Image
          src={piechart}
          height={"11%"}
          marginTop={"10px"}
          marginLeft={"49.6%"}
          position={"fixed"}
        ></Image>

        <Text
          top={"60px"}
          fontSize={"30px"}
          textAlign={"center"}
          fontFamily={"Times New Roman"}
        >
          Description Panel
        </Text>

        <Input
          border={"1px solid"}
          fontFamily={"Times New Roman"}
          backgroundColor={"white"}
          type="text"
          height={"300px"}
          width={"780px"}
          marginTop={"80px"}
          marginLeft={"30px"}
          position={"fixed"}
          _hover={{ borderColor: "black", boxShadow: "none" }}
          placeholder={`Please describe your ideal job,including preferred industry,role, key responsibilities, desired skills,and any specific preferences.This will help us customize our job analysis to match your preferences and find the most suitable opportunities for you.`}
          _placeholder={{
            whiteSpace: "pre-line",
            textAlign: "center",
            letterSpacing: "2.5px",
          }}
        ></Input>
        <Image
          cursor={"pointer"}
          height={"10%"}
          src={process}
          position={"absolute"}
          right={"-49px"}
          bottom={"-48px"}
        ></Image>
      </Box>
    </>
  );
};

export default Analyzer;
