import { createStyles, Paper, Text, ThemeIcon, Grid, Button} from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import demoSlice, { fetchAllTags } from '../utils/demoSlice';
const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(0, theme.colors.pink[6], theme.colors.orange[6]),
    },
  },
     flexData : {
       display: 'flex',
       gap: '10px',
      flexWrap: 'wrap'
    },
}));

/* interface CardGradientProps {
  title: string;
  description: string;
} */

function Tags() {
  const [tags, setTags] = useState([])
  const { classes } = useStyles();
  const data = useSelector((state) => state.demo)
  
  const dispatch = useDispatch()
  useEffect(()=>
   { 
    console.log("Hii", data)
    dispatch(fetchAllTags())
   }, [])


/*    const getAlltags = async () =>{
    
     await axios.get('https://api.realworld.io/api/tags').then(
      data => { 
        
        console.log(data.data.tags)
        setTags(data.data.tags)
      }
     )
   } */

  return (
        <div>
          <Paper withBorder radius="md" className={classes.card} style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
          <Text style={{fontWeight: 700, fontSize: 'larger'}}>Topics for you</Text>
          { data.data.map((data, i)=> (
            <Button color="gray" key={i}>
             {data}
           </Button>
            ))
          }
        </Paper>
      </div>
  );
  }
export default Tags