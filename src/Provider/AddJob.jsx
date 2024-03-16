import { Box, Button, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { SimpleGrid } from "@chakra-ui/react";
const AddJob = () => {
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
            height="45px"
            borderRadius={"10px"}
          ></Input>
          <Text letterSpacing={2} fontFamily={"Times New roman"}>
            Location:
          </Text>
          <Input
            bgColor={"white"}
            border={"1px solid"}
            height="45px"
            borderRadius={"10px"}
          ></Input>
          <Text letterSpacing={2} fontFamily={"Times New roman"}>
            Post:
          </Text>
          <Input
            bgColor={"white"}
            border={"1px solid"}
            height="45px"
            borderRadius={"10px"}
          ></Input>
          <Text letterSpacing={2} fontFamily={"Times New roman"}>
            Time:
          </Text>
          <Input
            bgColor={"white"}
            border={"1px solid"}
            height="45px"
            borderRadius={"10px"}
          ></Input>
          <Text letterSpacing={2} fontFamily={"Times New roman"}>
            Salary:
          </Text>
          <Input
            bgColor={"white"}
            border={"1px solid"}
            height="45px"
            borderRadius={"10px"}
          ></Input>
          <Text letterSpacing={2} fontFamily={"Times New roman"}>
            Description:
          </Text>
          <Input
            bgColor={"white"}
            border={"1px solid"}
            height="200px"
            borderRadius={"10px"}
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
        >
          Add Job
        </Button>
      </Box>
    </>
  );
};

export default AddJob;
