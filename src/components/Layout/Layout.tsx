import { ReactNode } from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
