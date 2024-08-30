import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const FAQs = () => {
  return (
    <div>
      <Box bgColor="black" p="4rem">
        <Heading color="#FBFBFB" fontWeight={600}>
          FAQ’s
        </Heading>
        <Box bgColor="black" py={8}>
          <Accordion defaultIndex={[0]} allowMultiple color="#ffff">
            <AccordionItem
              borderTop="0px solid #E8155D"
              borderBottom="1px solid #E8155D"
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontSize="25px">
                    I Have An App Idea, What Do I Do Next?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="#9F9F9F" fontSize="20px">
                You should start the App Ideation process with the most accurate
                preparation of your concept. Because you just think you have a
                wonderful idea of the app for iPhone or Android. In fact, all
                you have right now is just a dream and not a concrete one.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              borderTop="0px solid #E8155D"
              borderBottom="1px solid #E8155D"
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontSize="25px">
                    Can I Hire WDI To Just Do The Prototype For My Project?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              borderTop="0px solid #E8155D"
              borderBottom="1px solid #E8155D"
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontSize="25px">
                    I Have An App Idea, What Do I Do Next?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              borderTop="0px solid #E8155D"
              borderBottom="1px solid #E8155D"
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontSize="25px">
                    I Have An App Idea, What Do I Do Next?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              borderTop="0px solid #E8155D"
              borderBottom="0px solid black"
              fontSize="25px"
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontSize="25px">
                    I Have An App Idea, What Do I Do Next?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </div>
  );
};

export default FAQs;
