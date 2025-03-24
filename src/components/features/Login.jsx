import React from 'react'
import {Container,Box,Input,VStack,HStack,Button,Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
   <Container>
 <Box>
        <Heading textAlign='center' p={{base:"5",sm:'10'}}fontSize={{base:'2xl',sm:'3xl'}}>Signin to your PopX account</Heading>
        <p style={{textAlign:"center"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <form style={{border:"1px solid #ddd", width:"100%",maxWidth:'500px',
          padding:"20px",margin:"auto",borderRadius:'8px'}}>
        
          <label style={{color:'blue'}}>
           Email address <span style={{color:'red'}}>*</span>
          </label><br/>
          <Input w='100%' p='2' size='sm'type='email'placeholder='Enter Email'required/><br/>
          <label style={{color:'blue'}}>
            Password <span style={{color:'red'}}>*</span>
          </label><br/>
          <Input w='100%' p='2' size='sm'type='password'placeholder='Enter Password'required/><br/>
          
          <Link to='/profile'>
              <Button bg='blue'ml={{base:'0',sm:'30%',lg:'-1%'}} w='100%' mt={4} size='sm'color='white'>Login</Button>
          </Link>

        </form>
      </Box>
    </Container>
  )
}

export default Login
