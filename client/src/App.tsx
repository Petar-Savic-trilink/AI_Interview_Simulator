import { Card, Divider, List, ListItem, Typography } from '@mui/material'
import './App.css'
import type { Question } from './types/question'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    axios.get<Question[]>("http://localhost:5001/api/questions").then(res => setQuestions(res.data));
  }, [])

  return (
    <>
    <Typography variant='h2' gutterBottom>This is the heading</Typography>
    <List sx={{width: '100%'}} >
      {questions.map(q => (
        <ListItem key={q.id}>
          <Card sx={{padding: 3, width: '100%', border: '2px blue'}} elevation={3}>
            <Typography variant='h6'>{q.questionText}</Typography>
            <Typography variant='body1'>{q.answer}</Typography>
            <Divider />
            <Typography variant='body2'>{q.idealAnswer}</Typography>
          </Card>
        </ListItem>
      ))}
    </List>
    </>
  )
}

export default App
