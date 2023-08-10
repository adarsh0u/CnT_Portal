
import React, { useState } from 'react';
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    Link,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';


export default function RatingForm() {
    const toast = useToast();
    const [user, setUser] = useState({
        email: "",
        fname: "",
        lname: "",
        password: "",
        country: "",
        state: "",
        street: "",
        city: "",
        website: "",
        about: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(e.target);
        setUser({
            ...user,
            [name]: value,
        })
    }
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <>
            <div style={{ padding: "20px 100px" }}>
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    Give Rating
                </Heading>
                <Flex>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="firstname" fontWeight={'normal'}>
                            First name
                        </FormLabel>
                        <Input id="firstname"
                            placeholder="First name"
                            value={user.fname}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="lastname" fontWeight={'normal'}>
                            Last name
                        </FormLabel>
                        <Input id="lastname"
                            placeholder="Last name"
                            value={user.lname}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Flex>

                <FormControl mt="2%">
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                        Email address
                    </FormLabel>
                    <Input id="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                        PIN CODE
                    </FormLabel>
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={show ? 'text' : 'password'}
                            placeholder="Enter pin code"
                            value={user.password}
                            onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="textarea" fontWeight={'normal'} mt="2%">
                        Rating
                    </FormLabel>
                    <Textarea></Textarea>
                </FormControl>
                <FormControl>
                    <Button type='submit' w={'100%'} my={"2.5"} variant={'solid'} >Submit</Button>
                </FormControl>
            </div>
        </>
    );
}