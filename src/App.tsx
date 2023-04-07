import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Typography variant="h1">Hello!!</Typography>
    </Box>
  )
}

export default App
