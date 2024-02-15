
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import "./navbar.css";
import NSwitch from "../NAV_SWITCH/NSwitch";
import { useMediaQuery } from '@chakra-ui/react'
// import { Fade } from "react-reveal";
// import { useLocation, useNavigate } from "react-router-dom";
import { pathNavigation } from "../../portfolio";
import { Link } from "react-scroll";
import MobileNavbar from "../MobileNavbar";

const Navbar: React.FC = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // if(location.pathname === "/") return <></> for future porpose 
  const [isMobileScreen] = useMediaQuery('(max-width: 444px)')


  return (
    <Flex
      m={"auto"}
      // mt={"20px"}
      w={{
        base: "90%",
        sm: "90%",
        md: "800px",
        lg: "900px",
        xl: "1100px",
        "2xl": "1400px",
      }}
      borderColor="black"
      justifyContent={"space-between"}
    >
      <Flex
        display={"flex"}
        justifyContent={{
          base: "flex-start",
          md: "center"
        }}
        alignItems={"center"}
        color="thistheme.text"
        w={"fit-content"}
        cursor={"pointer"}
      >
        <Box fontSize={{ base: "13px", sm: "25px" }}
        // className="entity"
        >
          &lt;{" "}
        </Box>
        <Box
          // onClick={() => {
          //   navigate("/");
          // }}
          fontSize={{ base: "13px", sm: "54px" }}
          className="mercy"
        >
          <Link to="/home" spy={true}
            smooth={true}
            duration={500} >
            {/* Codding / */}
            {" "}  Code First
            {" "}
            {/* <Image src={"./images/codingIsLife.png"} /> */}
          </Link>
        </Box>

        <Box fontSize={{ base: "13px", sm: "25px" }}
        // className="entity"
        >
          {" "}/&gt;
        </Box>
      </Flex>

      {
        isMobileScreen ? <MobileNavbar /> :
          <Flex alignItems={"center"} justifyContent={"flex-end"} w={"70%"}>

            {pathNavigation.map((item) => {
              console.log("item.path", item.path);
              return (
                item.active && (
                  <NSwitch
                    // isActive={location.pathname === item.path}
                    isActive={true}
                    active={item.active}
                    path={item.path}
                    key={item.id}
                    name={item.name}
                    id={item.id}
                  />
                )
              );
            })}
               <Button
            sx={{
              target: "_blank"
            }}
            bg={"thistheme.text"}
            color={"white"}
            _hover={{
              border: "1px ",
              bg: "thistheme.background",
              borderColor: "thistheme.text",
              color: "thistheme.text",
            }}
            size={"md"}
            onClick={() => {
              window.open("https://drive.google.com/file/d/1Ed3QC1wUNjKQS6HdP0nXgmggDRzHRZso/view?usp=drive_link", "_blank");
              setTimeout(() => {
                  window.location.href = "https://drive.google.com/uc?export=download&id=1Ed3QC1wUNjKQS6HdP0nXgmggDRzHRZso";
              }, 500); 
          }}
          >
 
            See Resume
          </Button>
          </Flex>
      }
    </Flex>
  );
};

export default Navbar;
