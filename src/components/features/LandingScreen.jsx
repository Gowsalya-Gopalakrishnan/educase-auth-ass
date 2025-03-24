import React from 'react'
import {Container,Box,Input,VStack,HStack,Button,Heading} from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom'

const LandingScreen = () => {

  
  return (
    <Container>
        <Box>
            <Heading textAlign={'center'} p={{base : '10', sm: '20'}} fontSize={{base:'2xl',sm:'3xl'}}>Welcome to PopX</Heading>
            <p style={{textAlign:"center",marginTop:'-5%',color:"gray"}}>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit.</p>
            <VStack p={{base:'4', md:'10'}} 
            spacing={{base:'4',sm:"10"}} justify={{base:'center',sm:"flex-start"}} ml={{base:'0',sm:"35%",lg:'-1%'}} >
              <Link to='/register'>
                <Button bg='blue' >Create Account</Button>
              </Link>
              <Link to='/login'>            
                <Button bg='blue' to='/login'>Already Registered? Login</Button>
              </Link>
            </VStack>
        </Box>
    </Container>
  )
}

export default LandingScreen
