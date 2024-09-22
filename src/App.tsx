import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import './App.css'
import TopBar from "./components/TopBar.tsx";
import Nav from "./components/Nav.tsx";
import Hero from './components/Hero.tsx';
import NewCollection from './components/NewCollection.tsx';
import Banner from './components/Banner.tsx';
import CategoryCards from './components/CategoryCards.tsx';
import Footer from './components/Footer.tsx';
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
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 10}}>
        <Box>
          <TopBar />
          <Nav />
      <Container maxWidth="xl" >
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%',gap: 10}} >
          <Hero />
          <NewCollection />
          <Banner />
          <CategoryCards />
        </Box>
      </Container>
      </Box>

      <Footer />
      </Box>
    </ThemeProvider>
    </>
  )
}

export default App
