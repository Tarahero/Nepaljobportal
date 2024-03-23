import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;
  const navigate =useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001");
        if (response.data.Status === "Success") {
          setAuth(true);
          setName(response.data.name)
        } else {
          setAuth(false);
          
          console.log(response.data.Error);
        }
      } catch (error) {
        console.log("failed making ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {" "}
      <Box
        border={"1px solid"}
        borderRadius={"10px"}
        position={"absolute"}
        bgColor={"#faf9f0"}
        top={"60px"}
        h={"85vh"}
        w={"35vw"}
        ml={"522px"}
        t={"100px"}
      >
        <Text
          marginLeft={"20vw"}
          color={"black"}
          fontSize={"24px"}
          letterSpacing={2}
          mt={"10px"}
        >
          Portfolio{" "}
        </Text>
        <Box
          backgroundColor={"black"}
          h={"1px"}
          w={"290px"}
          marginLeft={"200px"}
        ></Box>
        {auth ? (
          <Text marginLeft={"17.5vw"} color={"black"}>Name: {name}</Text>
          ) : (
          <Text marginLeft={"17.5vw"} color={"black"}>Login to view </Text>
          
        )}

        <Button
          bgColor={"#D9D9D9"}
          border={"1px solid"}
          borderRadius={"3px"}
          boxShadow={"2px 3px 5px grey"}
          h={"40px"}
          position={"absolute"}
          left={"475px"}
          top={"610px"}
        >
          {" "}
          Hire Me
        </Button>
      </Box>
      <Box
        border={"1px solid #414141"}
        height={"190px"}
        width={"190px"}
        position={"absolute"}
        left={"470px"}
        top={"10px"}
        borderRadius={"100px"}
        backgroundColor={"#D9D9D9"}
      ></Box>{" "}
    </>
  );
};

export default UserProfile;
