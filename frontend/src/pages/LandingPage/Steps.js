import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  
  
  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Steps() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            User Guide
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Keep the following points in mind while providing the feedback.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12} width={"100%"}>
          <Flex flexWrap="wrap" gridGap={10} justify="center">
            <Card
              heading={'Record'}
              Icon as={FcDonate}
              description={
                'If you dont have access to the internet while giving the review. So, geo-locational info available in the app can records the data and accepts the review within 6 hrs /12 hrs of the capture.'
              }
              href={'#'}
            />
            <Card
              heading={'Camera'}
              
              description={
                'You may be asked to provide access to device camera.'
              }
              href={'#'}
            />
            <Card
              heading={'Feedback'}
              
              description={
                'You can provide the feedback either by clicking on the utility cards section or by by selecting required image in current facility section.'
              }
              href={'#'}
            />
            <Card
              heading={'Form'}
             
              description={
                'After Clicking on the images will open a Feedback form, fill all the required section before submitting.'
              }
              href={'#'}
            />
            <Card
              heading={'Verification and updation'}
              description={
                'All the forms will be authenticated using pretrained Machine learning model, after the verifation the rating of the particular facilities will be updated depending on relevance of your feedabck.'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }