import React from 'react'
import { Container, FormContent,
         FormInput, FormWrap, 
         Icon, Text, FormButton,
         FormLabel, FormH1, Form } from './SigninElements'

const Signin = () => {
    return (
        <Container>
         <FormWrap>
             <Icon to="/">Escrow</Icon>
             <FormContent>
                 <Form action="#">
                     <FormH1>Sign in to your account</FormH1>
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

export default Signin;
