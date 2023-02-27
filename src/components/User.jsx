import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
    Button
  } from '@mantine/core';
  import { IconChevronRight } from '@tabler/icons';
  
  const useStyles = createStyles((theme) => ({
    user: {
      display: 'block',
      width: '100%',
      padding: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      /* marginTop : '50px', */
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },

   /*  userColor : {
        backgroundColor : '#F8F9FA'
    } */
  }));
  
  function User({name, email, status, color, text}) {
    const { classes } = useStyles();
  
    return (
      <div>
      <UnstyledButton className={classes.user} style={{width: '100%', background: '#F8F9FA'}}>
        <Group className={classes.userColor}>
          <Avatar src={'https://api.realworld.io/images/demo-avatar.png'} radius="xl" />
  
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>
  
            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>
  
          <Button style={{background: color, color : text}} radius={'md'}>
          {status}
       </Button>
        </Group>
      </UnstyledButton>
      </div>
    );
  }

  export default User