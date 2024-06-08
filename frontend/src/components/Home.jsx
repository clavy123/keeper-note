import { Tabs, TabList, TabPanels, Tab, TabPanel ,Box,Container} from '@chakra-ui/react'
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';


function Home() {
  return (
    <Container maxW={'xl'} centerContent>
      <Box d="flex"
        justifyContent="center"
        p={4}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
      <Tabs isFitted variant='soft-rounded' colorScheme='red'>
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    </Container>
  );
}

export default Home;
