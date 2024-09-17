import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manage the popup state
  const cancelRef = React.useRef();

  const handleSubmit = e => {
    e.preventDefault();

    // Handle form submission (e.g., send data to a server)
    console.log('Name:', name);
    console.log('Query:', query);

    // Clear the form fields
    setName('');
    setQuery('');

    // Open the popup after submission
    onOpen();
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
              What do you want to ask?!
            </FormLabel>
            <Textarea
              value={query}
              onChange={e => setQuery(e.target.value)}
              fontFamily={'cursive'}
              placeholder="Enter your question or message"
            />
          </FormControl>

          <Button
            type="submit" // Keep the form submit type
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

      {/* Popup (AlertDialog) */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        backgroundColor={'orange.700'}
        color={'white'}
      >
        <AlertDialogOverlay backdropFilter="blur(10px) ">
          {' '}
          {/* Apply background blur */}
          <AlertDialogContent fontFamily={'cursive'} boxShadow="8px 5px black">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Submission Successful
            </AlertDialogHeader>

            <AlertDialogBody>
              Thank yoy for connecting, We will reach out to you shortly.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                border="2px"
                textAlign="center"
                boxShadow="8px 5px black"
              >
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default EnquiryForm;
