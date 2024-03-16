//make a react component name layout.mm

import {
  Flex,
  Image,
  Box,
  Text,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import runningman from "../assets/img/runningMan.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import vector from "../assets/img/vector.png";
import logo from "../assets/img/logo.png";

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
        navigate("/");
      } else {
        alert(res.data.Error);
      }
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
      <Image
        src={runningman}
        height={"100vh"}
        width={"auto"}
        position={"absolute"}
      />
      <Image
        src={logo}
        alt=""
        position={"relative"}
        left={"0%"}
        height={"100%"}
        width={"114px"}
      />

      <form onSubmit={handleSubmit}>
        <Box
          height={"400px"}
          width={"440px"}
          bgColor={"#DDDBCB"}
          border={"1px solid black"}
          borderRadius={"30px"}
          boxShadow={"5px 1px 25px "}
          position={"absolute"}
          top={"230px"}
          right={"270px"}
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
            textAlign={"start"}
            mt={"50px"}
            marginLeft={"115px"}
            fontFamily={"serif"}
          >
            Username
          </Text>
          <Input
            backgroundColor={"white"}
            border={"1px solid"}
            position={"absolute"}
            left={"25%"}
            borderRadius={"5px"}
            height={"25px"}
            width={"15vw"}
            onChange={(e) => setValues({ ...values, Email: e.target.value })}
          ></Input>
          <Text
            textAlign={"start"}
            mt={"35px"}
            marginLeft={"115px"}
            fontFamily={"serif"}
          >
            Password
          </Text>
          <Input
            backgroundColor={"white"}
            border={"1px solid"}
            position={"absolute"}
            left={"25%"}
            borderRadius={"5px"}
            height={"25px"}
            width={"15vw"}
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
