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
import ComingSoon from './pages/ComingSoon/ComingSoon'
import { ROUTES } from './constants/routes'

const BILLETTERIE_URL =
  'https://ticketscandy.com/e/rions-ensemble-contre-le-cancer-14644'

const isLocalhost =
  typeof window !== 'undefined' &&
  ['localhost', '127.0.0.1'].includes(window.location.hostname)

function App() {
  if (
    typeof window !== 'undefined' &&
    window.location.pathname === ROUTES.BILLETTERIE
  ) {
    window.location.replace(BILLETTERIE_URL)
    return null
  }

  if (!isLocalhost) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ComingSoon />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.COMING_SOON} element={<ComingSoon />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.ACTIONS} element={<Actions />} />
                <Route path={ROUTES.EVENTS} element={<Events />} />
                <Route path={ROUTES.EVENT_DETAIL} element={<EventDetail />} />
                <Route path={ROUTES.PARTNERS} element={<Partners />} />
                <Route path={ROUTES.SUPPORT} element={<Support />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </ThemeProvider>
  )
}

export default App
