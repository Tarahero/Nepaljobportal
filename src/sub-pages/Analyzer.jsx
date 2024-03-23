import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import critical from "../assets/img/critical.png";
import piechart from "../assets/img/piechart.png";
import process from "../assets/img/Process.png";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
const Analyzer = () => {
  const [discrip, setDescrip] = useState({
    message: "",
  });
  const [geminians, setGeminians] = useState("");
  const [isLoading, setLoading] = useState(false);

  axios.defaults.withCredentials = true;

  const analyzedButton = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3001/analyzer",
        discrip
      );
      setLoading(false);

      setGeminians(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box
        border={"1px solid black"}
        position={"absolute"}
        height={"75vh"}
        width={"65vw"}
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
          position={"absolute"}
          border={"1px solid black"}
          fontFamily={"Times New Roman"}
          backgroundColor={"white"}
          height={"40vh"}
          width={"25vw"}
          marginTop={"80px"}
          marginLeft={"30px"}
          placeholder={`What are your skills , qualification ,experience`}
          textAlign={"center"}
          _placeholder={{
            whiteSpace: "pre-wrap",
            textAlign: "center",
            letterSpacing: "2.5px",
          }}
          onChange={(e) => {
            setDescrip({ ...discrip, message: e.target.value });
          }}
        ></Input>

        <Image
          cursor={"pointer"}
          height={"10%"}
          src={process}
          position={"absolute"}
          right={"-49px"}
          bottom={"-48px"}
          onClick={analyzedButton}
        ></Image>
        <Box
          border={"1px solid black"}
          fontFamily={"Times New Roman"}
          backgroundColor={"white"}
          type="text"
          height={"40vh"}
          width={"25vw"}
          marginTop={"80px"}
          marginLeft={"30px"}
          position={"absolute"}
          right={"8vw"}
        >
          {isLoading ? (
            <Flex justifyContent={"center"} mt={"16vh"}>
              <Spinner
                thickness="4px"
                speed="0.2s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              ></Spinner>
            </Flex>
          ) : (
            <Text fontSize={"14px"} >{geminians}</Text>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Analyzer;
