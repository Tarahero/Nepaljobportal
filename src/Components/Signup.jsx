import { Box, Input, Text, Button, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import linkedin from "../assets/icons/linked in.png";
import google from "../assets/icons/google.png";
import stand from "../assets/img/stand.png";
import { Checkbox } from "@chakra-ui/react";
import vector from "../assets/img/vector.png";
import logo from "../assets/img/logo.png";
import lines44 from "../assets/img/Line44.png";
import '../App.css'

const Signup = () => {
  const [values, setValues] = useState({
    Email: "",
    Username: "",
    Password: "",
    IsProvider: false,
    IsSubscriber: false,
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const roleValue = values.IsProvider ? 0 : values.IsSubscriber ? 1 : null;
      const response = await axios.post("http://10.10.60.62:3001/signup", {
        ...values,
        Role: roleValue,
      });
      console.log(response);
      console.log("created successfully");
      navigate("/login");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>


    
      <div className="background">
        <Box>
          <img src={vector} className="vector" alt=""></img>
        </Box>
      </div>

    

      <Image src={logo} alt="" position={"absolute"} h={"92px"} w={"114px"} />
      <Image
      className="signup"
        src={stand}
        alt=""
        height={"100vh"}
        width={"auto"}
        ml={"20vw"}
      ></Image>

      <form onSubmit={handleSubmit}>
        <Box
        className="main_container"
          bgColor={"#C1C1C1"}
          
          height={"80vh"}
          
          position={"absolute"}
          top={"10vh"}
          right={"40vh"}
          borderRadius={"20px"}
          boxShadow={"1px 2px 20px black"}
        >
          <Text
            textAlign={"center"}
            fontFamily={"Times New Roman"}
            fontSize={"larger"}
            letterSpacing={2}
            fontWeight={600}
          >
            Create Account
          </Text>
          <Box
          
            bgColor={"#DDDBCB"}
            borderRadius={"15px"}
            height={"70vh"}
            width={"20vw"}
            position={"relative"}
            left={"10%"}
            
          >
            <Text
              position={"absolute"}
              left={"2vw"}
              top={"4.5vh"}
              fontFamily={"serif"}
            >
              Email
            </Text>
            <Input
              border={"1px solid"}
              borderRadius={"2px"}
              position={"absolute"}
              left={"2vw"}
              top={"8vh"}
              height={"28px"}
              width={"80%"}
              bgColor={"DDDBCB"}
              onChange={(e) => {
                setValues({ ...values, Email: e.target.value });
              }}
            ></Input>
            <Text
              position={"absolute"}
              left={"2vw"}
              top={"14.5vh"}
              fontFamily={"serif"}
            >
              Username
            </Text>
            <Input
              border={"1px solid"}
              borderRadius={"2px"}
              position={"absolute"}
              left={"2vw"}
              top={"18vh"}
              height={"28px"}
              width={"80%"}
              bgColor={"DDDBCB"}
              onChange={(e) => {
                setValues({ ...values, Username: e.target.value });
              }}
            ></Input>
            <Text
              position={"absolute"}
              left={"2vw"}
              top={"24.5vh"}
              fontFamily={"serif"}
            >
              Password
            </Text>
            <Input
              border={"1px solid"}
              borderRadius={"2px"}
              position={"absolute"}
              left={"2vw"}
              top={"28vh"}
              height={"28px"}
              width={"80%"}
              bgColor={"DDDBCB"}
              onChange={(e) => {
                setValues({ ...values, Password: e.target.value });
              }}
            ></Input>
            <Text
              position={"absolute"}
              left={"2vw"}
              top={"34.5vh"}
              fontFamily={"serif"}
            >
              Confirm Password
            </Text>
            <Input
              border={"1px solid"}
              borderRadius={"2px"}
              position={"absolute"}
              left={"2vw"}
              top={"38vh"}
              height={"28px"}
              width={"80%"}
              bgColor={"DDDBCB"}
              onChange={(e) => {
                setValues({ ...values, Role: e.target.value });
              }}
            ></Input>
            <Text
              position={"absolute"}
              left={"2vw"}
              top={"42.5vh"}
              fontFamily={"serif"}
            >
              Are you a*
            </Text>
            <Flex position={"absolute"} left={"15%"} top={"47vh"}>
              <Input
                type="checkbox"
                checked={values.IsSubscriber}
                colorScheme="yellow"
                border={"1px solid"}
                h={"18px"}
                onChange={(e) =>
                  setValues({
                    ...values,
                    IsSubscriber: e.target.checked,
                    IsProvider: false,
                  })
                }
              ></Input>{" "}
              <Text pl={"3px"} fontFamily={"serif"}>
                User
              </Text>
            </Flex>
            <Flex position={"absolute"} left={"45%"} top={"47vh"}>
              <Input
                type="checkbox"
                checked={values.IsProvider}
                color={"yellow"}
                border={"1px solid"}
                h={"18px"}
                onChange={(e) =>
                  setValues({
                    ...values,
                    IsProvider: e.target.checked,
                    IsSubscriber: false,
                  })
                }
              ></Input>{" "}
              <Text pl={"3px"} fontFamily={"serif"}>
                Provider
              </Text>
            </Flex>
            <Image
              src={lines44}
              height={"13px"}
              marginLeft={"33%"}
              position={"absolute"}
              left={"-50px"}
              top={"-20px"}
            ></Image>
            <Flex position={"relative"} left={"20px"} top={"53vh"} gap={"5px"}>
              <Checkbox
                colorScheme="yellow"
                border={"1.4px solid"}
                h={"17px"}
              ></Checkbox>
              <Text fontFamily={"serif"} marginLeft={"2px"}>
                I agreed to Terms and Conditons
              </Text>
            </Flex>

            <Button
              height={"35px"}
              width={"150px"}
              position={"absolute"}
              transition={".25s"}
              left={"4vw"}
              top={"58vh"}
              bgColor={"#828282 "}
              border={"none"}
              color={"white"}
              cursor={"pointer"}
              fontFamily={"serif"}
              _hover={{
                bgColor: "#454545 0.25s ease",
                transition: "0.25s",
                boxShadow: "2px 4px 10px black",
              }}
              type="submit"
            >
              Sign up
            </Button>
          </Box>
          <Image
            src={facebook}
            position={"absolute"}
            left={"3.5vw"}
            top={"72vh"}
            height={"22px"}
            _hover={{ cursor: "pointer" }}
          ></Image>
          <Image
            src={linkedin}
            position={"absolute"}
            height={"22px"}
            left={"10vw"}
            top={"72vh"}
            _hover={{ cursor: "pointer" }}
          ></Image>
          <Image
            src={google}
            position={"absolute"}
            height={"22px"}
            left={"16.7vw"}
            top={"72vh"}
            _hover={{ cursor: "pointer" }}
          ></Image>
        </Box>
      </form>
    </>
  );
};
export default Signup;
