import { Box, Button, Icon, Image, Input, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import Applicant from "../assets/img/Applicant.png";
const ProviderDashboard = () => {
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
      <Box
        bgColor={"#DDDBCB "}
        border={"1px solid"}
        position={"absolute"}
        height={"80vh"}
        width={"70vw"}
        mt={"12vh"}
        ml={"17vw"}
        boxShadow={"2px 4px 20px black"}
      >
        <Text
          fontSize={"24px"}
          letterSpacing={2.5}
          fontFamily={"Times New Roman"}
          position={"relative"}
          mt={"1vh"}
          left={"1vw"}
        >
          Added Job List
        </Text>

        <SimpleGrid columns={1} spacing={15} p={"1.5vh 2vw"}>
          <Box bg="#FFFAFA" height="15vh">
            <SimpleGrid columns={[1, 4]} spacing="4px">
              <Link to="/applicants">
                <Image
                  position={"absolute"}
                  src={Applicant}
                  alt=""
                  h={"50px"}
                  cursor={"pointer"}
                  marginLeft={"59.5vw"}
                  marginTop={"-1px"}
                />
              </Link>
            </SimpleGrid>
          </Box>
          <Box bg="#FFFAFA" height="15vh">
            <SimpleGrid columns={[1, 4]} spacing="4px">
              <Link to="/applicants">
                <Image
                  position={"absolute"}
                  src={Applicant}
                  alt=""
                  h={"50px"}
                  cursor={"pointer"}
                  marginLeft={"59.5vw"}
                  marginTop={"-1px"}
                />
              </Link>
            </SimpleGrid>
          </Box>
          <Box bg="#FFFAFA" height="15vh">
            <SimpleGrid columns={[1, 4]} spacing="4px">
              <Link to="/applicants">
                <Image
                  position={"absolute"}
                  src={Applicant}
                  alt=""
                  h={"50px"}
                  cursor={"pointer"}
                  marginLeft={"59.5vw"}
                  marginTop={"-1px"}
                />
              </Link>
            </SimpleGrid>
          </Box>
          <Box bg="#FFFAFA" height="15vh">
            <SimpleGrid columns={[1, 4]} spacing="4px">
              <Link to="/applicants">
                <Image
                  position={"absolute"}
                  src={Applicant}
                  alt=""
                  h={"50px"}
                  cursor={"pointer"}
                  marginLeft={"59.5vw"}
                  marginTop={"-1px"}
                />
              </Link>
            </SimpleGrid>
          </Box>
        </SimpleGrid>

        <Box position={"absolute"} right={"5vw"} top={"70vh"}>
          <Link to="/addjob">
            <Button
              height={"6vh"}
              border={"1px solid"}
              fontFamily={"times new roman"}
              top={"11vh"}
              left={"4vw"}
              letterSpacing={2}
            >
              Add Job
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
export default ProviderDashboard;

