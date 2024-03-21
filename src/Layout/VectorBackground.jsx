import vector from "../assets/img/vector.png";
import { Image } from "@chakra-ui/react";

const Background = () => {
  return <Image src={vector} position={"fixed"} right={"0"} display={{base: "none",md:"block"}} ></Image>;
};
export default Background;
