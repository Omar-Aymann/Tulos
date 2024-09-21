import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import './App.css'
import TopBar from "./components/TopBar.tsx";
import Nav from "./components/Nav.tsx";
import Hero from './components/Hero.tsx';
import NewCollection from './components/NewCollection.tsx';
function App() {
  const theme = createTheme({
    palette: {
      background: {
        paper: '#151515',
        default: '#fff',
      }
    },
  })
  return (
    <>
    <ThemeProvider theme={theme}>
        <TopBar />
        <Nav />
      <Container maxWidth="xl" >
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%',gap: 10}} >

        <Hero />
        <NewCollection />
        </Box>
      </Container>
    </ThemeProvider>
    </>
  )
}

export default App
