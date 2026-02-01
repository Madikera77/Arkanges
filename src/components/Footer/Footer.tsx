import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Container, Grid, Typography, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import { ROUTES } from '../../constants/routes'
import styles from './Footer.module.scss'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    [t('footer.navigation')]: [
      { path: ROUTES.HOME, label: t('nav.home') },
      { path: ROUTES.ABOUT, label: t('nav.about') },
      { path: ROUTES.ACTIONS, label: t('nav.actions') },
      { path: ROUTES.EVENTS, label: t('nav.events') },
    ],
    [t('footer.support')]: [
      { path: ROUTES.SUPPORT, label: t('nav.support') },
      { path: ROUTES.PARTNERS, label: t('nav.partners') },
      { path: ROUTES.CONTACT, label: t('nav.contact') },
    ],
  }

  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} className={styles.footerContent}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className={styles.footerTitle}>
              Ark'Anges
            </Typography>
            <Typography variant="body2" className={styles.footerTagline}>
              {t('footer.tagline')}
            </Typography>
            <Typography variant="body2" className={styles.footerText}>
              {t('footer.description')}
            </Typography>
            <Box className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/ark.anges"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <IconButton
                  className={styles.socialIcon}
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <Typography variant="body2" className={styles.socialText}>
                  {t('footer.followInstagram')}
                </Typography>
              </a>
            </Box>
          </Grid>

          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Typography variant="h6" className={styles.footerCategory}>
                {category}
              </Typography>
              <Box component="ul" className={styles.footerLinks}>
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className={styles.footerBottom}>
          <Typography variant="body2" className={styles.footerCopyright}>
            {t('footer.copyright', { year: currentYear })}
          </Typography>
          <Typography variant="body2" className={styles.footerLegal}>
            {t('footer.legal')}
          </Typography>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer
