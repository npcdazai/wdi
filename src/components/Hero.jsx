import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import banner from "../assets/images/banner.png";
import whiteCircle from "../assets/white.png";
import pinkCircle from "../assets/pink.png";

const Hero = () => {
  return (
    <div>
      <Box bgColor="black" h="70vh">
        <Flex
          justifyContent="space-between"
          spacing={4}
          alignItems="center"
          px={"4.4rem"}
          py={5}
        >
          <HStack wrap="wrap" w={"60%"} gap={"2rem"}>
            <Heading
              color="#e8155d"
              lineHeight="40.88px"
              fontWeight={600}
              fontSize="40px"
            >
              Develop AI-Powered solutions with the leading mobile
            </Heading>
            <Text
              color="#FFFFFF"
              fontWeight={400}
              fontSize="22px"
              lineHeight="23.63px"
            >
              Develop AI-Powered solutions with the leading mobile solutions
              with the leading mobile
            </Text>
            <Box display="flex" flexDirection="row" position="relative" alignItems="center">
              <Box
                position="relative"
                display="flex"
                alignItems="center"
                w={"100%"}
              >
                <Image
                  src={whiteCircle}
                  w={"158.06px"}
                  h={"158.06px"}
                  left={"0px"}
                  position="relative"
                />
                <Box
                  textAlign="center"
                  color="#e8155d"
                  position="absolute"
                  left="30px"
                >
                  <Text fontSize="26px" fontWeight="600">
                    200+
                  </Text>
                  <br />
                  <Text color="white" fontSize="16px" fontWeight="500">
                    Happy Client
                  </Text>
                </Box>
              </Box>
              <Box
                position="absolute"
                display="flex"
                alignItems="center"
                w={"100%"}
                left="148px"
              >
                <Image
                  src={pinkCircle}
                  w={"158.06px"}
                  h={"158.06px"}
                  left={"0px"}
                  position="relative"
                />
                <Box
                  textAlign="center"
                  color="#e8155d"
                  position="absolute"
                  left="30px"
                >
                  <Text fontSize="26px" fontWeight="600">
                    200+
                  </Text>
                  <br />
                  <Text color="white" fontSize="16px" fontWeight="500">
                    Happy Client
                  </Text>
                </Box>
              </Box>
              <Box
                position="relative"
                display="flex"
                alignItems="center"
                w={"100%"}
                left="139px"
              >
                <Image
                  src={whiteCircle}
                  w={"158.06px"}
                  h={"158.06px"}
                  left={"0px"}
                  position="relative"
                />
                <Box
                  textAlign="center"
                  color="#e8155d"
                  position="absolute"
                  left="30px"
                >
                  <Text fontSize="26px" fontWeight="600">
                    200+
                  </Text>
                  <br />
                  <Text color="white" fontSize="16px" fontWeight="500">
                    Happy Client
                  </Text>
                </Box>
              </Box>
              <Box
                position="relative"
                display="flex"
                alignItems="center"
                w={"100%"}
                left="130px"
              >
                <Image
                  src={pinkCircle}
                  w={"158.06px"}
                  h={"158.06px"}
                  left={"0px"}
                  position="relative"
                />
                <Box
                  textAlign="center"
                  color="#e8155d"
                  position="absolute"
                  left="30px"
                >
                  <Text fontSize="26px" fontWeight="600">
                    200+
                  </Text>
                  <br />
                  <Text color="white" fontSize="16px" fontWeight="500">
                    Happy Client
                  </Text>
                </Box>
              </Box>
            </Box>
          </HStack>
          <Box>
            <Image src={banner} h="300px" w="326px" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
