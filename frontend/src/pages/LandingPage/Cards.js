import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Button,
  HStack,
  Popover,
  PopoverBody,
  PopoverTrigger, PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  useDisclosure
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Chart from '../../components/Chart';
import ChartModal from '../../components/Model';
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

const data = {
  isNew: true,
  imageURL: images[1],
  name: 'Academic Block',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}
  //   },
  //   {
  //     isNew: true,
  //     imageURL:images[1],
  //     name: 'Wayfarer Classic',
  //     price: 4.5,
  //     rating: 4.2,
  //     numReviews: 34,
  //   },
  //   {
  //     isNew: true,
  //     imageURL:images[1],
  //     name: 'Wayfarer Classic',
  //     price: 4.5,
  //     rating: 4.2,
  //     numReviews: 34,
  //   }
  ;

export function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center" flexWrap={'nowrap'}>
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

export default function Cards() {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            onClick={() => navigate('/give-rating')}
          />


          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {data.name}
              </Box>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center" direction={'row'}>
              <HStack>
                <Rating rating={data.rating} numReviews={data.numReviews} />

                <Button
                  color={'white.100'}
                  onClick={onOpen}
                >View More</Button>
              </HStack>
              {/* <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                {data.price.toFixed(2)}
              </Box> */}
            </Flex>
          </Box>
        </Box>
      </Flex>
      <ChartModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}

