import { Box, Button, Icon, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
const AddJob = () => {
  const [values, setValues] = useState({
    CompanyName: "",
    Location: "",
    Post: "",
    Time: "",
    Salary: "",
    Description: "",
    Date: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/addjob", {
        ...values,
      });
      if (response.data.Status === "Success") {
        alert("Job posted");
      } else {
        alert(response.data.Error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box display={"flex"}>
        <Box
          display={"flex"}
          gap={"220px"}
          marginLeft={"57px"}
          marginTop={"28px"}
        ></Box>
        <Link to="/providerprofile">
          <Box
            cursor={"pointer"}
            display={"flex"}
            position={"absolute"}
            right={"40px"}
            gap={"10px"}
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
      <form onSubmit={handleSubmit}>
        <Box bgColor={""} h={"87vh"}>
          <SimpleGrid
            columns={1}
            spacing={1}
            mt={"5vh"}
            ml={"18vw"}
            position={"relative"}
            top={"20px"}
          >
            <Text letterSpacing={2} fontFamily={"Times New roman"}>
              Company Name:
            </Text>
            <Input
              bgColor={"white"}
              border={"1px solid"}
              height="5vh"
              width={"35vw"}
              borderRadius={"10px"}
              onChange={(e) => {
                setValues({ ...values, CompanyName: e.target.value });
              }}
            ></Input>
            <Text letterSpacing={2} fontFamily={"Times New roman"}>
              Location:
            </Text>
            <Input
              bgColor={"white"}
              border={"1px solid"}
              height="5vh"
              width={"35vw"}
              borderRadius={"10px"}
              onChange={(e) => {
                setValues({ ...values, Location: e.target.value });
              }}
            ></Input>
            <Text letterSpacing={2} fontFamily={"Times New roman"}>
              Post:
            </Text>
            <Input
              bgColor={"white"}
              border={"1px solid"}
              height="5vh"
              width={"35vw"}
              borderRadius={"10px"}
              onChange={(e) => {
                setValues({ ...values, Post: e.target.value });
              }}
            ></Input>
            <Text letterSpacing={2} fontFamily={"Times New roman"}>
              Time:
            </Text>
            <Input
              bgColor={"white"}
              border={"1px solid"}
              height="5vh"
              width={"35vw"}
              borderRadius={"10px"}
              onChange={(e) => {
                setValues({ ...values, Time: e.target.value });
              }}
            ></Input>
            <Text letterSpacing={2} fontFamily={"Times New roman"}>
              Salary:
            </Text>
            <Input
              bgColor={"white"}
              border={"1px solid"}
              height="5vh"
              width={"35vw"}
              borderRadius={"10px"}
              onChange={(e)=>{
                setValues({
                  ...values,Salary: e.target.value
                })
              }}
            ></Input>
            <Text letterSpacing={2} fontFamily={"Times New roman"}>
              Description:
            </Text>
            <Input
              bgColor={"white"}
              border={"1px solid"}
              height="15vh"
              width={"35vw"}
              borderRadius={"10px"}
              onChange={(e) => {
                setValues({ ...values, Description: e.target.value });
              }}
            ></Input>
          </SimpleGrid>
          <Box
            bgColor={"black"}
            h={"92vh"}
            w={"1px"}
            position={"absolute"}
            top={"5vh"}
            left={"60vw"}
          ></Box>
          <Box position={"absolute"} top={"20vh"} right={"18vw"}>
            <Text letterSpacing={2} fontFamily={"Times New roman"}>
              Deadline:
            </Text>
            <Input
              type="date"
              bgColor={"white"}
              border={"1px solid"}
              height="40px"
              borderRadius={"10px"}
              onChange={(e) => {
                setValues({ ...values, Date: e.target.value });
              }}
            ></Input>
          </Box>
          <Box position={"absolute"} top={"40vh"} right={"7.6vw"}>
            <Text
              letterSpacing={2}
              fontFamily={"Times New roman"}
              margin={"20px"}
            >
              Upload Company Logo:
            </Text>

            <Input
              border={"none"}
              type="file"
              height="40px"
              borderRadius={"10px"}
            ></Input>
          </Box>
          <Button
            position={"absolute"}
            height={"6vh"}
            border={"1px solid"}
            fontFamily={"times new roman"}
            top={"70vh"}
            right={"20vw"}
            letterSpacing={2}
            type="submit"
          >
            Add Job
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddJob;
