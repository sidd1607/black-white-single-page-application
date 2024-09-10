import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import EnquiryForm from './EnquiryForm';

const New = () => {
  return (
    <Box
      backgroundColor={'black'}
      backgroundImage="url('https://gifdb.com/images/high/black-background-tuning-tecdf32yo7hfezz8.gif')"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      py={300}
    >
      <Text
        fontSize={['2xl', '3xl']}
        mb={4}
        fontFamily="cursive"
        textAlign={'center'}
      >
        <Text as="span" color="white">
          Lets
        </Text>
        <Text as="span" color="orange.500">
          {' '}
          Connect!
        </Text>
      </Text>
      <EnquiryForm />
    </Box>
  );
};

export default New;
