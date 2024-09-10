import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box as="footer" bg="gray" color="black" p={4}>
      <Stack spacing={4} align="center">
        {/* Social Media Icons */}
        <Stack direction="row" spacing={6}>
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            color="black"
            _hover={{ color: 'gray.600' }}
          />
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            color="black"
            _hover={{ color: 'gray.600' }}
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            color="black"
            _hover={{ color: 'gray.600' }}
          />
        </Stack>

        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          colorScheme="blackAlpha"
          variant="outline"
          aria-label="Scroll to top"
          borderRadius="full"
          p={3}
          size={useBreakpointValue({ base: 'sm', md: 'md' })}
        >
          <FaArrowUp />
        </Button>
        <Text fontFamily={'inherit'} color={'white'}>
          © All rights reserved{' '}
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
