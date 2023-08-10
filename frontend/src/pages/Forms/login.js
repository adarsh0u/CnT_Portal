
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
import React, {useState,useEffect} from "react";
import login from '../../actions/user';
import {useDispatch,useSelector} from "react-redux";
  
  export default function Login({currentId,setCurrentId}) {
    const [user, setUser] = useState({
        email:"",
        password:""
        });
        const dispatch=useDispatch();
        const post = useSelector((state) => (currentId ? state.user.find((message) => message._id === currentId) : null));


        useEffect(() => {
          if (post) setUser(post);
        }, [post]);
        
      const handleChange = (e) =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value,
        })
    }

     const login = async(e) =>{
      // e.preventDefault();
      dispatch(login(user));    
      console.log(user); 
    }
    const [isChecked, setIsChecked] = useState(false);

      function handleCheckboxChange() {
        setIsChecked(!isChecked);
      }
      
    
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            {
              isChecked?
              <Heading>Admin Sign In</Heading>:
              <Heading>Student Sign In</Heading>
            }
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={user.email} 
                onChange={handleChange} required/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" value={user.password} 
                required onChange={handleChange}/>
              </FormControl>
              <Stack spacing={15}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox 
                  value={isChecked} onChange={handleCheckboxChange}>As Admin</Checkbox>
                  
                  <Link color={'blue.400'} href='/login/forgotpassword'>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'green.400'}
                  onClick={login}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Sign in
                </Button>
                <Link href={'/register'} textAlign='center'>Register here</Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
