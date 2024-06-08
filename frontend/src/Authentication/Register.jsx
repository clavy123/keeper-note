import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Button,
    InputRightElement,
    InputGroup,
    FormErrorMessage
} from '@chakra-ui/react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();

    const handleClick = () => setShow(!show);

    debugger
    const onSubmit = (data) => {
        fetch("http://localhost:5000/api/v1/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                navigate("/note");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
    };

    const handleBlur = async (event) => {
        await trigger(event.target.name);
    };

    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.username} mb={3}>
                <FormLabel>Username <span className="required">*</span></FormLabel>
                <Input
                    type="text"
                    placeholder="Enter UserName"
                    {...register('username', { required: 'Username is required' })}
                    onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email} mb={3}>
                <FormLabel>Email <span className="required">*</span></FormLabel>
                <Input
                    type="email"
                    placeholder="Enter Email"
                    {...register('email', { required: 'Email is required' })}
                    onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password} mb={3}>
                <FormLabel>Password <span className="required">*</span></FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter Password"
                        {...register('password', { required: 'Password is required' })}
                        onBlur={handleBlur}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? <IoMdEyeOff /> : <IoMdEye />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Box pt={3}>
                <Button colorScheme="blue" w="100%" type="submit">Submit</Button>
            </Box>
        </Box>
    );
}
