import { Flex, Box, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';

export const BannerO = () => {
  return (
    <>
      <Flex
        direction={['column', 'column', 'row']} // Column layout on small screens, row on larger
        align="center"
        justify="space-between"
        p={[4, 6, 8]} // Responsive padding
        gap={[4, 6, 8]} // Responsive gap between image and text
      >
        {/* Left side with the image */}
        <Box flex="1" textAlign="center" mb={[4, 6, 0]}>
          {' '}
          {/* Center image on small screens */}
          <Image
            src="https://as2.ftcdn.net/v2/jpg/06/52/55/29/1000_F_652552943_pRKWXZZpRZLYNpYbD0cC2KybvFGXd0NG.jpg" // Replace with your image URL
            alt="2D World"
            h={['200px', '300px', '340px']} // Responsive height
            objectFit="cover" // Ensures image covers the container
          />
        </Box>

        {/* Right side with the paragraph and button */}
        <Box
          flex="1"
          textAlign={['center', 'left']}
          p={[4, 6]} /* Padding for better spacing on small screens */
        >
          <Text fontSize={['2xl', '3xl']} mb={4} fontFamily="cursive">
            <Text as="span" color="black">
              About
            </Text>
            <Text as="span" color="orange.500">
              {' '}
              Us
            </Text>
          </Text>
          <Text fontSize={['md', 'lg']} mb={4} fontFamily="cursive">
            Step into the vibrant world of 2D, where imagination meets limitless
            creativity. In this stunning 2D universe, we bring flat designs to
            life, one pixel at a time, crafting experiences that captivate and
            inspire. Explore the beauty of simplicity, where every line and
            shape tells a unique story waiting to be discovered.
          </Text>
          <Button
            size="lg"
            fontFamily="cursive"
            border="2px"
            textAlign="center"
            boxShadow="8px 5px black"
            _hover={{
              transform: 'scale(1.1)', // Zoom in on hover
              transition: 'transform 0.2s ease-in-out', // Smooth transition
            }}
          >
            Join Us
          </Button>
        </Box>
      </Flex>
      <Box
        backgroundColor="black"
        // backgroundImage="url('https://giffiles.alphacoders.com/111/111521.gif')"

        backgroundImage="url('https://i.pinimg.com/originals/35/2b/5c/352b5c8fd79b5a19a69ad3b45b1823a4.gif')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        w={'100'}
        mb={0}
      >
        {' '}
        . <br /> . <br /> . <br /> .
      </Box>
    </>
  );
};
