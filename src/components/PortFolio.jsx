import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import qualityAssurance from "../assets/qualityAssurance.png";
import costEffective from "../assets/costEffective.png";
import Company from "./Companys"
const PortFolio = () => {
  
  return (
    <div>
      <Box bgColor="black" display="flex" flexDirection="column" gap={8}>
        <Heading  textAlign={"center"} fontWeight={600} fontSize="40px" color="#FBFBFB">
          PortFolio
        </Heading>
        <Company/>
        <Box
          p={"4rem"}
          bgColor="black"
          display="flex"
          flexDirection="column"
          // gap={8}
        >
          <Box display="flex" flexDirection="column" gap={8}>
            <Heading fontWeight={600} fontSize="40px" color="#FBFBFB">
              Inventing App For Superior Apps
            </Heading>
            <Text
              color="#F0F0F0"
              fontWeight={400}
              fontSize={"23px"}
              lineHeight={"37.5px"}
            >
              Software developers can create tailored solutions that align with
              the specific needs and goals of the company. Whether it's a
              customized application, website, or internal software, developers
              can craft solutions that streamline processes and enhance
              efficiency.{" "}
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            gap={2}
            w="100%"
          >
            <Box
              p={8}
              gap={3}
              w="25%"
              h={"431.4px"}
              bgColor="#292929"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Image
                src={costEffective}
                h={"77.19px"}
                w={"77.19px"}
                alt="Quality Assucrance"
              />
              <Heading color={"#FFFFFF"} fontWeight={600} fontSize="21.61px">
                Cost-Effective Solutions
              </Heading>
              <Text fontWeight={400} fontSize={"16.82px"} color="#EBEBEB99">
                Quality Assurance (QA) is a systematic process ensuring that
                products or services meet specified standards. In software
                development, QA involves rigorous testing, continuous
                monitoring, and adherence to defined procedures
              </Text>
            </Box>
            <Box
              p={8}
              gap={3}
              w="25%"
              h={"431.4px"}
              bgColor="#292929"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Image
                src={costEffective}
                h={"77.19px"}
                w={"77.19px"}
                alt="Quality Assucrance"
              />
              <Heading color={"#FFFFFF"} fontWeight={600} fontSize="21.61px">
                On-Time Delivery
              </Heading>
              <Text fontWeight={400} fontSize={"16.82px"} color="#EBEBEB99">
                Quality Assurance (QA) is a systematic process ensuring that
                products or services meet specified standards. In software
                development, QA involves rigorous testing, continuous
                monitoring, and adherence to defined procedures
              </Text>
            </Box>
            <Box
              p={8}
              gap={3}
              w="25%"
              h={"431.4px"}
              bgColor="#292929"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Image
                src={costEffective}
                h={"77.19px"}
                w={"77.19px"}
                alt="Quality Assucrance"
              />
              <Heading color={"#FFFFFF"} fontWeight={600} fontSize="21.61px">
                On-Time Delivery
              </Heading>
              <Text fontWeight={400} fontSize={"16.82px"} color="#EBEBEB99">
                Quality Assurance (QA) is a systematic process ensuring that
                products or services meet specified standards. In software
                development, QA involves rigorous testing, continuous
                monitoring, and adherence to defined procedures
              </Text>
            </Box>
            <Box
              p={8}
              gap={3}
              w="25%"
              h={"431.4px"}
              bgColor="#292929"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Image
                src={costEffective}
                h={"77.19px"}
                w={"77.19px"}
                alt="Quality Assucrance"
              />
              <Heading color={"#FFFFFF"} fontWeight={600} fontSize="21.61px">
                Excellent Customer Support
              </Heading>
              <Text fontWeight={400} fontSize={"16.82px"} color="#EBEBEB99">
                Quality Assurance (QA) is a systematic process ensuring that
                products or services meet specified standards. In software
                development, QA involves rigorous testing, continuous
                monitoring, and adherence to defined procedures
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PortFolio;
