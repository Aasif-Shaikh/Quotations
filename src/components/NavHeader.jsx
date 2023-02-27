import { AppShell, Navbar, Header, Grid } from '@mantine/core';
import { NavbarMinimal } from './NavbarMinimal';
import { SearchBar } from './SearchBar';
import Tags from './Tags';
import User from './User'
import AllQuotation from './AllQuotation';
import { Outlet  } from "react-router-dom";
function NavHeader() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} style={{width:'0px'}} height={500} p="xs"><NavbarMinimal/></Navbar>}
      header={<Header height={60} p="xs" ><SearchBar/></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      className="main-shell"
    >
      {/* Your application here */}
    
      <Grid>
      <Grid.Col span={7}>
      <AllQuotation/>
      </Grid.Col>
      <Grid.Col span={5} style={{marginTop: '50px', display: 'flex', flexDirection: 'column', gap : '10px'}}>
     {/*  <Tags/> */}
     <User name="Aasif" email="aasifshaikh2468@gmail.com" status = "Follow" color = "white" text="black"/>
     <User name="Farman" email="farman@gmail.com" status = "Follow" color = "white" text="black"/>
     <User name="Mehtab" email="mehtab@gmail.com" status = "Following" color = "black" text="white"/>
     {/* <User/> */}
      <Tags/>
      </Grid.Col>
      </Grid>
      <Outlet />
    </AppShell>
  );
}


export default NavHeader