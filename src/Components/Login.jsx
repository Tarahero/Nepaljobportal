//make a react component name layout.mm

import {
  Flex,
  Image,
  Box,
  Text,
  Input,
  Button,
  Checkbox,
  Show,
} from "@chakra-ui/react";
import runningman from "../assets/img/runningMan.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import vector from "../assets/img/vector.png";
import logo from "../assets/img/logo.png";
import Background from "../Layout/VectorBackground";

const Login = () => {
  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/login", values);
      console.log(res);
      if (res.data.Status === "Success") {
        console.log("logged in successfully");
        console.log(res.data.Role);
        console.log(res.data.isLoggedIn);

        if (res.data.Role === 1) {
          navigate("/");
        } else {
          navigate("/providerdashboard");
        }
      } else {
        alert(res.data.Error);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <Image
        src={runningman}
        height={{
          base: "1",
          md: "20vh",
          lg: "100vh",
        }}
        width={"auto"}
        position={"absolute"}
      />
      <Background />

      <form onSubmit={handleSubmit}>
        <Box
          height={{
            base: "45vh",
            lg: "55vh",
          }}
          width={{
            base: "80vw",
            lg: "30vw",
          }}
          bgColor={"#DDDBCB"}
          border={"1px solid black"}
          borderRadius={"30px"}
          boxShadow={"5px 1px 25px "}
          position={"absolute"}
          top={"35vh"}
          right={{
            base: "10vw",
            lg: "25vw",
          }}
          transition={"0.25s"}
        >
          <Text
            textAlign={"center"}
            mt={"20px"}
            fontFamily={"Times New Roman"}
            fontSize={"larger"}
            letterSpacing={2}
            fontWeight={600}
          >
            Login Panel
          </Text>
          <Text
            display={"flex"}
            justifyContent={"center"}
            mt={"5vh"}
            fontFamily={"serif"}
          >
            Username
          </Text>
          <Input
            isRequired
            backgroundColor={"white"}
            border={"1px solid"}
            position={"absolute"}
            left={{ base: "20%", lg: "25%" }}
            borderRadius={"5px"}
            height={"25px"}
            width={{
              base: "50vw",
              lg: "15vw",
            }}
            onChange={(e) => setValues({ ...values, Email: e.target.value })}
          ></Input>
          <Text
            display={"flex"}
            justifyContent={"center"}
            mt={"35px"}
            fontFamily={"serif"}
          >
            Password
          </Text>
          <Input
            isRequired
            type={!Show? "text": "password"}
            border={"1px solid"}
            position={"relative"}
            left={{ base: "20%", lg: "25%" }}
            borderRadius={"5px"}
            height={"25px"}
            width={{
              base: "50vw",
              lg: "15vw",
            }}
            onChange={(e) => setValues({ ...values, Password: e.target.value })}
          ></Input>
          <Flex justifyContent={"center"} mt={"40px"}>
            <Button
              _hover={{ borderColor: "black", boxShadow: "none" }}
              bgColor={"#828282"}
              width={"10vw"}
              color={"white"}
              border={"1px solid"}
              height={"25px"}
              borderRadius={"5px"}
              cursor={"pointer"}
              type="submit"
              fontSize={"16px"}
            >
              Login
            </Button>
          </Flex>
          <Flex justifyContent={"center"} mt={"10px"}>
            <Checkbox
              border={"1px solid"}
              h={"18px"}
              mt={"4px"}
              colorScheme="yellow"
              ml={"-34px"}
            ></Checkbox>

            <Text ml={"10px"}>Keep me logged In</Text>
          </Flex>

          <Link to="/signup">
            <Flex justifyContent={"center"} mt={"20px"} cursor={"pointer"}>
              <Text color={"#a59b47"} fontFamily={"serif"}>
                Don't have an account ?
              </Text>
              <Text ml={"10px"} fontSize={"medium"}>
                Sign up
              </Text>
            </Flex>
          </Link>
        </Box>
      </form>
    </>
  );
};

export default Login;
