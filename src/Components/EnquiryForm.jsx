import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
} from '@chakra-ui/react';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Name:', name);
    console.log('Query:', query);

    // Clear the form fields
    setName('');
    setQuery('');
  };

  return (
    <Box
      p={4}
      maxW="md"
      mx="auto"
      backgroundColor={'orange.700'}
      color={'white'}
      borderRadius={'10px'}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel fontFamily={'cursive'}>Name</FormLabel>
            <Input
              type="text"
              fontFamily={'cursive'}
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl id="query" isRequired>
            <FormLabel fontFamily={'cursive'}>
              What do you want to ask?
            </FormLabel>
            <Textarea
              value={query}
              onChange={e => setQuery(e.target.value)}
              fontFamily={'cursive'}
              placeholder="Enter your question or message"
            />
          </FormControl>

          <Button
            type="submit"
            size="lg"
            fontFamily="cursive"
            border="2px"
            textAlign="center"
            boxShadow="8px 5px black"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EnquiryForm;
