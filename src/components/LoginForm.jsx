import { useState } from 'react';
import SignupForm from './SignupForm';
import { Modal, Button, Group, TextInput, Text } from '@mantine/core';
import {useForm} from '@mantine/form'
function LoginForm() {
  const [opened, setOpened] = useState(false);
  
  const form = useForm({
    initialValues : {
      email : '',
      password : ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value < 8 ? 'Your password must be 8 charactors long' : null),
      
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Login"
        style={{fontWeight: 600}}
      >
        <form onSubmit={form.onSubmit(values=> console.log())} >
         <TextInput
         placeholder="Email"
         label="Enter your email"
         withAsterisk
         className='form-input'
         {...form.getInputProps('email')}
        />
        <TextInput
         placeholder="Password"
         label="Enter your password"
         withAsterisk
         className='form-input'
         {...form.getInputProps('password')}
        />
         <Button style={{ marginTop: '20px'}} type="submit">
          Submit
         </Button>
         <Text>Dont signup then signup first
           
         </Text>
         </form>
      </Modal>

      <Group position="center">
      <div><Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={()=> setOpened(true)}>Login</Button></div>
      </Group>
    </>
  );
}

export default LoginForm