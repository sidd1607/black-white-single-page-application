import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const Main = () => {
  return (
    <Box pt={160} pb={20}>
      <Box
        py={20}
        mb={30}
        mt={-40}
        textsize={'large'}
        fontSize={22}
        w={500}
        border={'2px'}
        textAlign={'center'}
        boxShadow={'12px 8px black'}
        cursor={'pointer'}
        width={'100'}
        backgroundImage="url('https://archeyes.com/wp-content/uploads/2016/04/London_40_animation3_2048.gif')"
      >
        {' '}
        <br /> <br /> <br /> <br /> <br /> <br />{' '}
      </Box>
      <Heading
        as="h3"
        size="xl"
        fontFamily={'cursive'}
        textAlign={'center'}
        pt={22}
        color={'orange.600'}
      >
        Welcome!
      </Heading>
      <Text
        fontFamily={'cursive'}
        textAlign={'center'}
        p={30}
        m={4}
        fontSize={'larger'}
      >
        Welcome to the 2 Dimantional world of websites this is a dummy website
        which is created because my creator wants to learn Chakra ui, <br />
        He is learning it and he got to know that chakra UI is same as Tailwind
        css!
      </Text>
      <ButtonGroup>
        <Button
          alignContent={'center'}
          fontFamily={'cursive'}
          border={'2px'}
          textAlign={'center'}
          boxShadow={'8px 5px black'}
          ml={[36, 28, 720]}
          mb={50}
          _hover={{
            transform: 'scale(1.1)', // Zoom in on hover
            transition: 'transform 0.2s ease-in-out', // Smooth transition
          }}
          _active={{
            transform: 'scale(0.95)', // Slight zoom out on click
            transition: 'transform 0.1s ease-in-out',
          }}
        >
          Click ME
        </Button>
      </ButtonGroup>
      <Box
        backgroundColor="black"
        backgroundImage="url('https://i.pinimg.com/originals/35/2b/5c/352b5c8fd79b5a19a69ad3b45b1823a4.gif')"
        // backgroundImage="url('https://giffiles.alphacoders.com/111/111521.gif')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        w={'100'}
      >
        {' '}
        . <br /> . <br /> . <br /> .
      </Box>
    </Box>
  );
};

export default Main;
