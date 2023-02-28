import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core';
/* import { useNavigate } from 'react-router-dom'; */
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconEdit,
  IconBlockquote,
  IconBookmarks
} from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import { SearchBar } from './SearchBar';
import { HeaderResponsive } from './NavHeader';
import {Outlet, useNavigate} from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

/* interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
} */
/* const navigate = useNavigate() */
function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}


export function NavbarMinimal() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate()

  const mockdata = [
    { icon: IconHome2, label: 'Home', },
    { icon: IconGauge, label: 'Dashboard' },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
    { icon: IconBookmarks, label: 'Save Quote' },
    { icon: IconUser, label: 'Account' },
    { icon: IconEdit, label: 'Add Quote', onClick: () => {
      
      navigate("add-quote")
    }, },
    { icon: IconSettings, label: 'Settings' },
    {icon : IconLogout, label : 'Logout'}
  ];

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Center>
       {/*  <MantineLogo type="mark" size={30} /> */}
       <IconBlockquote size={30} color="black" style={{marginTop: '-95px'}}/>
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
        <Outlet/>
      </Navbar.Section>
    </Navbar>
  );
}