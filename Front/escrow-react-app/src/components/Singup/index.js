import React from 'react'
import { Container, FormContent,
         FormInput, FormWrap, 
         Icon, Text, FormButton,
         FormLabel, FormH1, Form } from './SignupElements'

const Signup = () => {
    return (
        <Container>
         <FormWrap>
             <Icon to="/">Escrow</Icon>
             <FormContent>
                 <Form action="#">
                     <FormH1>Create new account</FormH1>
                     <FormLabel htmlFor="for">Name</FormLabel>
                     <FormInput type="Name" required />
                     <FormLabel htmlFor="for">Email</FormLabel>
                     <FormInput type="Email" required />
                     <FormLabel htmlFor='for'>Password</FormLabel>
                     <FormInput type="password" required />
                     <FormButton type="submit">Continue</FormButton>
                     <Text>Forgot password</Text>
                 </Form>
             </FormContent>
         </FormWrap>
        </Container>
    );
};

export default Signup;
