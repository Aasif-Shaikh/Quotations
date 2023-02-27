import { useState, useRef } from 'react';
import { Autocomplete, Loader, createStyles } from '@mantine/core';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Avatar } from '@mantine/core';

export function SearchBar() {
  const timeoutRef = useRef(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = (val) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
      }, 1000);
    }
  };
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Autocomplete
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size={16} /> : null}
      placeholder="Search"
      styles={{width:'50px'}}
      className='auto-complete'
    />
    <div style={{display: 'flex', gap: '20px'}}>
    <LoginForm/>
    <SignupForm/>
    <Avatar src="profile.jpg" alt="profile" style={{cursor: 'pointer'}}/>
    </div>
    </div>
  );
}

