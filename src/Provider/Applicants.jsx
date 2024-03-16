import { Box, Button, Icon, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { SearchIcon } from "@chakra-ui/icons";
const Applicants = () => {
  return (
    <>
      <Box height={"100vh"} width={"81.5vw"} right={"0"} position={"absolute"}>
        <Box display={"flex"}>
          <Box
            display={"flex"}
            gap={"220px"}
            marginLeft={"57px"}
            marginTop={"28px"}
          >
            <form action="/search" method="get" backgroundColor={"#414141"}>
              <Input
                type="text"
                id="search"
                name="q"
                placeholder="Search..."
                _placeholder={{
                  color: "white",
                  letterSpacing: "2",
                }}
                backgroundColor={"#414141"}
                color={"white"}
                borderRadius={"7px"}
                height={"30px"}
              />
            </form>
            <SearchIcon
              height={"28px"}
              marginLeft={"-200px"}
              cursor={"pointer"}
            />
          </Box>
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
      </Box>
      
    </>
  );
};

export default Applicants;
