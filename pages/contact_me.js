import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { useState } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {Box, Button, Input, Textarea, AlertDialog, AlertDialogHeader, AlertDialogFooter, AlertDialogBody, AlertDialogContent, AlertDialogCloseButton, AlertDialogOverlay } from '@chakra-ui/react'
const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6r0qc6d', 'template_o9ocqb5', form.current, 'user_A5ypNM5SdwN2i2k1aImtG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Layout title="Contact me">
    <Section>
    <Box align="center">
    <br />
    <form ref={form} onSubmit={sendEmail}>
      <label>Name: </label>
      <Input isInvalid errorBorderColor='grey' type="text" name="user_name" />
      <br />
      <br />
      <label>Email: </label>
      <Input isInvalid errorBorderColor='grey' type="email" name="user_email" />
      <br />
      <br />
      <label>Message: </label>
      <Textarea isInvalid errorBorderColor='grey' md="600px" focusBorderColor="blue" type="text" name="message" styles="background-color:grey"/>
      <br />
      <br />

      <Button rightIcon={<ChevronRightIcon />} colorScheme='green' type="submit" id="Button" value="Send" onClick={() => setIsOpen(true)}>Send</Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isCentered
          >

          <AlertDialogOverlay/>  
            <AlertDialogContent>
              <AlertDialogHeader>
                Send Email
              </AlertDialogHeader>
              <AlertDialogCloseButton/>
              <AlertDialogBody>
                Your email was sent!
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button rightIcon={<ChevronRightIcon/>} colorScheme='green' ml={3} onClick={onClose}>Cool!</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </form>
    </Box>
    </Section>
    </Layout>
  );
};
export default ContactMe
