import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../assets/banner.png";
import uparrow from "../assets/uparrow.png";
import service from "../assets/service.png";
import { NavLink } from "react-router-dom";
import CustomButton from "../components/ui/Button";
import { commonStyles } from "../styles/commonStyles";

const ServiceSection = () => {
  return (
    <Box
      bgColor="black"
      p={"4rem"}
      display="flex"
      alignItems="center"
      gap={5}
      flexDirection="column"
    >
      <Heading fontSize="30px" fontWeight={600} color="white" pb={8}>
        What do we do exactly?
      </Heading>
      <Box display="flex" justifyContent="space-between" h="100%" gap={4}>
        <Box
          display="flex"
          w="70%"
          justifyContent="space-between"
          alignItems="center"
          bgColor="#0F0F0F"
          gap={5}
          {...commonStyles}
          borderRadius="9px"
        >
          <Box
            w="50%"
            display="flex"
            flexDirection="column"
            h="283px"
            p={8}
            gap={4}
          >
            <Heading color="#fff" fontWeight={600}>
              Mobile App Development
            </Heading>
            <Text color="#C4C4C4">
              Transforming concepts into captivating mobile experiences with our
              expert app development services.{" "}
            </Text>
            <NavLink>
              <CustomButton Context={"Let’s build an App"} />
            </NavLink>
          </Box>
          <Image src={img} h="261.15px" w="347.55px" />
        </Box>
        <Box
          display="flex"
          bgColor="#0F0F0F"
          w="30%"
          h={"290px"}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box p={8}>
            <Image src={service} w="48px" h={"37.41px"} />
          </Box>
          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            h="283px"
            px={8}
            gap={4}
            {...commonStyles}
            borderRadius="9px"
          >
            <Heading color="#fff" fontWeight={600}>
              Hybrid App Development
            </Heading>
            <Text color="#C4C4C4">
              Transforming concepts into captivating mobile experiences with our
              expert app development services.{" "}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" gap={3}>
        <Box
          display="flex"
          bgColor="#0F0F0F"
          w="33%"
          h={"290px"}
          flexDirection="column"
          justifyContent="space-between"
          {...commonStyles}
          borderRadius="9px"
        >
          <Box p={8}>
            <Image src={service} w="48px" h={"37.41px"} />
          </Box>
          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            h="283px"
            px={8}
            gap={4}
            {...commonStyles}
          >
            <Heading color="#fff" fontWeight={600}>
              iOS App Development
            </Heading>
            <Text color="#C4C4C4">
              Transforming concepts into captivating mobile experiences with our
              expert App developments Service{" "}
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          bgColor="#0F0F0F"
          w="33%"
          h={"290px"}
          flexDirection="column"
          justifyContent="space-between"
          {...commonStyles}
          borderRadius="9px"
        >
          <Box p={8}>
            <Image src={service} w="48px" h={"37.41px"} />
          </Box>
          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            h="283px"
            px={8}
            gap={4}
            {...commonStyles}
          >
            <Heading color="#fff" fontWeight={600}>
              Android App Development
            </Heading>
            <Text color="#C4C4C4">
              Transforming concepts into captivating mobile experiences with our
              expert App developments Service{" "}
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          bgColor="#0F0F0F"
          w="33%"
          h={"290px"}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box p={8}>
            <Image src={service} w="48px" h={"37.41px"} />
          </Box>
          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            h="283px"
            px={8}
            gap={4}
            {...commonStyles}
            borderRadius="9px"
          >
            <Heading color="#fff" fontWeight={600}>
              AI/ML Applications
            </Heading>
            <Text color="#C4C4C4">
              Transforming concepts into captivating mobile experiences with our
              expert App developments Service{" "}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceSection;
