import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Routes, Route } from 'react-router-dom'
import theme from './theme/theme'
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Actions from './pages/Actions/Actions'
import Events from './pages/Events/Events'
import EventDetail from './pages/EventDetail/EventDetail'
import Partners from './pages/Partners/Partners'
import Support from './pages/Support/Support'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/nos-actions" element={<Actions />} />
          <Route path="/evenements" element={<Events />} />
          <Route path="/evenements/:eventId" element={<EventDetail />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/nous-soutenir" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
