import React, {useEffect} from "react";
import { isInteger, useFormik, useFormikContext } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();


  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    onSubmit: async (values, {resetForm}) => {
      submit("#/contactme",  values);
      
        if (response && response.type === 'success') {
          onOpen('success', `Thanks for your submission ${values.firstName}`);
          resetForm();
        }
        else if (response) {
          onOpen('error', response.message );
        } else {
          onOpen('error', 'Unknown error occurred.' );
        }
      
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email().required('Required'),
      type: Yup.string().oneOf(['hireMe', 'openSourse', 'other']),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack  id="contactme-section"  w="1024px" p={32} alignItems="flex-start"  >
        <Heading as="h1">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(e) => {e.preventDefault; formik.handleSubmit(e)}}> 
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>Required</FormErrorMessage>              
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>Invalid email address</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel {...formik.getFieldProps('type')} htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>Must be at least 25 characters</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" 
                isLoading={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
