import React, { useEffect, useState } from "react";
import lines44 from "../assets/img/Line44.png";
import { SimpleGrid } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Icon, Image, Input, Text } from "@chakra-ui/react";
import { IoPersonCircleSharp } from "react-icons/io5";
import Apply from "../assets/img/Apply.png";
import { Link } from "react-router-dom";
import axios from "axios";
const Recruitment = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/recruitment");
      console.log(response.data[0].CompanyName);

      setData(response.data);
    };
    fetchData();
  }, []);

  console.log(data.length);

  return (
    <>
      {" "}
      <Box
        // border={"1px solid green"}
        position={"absolute"}
        height={"100vh"}
        right={"0"}
        width={"85vw"}
      >
        <Box 
        // border={"1px solid red"} 
        height={"10vh"}>
          <Link to="/userprofile">
            <Box
              cursor={"pointer"}
              display={"flex"}
              position={"absolute"}
              right={"2vw"}
              gap={".5vw"}
              marginTop={"28.8px"}
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
          </Link>
        </Box>
        <Box 
        // border={"1px solid red"}
         height={"10vh"}>
          <Text
            display={"flex"}
            justifyContent={"center"}
            fontSize={"5vh"}
            letterSpacing={2.5}
          >
            Job Listings
          </Text>
          <Image
            src={lines44}
            height={"10px"}
            marginLeft={"43%"}
            alt=""
          ></Image>
        </Box>

        <Box
          height={"79.9vh"}
          // border={"1px solid green"}
          padding={"1vh 10vh 10vh 1vh"}
        >
          {/* this is the where list will be appeared */}
          {data.map((newdata) => (
            <Box
              // border={"1px solid blue"}
              bgColor={"#faf9f0"}
              height={"15vh"}
              mt={"1vh"}
              borderRadius={"2vh"}
              boxShadow={"1px 1px 10px black"}
              display={"flex"}
              flexDirection={"row"}
              mb={"2vh"}
            >
              <Box height={"15vh"} border={"1px solid black"} flex={"1"}>
                here will be picture
              </Box>
              <Box
                height={"15vh"}
                border={"1px solid black"}
                flex={"4"}
                letterSpacing={1}
                fontFamily={"times new roman"}
              >
                <Text fontWeight={"bold"}>
                  {/* Post */}
                  {newdata.Post}
                </Text>
                <Text fontWeight={"bold"}>
                  {/* companyname */}
                  {newdata.CompanyName}
                </Text>
                <Text display={"inline-block"}>{newdata.Location}</Text>
                <Text ml={"10vw"} display={"inline-block"}>
                  Salary: {newdata.Salary}
                </Text>
                <Text>{newdata.Description}</Text>
              </Box>
              <Box>
                <Link to="/application">
                  <Image
                    src={Apply}
                    position={"relative"}
                    right={"-7vh"}
                    h={"8vh"}
                    cursor={"pointer"}
                  />
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Recruitment;
