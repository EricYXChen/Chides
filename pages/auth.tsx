import { getAuth } from "firebase/auth";
import React, { useRef } from "react"
import firebase from "firebase";
import Layout from "../components/Layout";
import firebaseConfig from "../src/firebaseConfig";
import  StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Container , TextField, Box, Button } from "@mui/material";

export default function auth(){
  const handleSubmit = () => {

  }
  return(
    <>
      <Container component = "main" maxWidth = "xs">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            alignItems = 'center'
            onSubmit = {handleSubmit}
            >
            <div>
            <h1>Sign Up</h1>
              <TextField 
                required 
                fullWidth
                id = "outlined-required"
                label = "First Name"
              />
            </div>
            <div>
              <TextField 
                required 
                fullWidth
                id = "outlined-required"
                label = "Last Name"
              />
            </div>
            <div>
              <TextField 
                required 
                fullWidth
                id = "outlined-required"
                label = "Email"
              />
            </div>
            <div>
              <Button type="submit" fullWidth variant = "outlined">Sign Up</Button>
            </div>
          </Box>
        </Container>
    </>
  )
}
  
