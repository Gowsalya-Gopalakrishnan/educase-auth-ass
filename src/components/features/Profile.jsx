import React from 'react'
import {Container,Box,Heading,Avatar, HStack} from '@chakra-ui/react'

const Profile = () => {
  return (
   <Container maxW="container.sm" p={{base:"4",md:"8"}}>
    <Box>
        <Heading ml={{base:'0',sm:"30%"}} fontSize={{base:'xl',sm:'2xl'}}mb={6}>Account Settings</Heading>
        <form>
            <div style={{display:"flex",flexDirection:"row",gap:'5%',marginLeft:"30%"}}>
             <Box
          width={{base:'120px',sm:"150px"}}          
          height={{base:"150px",sm:'150px'}}        
          borderRadius="50%"     
          backgroundImage="url('https://bit.ly/dan-abramov')"
          backgroundSize="cover" 
          backgroundPosition="center" 
          mb={4}
          boxShadow="lg"
        />
        <HStack flexDirection="column" 
        justifyContent={"center"} alignItems='center'
         spacing={2} fontSize={{base:'lg',sm:'sm'}}>
           <span>Marry Doe <br/></span> 
           <span> Marry@Gmail.com</span>
        </HStack>
        </div>
       

        <p style={{textAlign:"center",width:"80%",
            marginLeft:"auto",marginRight:"auto",
            fontSize:"14px",marginTop:'20px',marginBottom:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Ab, ipsa quos quo exercitationem aliquam, 
            minus libero inventore ducimus aspernatur incidunt 
            .</p>
        </form>
        
    </Box>
   </Container>
  )
}

export default Profile
