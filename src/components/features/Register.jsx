import React, { useState } from 'react'
import {Container,Box,Input,VStack,HStack,Button,Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Register = () => {
  const [radiobtn,setRadiobtn]=useState('')

  const hanldeRadio=(e)=>{
     setRadiobtn(e.target.value)
  }
  return (
    <Container>
      <Box>
        <Heading textAlign='center' p={{base:"5",sm:'10'}}fontSize={{base:'2xl',sm:'3xl'}}>Create your PopX account</Heading>
        <form style={{border:"1px solid #ddd", width:"100%",maxWidth:'500px',
          padding:"20px",margin:"auto",borderRadius:'8px'}}>
        <label style={{color:'blue'}}>
            Full Name <span style={{color:'red'}}>*</span>
          </label><br/>
          <Input w='100%' p='2' size='sm' type='text'placeholder='Enter Full Name' required/><br/>
          <label style={{color:'blue'}}>
            Phone number <span style={{color:'red'}}>*</span>
          </label><br/>
          <Input w='100%' p='2' size='sm' type='number'placeholder='Enter Mobile No'required/><br/>
          <label style={{color:'blue'}}>
           Email address <span style={{color:'red'}}>*</span>
          </label><br/>
          <Input w='100%' p='2' size='sm'type='email'placeholder='Enter Email'required/><br/>
          <label style={{color:'blue'}}>
            Password <span style={{color:'red'}}>*</span>
          </label><br/>
          <Input w='100%' p='2' size='sm'type='password'placeholder='Enter Password'required/><br/>
          <label style={{color:'blue'}}>
            Company Name 
          </label><br/>
          <Input w='100%' p='2' size='sm'type='text'placeholder='Enter Company Name'required/><br/>
          <p required>Are you an Agency?</p>
          <HStack spacing={4}>
            <label>
               <input type='radio' value='Yes' checked={radiobtn==='Yes'} onChange={hanldeRadio}/>
                Yes
            </label>
            <label>
             <input type='radio' value='No' checked={radiobtn==='No'}onChange={hanldeRadio}/>
              No
            </label><br/>

          </HStack>
          <Link to='/profile'>
              <Button bg='blue'ml={{base:'0%',sm:'30%',lg:'-1%'}} w='100%' mt={4} size='sm' color='white'>Create Account</Button>
          </Link>

        </form>
      </Box>
    </Container>
  )
}

export default Register
