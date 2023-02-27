import { useState } from 'react';
import { Modal, Button, Group, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
function AddQuote() {
  const [opened, setOpened] = useState(false);
   
  const form = useForm({
    initialValues:{
        title : '',
        description : '',
        body : '',
        tags : ''
    },

    validate : {
        title: (value) => (value.length < 5 ? 'Name must have at least 2 letters' : null),
        description : (value) => (typeof value == 'string' && value.length ? null : "Description should not be empty"),
        body : (value)=> (value?.length > 8 && typeof value === 'string' ? null : "Description should be 8 charactors long")
    }
  })
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add Quote!!"
      >
        <form onSubmit={form.onSubmit(values=> console.log(values))}>
        {/* Modal content */}
        <TextInput
         placeholder="Title"
         label="Title"
         withAsterisk
         {...form.getInputProps('title')}
         className="form-input"
        />
        <TextInput
         placeholder="Description"
         label="Description"
         withAsterisk
         {...form.getInputProps('description')}
         className="form-input"
        />
         <Textarea
       placeholder="Body"
       label="Body"
       withAsterisk
       {...form.getInputProps('body')}
       className="form-input"
       style={{height: '100px'}}
       />
         <TextInput
         placeholder="Tags"
         label="Tags"
         withAsterisk
         {...form.getInputProps('tags')}
         className="form-input"
        />
        <div style={{paddingTop: '20px', display: 'flex', gap: '20px'}}>
         <Button type='submit'>
          Add
         </Button>
         <Button>
          Cancel
         </Button>
         </div>
         </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export default AddQuote