import {
  Box,
  Input,
  Text,
  Button,
  Flex,
  Image,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import linkedin from "../assets/icons/linked in.png";
import google from "../assets/icons/google.png";
import stand from "../assets/img/stand.png";
import { Checkbox } from "@chakra-ui/react";
import logo from "../assets/img/logo.png";
import lines44 from "../assets/img/Line44.png";
import "../App.css";
import Background from "../Layout/VectorBackground";

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
      console.log(roleValue);
      const response = await axios.post("http://localhost:3001/signup", {
        ...values,
        Role: roleValue,
      });

      console.log(response);
      if (response.data.Status === "Success") {
        console.log("created successfully");
        navigate("/login");
      } else {
        alert(response.data.Error);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <Image src={logo} alt="" position={"absolute"} h={"92px"} w={"114px"} />
      <Image
        position={"fixed"}
        src={stand}
        alt=""
        top={"0"}
        height={"100vh"}
        width={"auto"}
        ml={"20vw"}
      ></Image>
      <Background />

      <form onSubmit={handleSubmit}>
        <Box
          bgColor={"#C1C1C1"}
          height={"80vh"}
          position={"absolute"}
          top={"10vh"}
          width={{ base: "80vw", lg: "20vw" }}
          right={{ base: "10vw", lg: "30vw" }}
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
            mt={"2vh"}
            height={"70vh"}
            width={{ base: "", lg: "20vw" }}
            position={"relative"}
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
              width={{ base: "90%", lg: "80%" }}
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
              width={{ base: "90%", lg: "80%" }}
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
              width={{ base: "90%", lg: "80%" }}
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
              width={{ base: "90%", lg: "80%" }}
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
            {/* <Flex position={"absolute"} left={"15%"} top={"47vh"}>
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
            </Flex> */}

            <RadioGroup
              position={"absolute"}
              left={"2vw"}
              top={"47vh"}
              // onChange={(value) => handleAccountTypeChange(value)}
              // value={values.AccountType}
            >
              <Flex gap={{base:"12rem",lg:"5rem"}}>
                <Radio
                  checked={values.IsSubscriber}
                  value="isSubscriber"
                  border={"1px solid black"}
                  colorScheme={"yellow"}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      IsSubscriber: e.target.checked,
                      IsProvider: false,
                    })
                  }
                >
                  User
                </Radio>
                <Radio
                  checked={values.IsProvider}
                  value="isProvider"
                  border={"1px solid black"}
                  colorScheme={"yellow"}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      IsProvider: e.target.checked,
                      IsSubscriber: false,
                    })
                  }
                >
                  Provider
                </Radio>
              </Flex>
            </RadioGroup>
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
                isRequired
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
              left={{ base: "20.39vw", lg: "4vw" }}
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
          <Link to={"https://www.facebook.com"}>
            <Image
              src={facebook}
              position={"absolute"}
              top={"72vh"}
              height={"22px"}
              _hover={{ cursor: "pointer" }}
            ></Image>
          </Link>
          <Image
            display={"flex"}
            src={linkedin}
            position={"absolute"}
            height={"22px"}
            left={{ base: "30vw", lg: "7vw" }}
            top={"72vh"}
            _hover={{ cursor: "pointer" }}
          ></Image>
          <Link to={"https://www.google.com"}>
            <Image
              src={google}
              position={"absolute"}
              height={"22px"}
              right={"0vh"}
              top={"72vh"}
              _hover={{ cursor: "pointer" }}
            ></Image>
          </Link>
        </Box>
      </form>
    </>
  );
};
export default Signup;
