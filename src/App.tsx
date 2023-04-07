import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Typography variant="h1">Hello!!</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
      <DatePicker label="Basic date picker" />
    </LocalizationProvider>
    </Box>
  )
}

export default App
