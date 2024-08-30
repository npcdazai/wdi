// import banner from "../../assets/handvector.png";
// import heart from "../../assets/health.png";
// import React, { useState } from "react";
// import { ChakraProvider, Box, Center, Text } from "@chakra-ui/react";
// import { motion } from "framer-motion";

// function App() {
//   const [selectedBox, setSelectedBox] = useState(null);

//   const backgrounds = {
//     box1: banner,
//     box2: heart,
//     box3: banner,
//   };

//   const getBoxSize = (box) => {
//     return selectedBox === box ? "200px" : "150px";
//   };

//   const getBoxHeight = (box) => {
//     return selectedBox === box ? "250px" : "200px";
//   };

//   return (
//     <ChakraProvider>
//       <Box
//         h="100vh"
//         bgImage={selectedBox ? backgrounds[selectedBox] : "url('/path/to/default.jpg')"}
//         bgSize="cover"
//         bgPosition="center"
//       >
//         <Center h="100%">
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             gap="4"
//           >
//             {/* Box 1 */}
//             <motion.div
//               layout
//               transition={{ type: "twwen", stiffness: 500, damping: 50 }}
//             >
//               <Box
//                 w={getBoxSize("box1")}
//                 h={getBoxHeight("box1")}
//                 bg="red.500"
//                 onClick={() => setSelectedBox("box1")}
//                 cursor="pointer"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 borderRadius="md"
//                 shadow="lg"
//                 bgGradient="linear(to-b, red.300, red.600)"
//                 transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
//                 _hover={{
//                   transform: "scale(1.05)",
//                   boxShadow: "2xl",
//                 }}
//               >
//                 <Text fontSize="2xl" color="white">RG</Text>
//               </Box>
//             </motion.div>

//             {/* Box 2 */}
//             <motion.div
//               layout
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             >
//               <Box
//                 w={getBoxSize("box2")}
//                 h={getBoxHeight("box2")}
//                 bg="blue.500"
//                 onClick={() => setSelectedBox("box2")}
//                 cursor="pointer"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 borderRadius="md"
//                 shadow="lg"
//                 bgGradient="linear(to-b, blue.300, blue.600)"
//                 transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
//                 _hover={{
//                   transform: "scale(1.05)",
//                   boxShadow: "2xl",
//                 }}
//               >
//                 <Text fontSize="2xl" color="white">🏠</Text>
//               </Box>
//             </motion.div>

//             {/* Box 3 */}
//             <motion.div
//               layout
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             >
//               <Box
//                 w={getBoxSize("box3")}
//                 h={getBoxHeight("box3")}
//                 bg="purple.500"
//                 onClick={() => setSelectedBox("box3")}
//                 cursor="pointer"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 borderRadius="md"
//                 shadow="lg"
//                 bgGradient="linear(to-b, purple.300, purple.600)"
//                 transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
//                 _hover={{
//                   transform: "scale(1.05)",
//                   boxShadow: "2xl",
//                 }}
//               >
//                 <Text fontSize="2xl" color="white">🎮</Text>
//               </Box>
//             </motion.div>
//           </Box>
//         </Center>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;

import banner from "../../assets/handvector.png";
import heart from "../../assets/health.png";
import React, { useState } from "react";
import { ChakraProvider, Box, Center, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [selectedBox, setSelectedBox] = useState(null);

  const backgrounds = {
    box1: `url(${banner})`,
    box2: `url(${heart})`,
    box3: `url(${banner})`,
  };

  const getBoxSize = (box) => (selectedBox === box ? "200px" : "150px");
  const getBoxHeight = (box) => (selectedBox === box ? "250px" : "200px");

  return (
    <ChakraProvider>
      <Box position="relative" h="100vh">
        <AnimatePresence>
          {selectedBox && (
            <motion.div
              key={selectedBox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: backgrounds[selectedBox],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
        </AnimatePresence>
        <Center h="100%" position="relative">
          <Box display="flex" justifyContent="center" alignItems="center" gap="4">
            {/* Box 1 */}
            <motion.div
              layout
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Box
                w={getBoxSize("box1")}
                h={getBoxHeight("box1")}
                bg="red.500"
                onClick={() => setSelectedBox("box1")}
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                shadow="lg"
                bgGradient="linear(to-b, red.300, red.600)"
                transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              >
                <Text fontSize="2xl" color="white">RG</Text>
              </Box>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              layout
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Box
                w={getBoxSize("box2")}
                h={getBoxHeight("box2")}
                bg="blue.500"
                onClick={() => setSelectedBox("box2")}
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                shadow="lg"
                bgGradient="linear(to-b, blue.300, blue.600)"
                transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              >
                <Text fontSize="2xl" color="white">🏠</Text>
              </Box>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              layout
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Box
                w={getBoxSize("box3")}
                h={getBoxHeight("box3")}
                bg="purple.500"
                onClick={() => setSelectedBox("box3")}
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                shadow="lg"
                bgGradient="linear(to-b, purple.300, purple.600)"
                transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              >
                <Text fontSize="2xl" color="white">🎮</Text>
              </Box>
            </motion.div>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
