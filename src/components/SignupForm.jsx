import { useState } from 'react';
import { Modal, Button, Group, TextInput } from '@mantine/core';
function SignupForm() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Signup"
        style={{fontWeight: 600}}
       >
        {/* Modal content */}
        <TextInput
         placeholder="Username"
         label="Enter username"
         withAsterisk
         className='form-input'
        />
        <TextInput
         placeholder="Email"
         label="Enter your email"
         withAsterisk
         className='form-input'
        />
        <TextInput
         placeholder="Password"
         label="Enter your password"
         withAsterisk
         className='form-input'
        />
        <div style={{paddingTop: '20px', display: 'flex', gap: '20px'}}>
         <Button>
          Submit
         </Button>
         <Button>
          Cancel
         </Button>
         </div>
      </Modal>

      <Group position="center">
      <div><Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={()=> setOpened(true)}>Signup</Button></div>
      </Group>
    </>
  );
}

export default SignupForm