import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const Banner = () => {
  return (
    <Box
      backgroundImage="url('https://img.freepik.com/free-vector/hand-drawn-zoom-effect-background_23-2149742823.jpg?t=st=1725864686~exp=1725868286~hmac=6e4cbb54d55d03a5b69d0b0b3a873a1e20cfa24ffd93477a2be2c52bba318423&w=996')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h={['400px', '600px', '800px']} // Responsive height
      mx={[2, 4, 6]} // Responsive horizontal margin
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box textAlign="center" px={[4, 6, 8]}>
        <Heading
          as="h3"
          size={['lg', 'xl', '2xl']} // Responsive font size
          fontFamily="cursive"
          pt={[10, 20, 32]} // Responsive padding top
          pb={[6, 12, 22]} // Responsive padding bottom
        >
          <Text as="span" color="black">
            Stop thinking,
          </Text>
          <Text as="span" color="orange.500">
            {' '}
            Join us ASAP!
          </Text>
        </Heading>
        <Button
          p={[4, 6, 8]} // Responsive padding
          fontFamily="cursive"
          border="2px"
          textAlign="center"
          boxShadow="8px 5px black"
          mt={[4, 8, 12]} // Responsive margin top
          mb={[6, 12, 16]} // Responsive margin bottom
          _hover={{
            transform: 'scale(1.1)', // Zoom in on hover
            transition: 'transform 0.2s ease-in-out', // Smooth transition
          }}
        >
          Join us!
        </Button>
      </Box>
    </Box>
  );
};
