import { Flex } from '@chakra-ui/react';
import React from 'react';

const Maps = () => {
  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'} m={30}>
        <iframe
          width="1000"
          height={[300, 800, 1000]}
          src="https://www.youtube.com/embed/whLqN3Vh0Iw?si=wWBrpM7ZUvAw4Q82"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Flex>
    </>
  );
};

export default Maps;
