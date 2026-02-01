import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  SentimentSatisfied as ComedyIcon, 
  MusicNote as MusicIcon, 
  Celebration as GalaIcon, 
  Store as MarketIcon 
} from '@mui/icons-material'
import { events } from '../../data/events'
import { ROUTES, eventDetail } from '../../constants/routes'
import styles from './Events.module.scss'

const Events = () => {
  const { t, i18n } = useTranslation()

  const formatDate = (date: Date): string => {
    if (date.getFullYear() === 2099) {
      return t('events.comingSoon')
    }
    return new Intl.DateTimeFormat(i18n.language === 'ht' ? 'fr-CA' : i18n.language, {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
    }).format(date)
  }

  const getEventIcon = (id: string) => {
    const iconMap: Record<string, JSX.Element> = {
      'comedy': <ComedyIcon />,
      'concert': <MusicIcon />,
      'gala': <GalaIcon />,
      'market': <MarketIcon />,
    }
    return iconMap[id] || <ComedyIcon />
  }

  const getEventTranslationKey = (eventId: string): string => {
    const keyMap: Record<string, string> = {
      'comedy': 'event1',
      'concert': 'event2',
      'gala': 'event3',
      'market': 'event4',
    }
    return keyMap[eventId] || 'event1'
  }

  const enrichedEvents = events.map((event) => {
    const eventKey = getEventTranslationKey(event.id)
    return {
      ...event,
      icon: getEventIcon(event.id),
      title: t(`events.${eventKey}Title`),
      type: t(`events.${eventKey}Type`),
      date: formatDate(event.date),
      periodicite: t(`events.${eventKey}Period`),
      description: t(`events.${eventKey}Desc`),
      objective: t(`events.${eventKey}Objective`),
      ambiance: t(`events.${eventKey}Ambiance`),
    }
  })

  return (
    <div className={styles.events}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>
              {t('events.title')}
            </Typography>
            <Typography variant="h5" className={styles.heroSubtitle}>
              {t('events.subtitle')}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Intro */}
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Typography variant="body1" className={styles.intro}>
            {t('events.intro')}
          </Typography>
        </Container>
      </section>

      {/* Events List */}
      <section className={styles.eventsSection}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {enrichedEvents.map((event) => (
              <Grid item xs={12} key={event.id}>
                <Link to={eventDetail(event.id)} className={styles.eventLink}>
                <Card className={styles.eventCard}>
                  <CardContent>
                    <Box className={styles.eventHeader}>
                      <Box className={styles.eventIcon}>{event.icon}</Box>
                      <Box className={styles.eventTitleBox}>
                        <Typography variant="h3" className={styles.eventTitle}>
                          {event.title}
                        </Typography>
                        <Box className={styles.eventMeta}>
                          <Typography variant="body2" className={styles.eventType}>
                            {event.type}
                          </Typography>
                          <Typography variant="body2" className={styles.eventDate}>
                            {event.date}
                          </Typography>
                          <Typography variant="body2" className={styles.eventPeriodicite}>
                            {event.periodicite}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    
                    <Typography variant="body1" className={styles.eventDescription}>
                      {event.description}
                    </Typography>
                    
                    <Box className={styles.eventDetails}>
                      <Box className={styles.eventDetailItem}>
                        <Typography variant="h6" className={styles.detailLabel}>
                          {t('events.objective')}
                        </Typography>
                        <Typography variant="body2" className={styles.detailText}>
                          {event.objective}
                        </Typography>
                      </Box>
                      <Box className={styles.eventDetailItem}>
                        <Typography variant="h6" className={styles.detailLabel}>
                          {t('events.ambiance')}
                        </Typography>
                        <Typography variant="body2" className={styles.detailText}>
                          {event.ambiance}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <Container maxWidth="lg">
          <Box className={styles.ctaContent}>
            <Typography variant="h3" className={styles.ctaTitle}>
              {t('events.ctaTitle')}
            </Typography>
            <Typography variant="body1" className={styles.ctaText}>
              {t('events.ctaText')}
            </Typography>
            <Box className={styles.ctaButtons}>
              <Link to={ROUTES.CONTACT} className={styles.btn}>
                {t('events.contactUs')}
              </Link>
              <Link to={ROUTES.SUPPORT} className={styles.btn}>
                {t('events.supportUs')}
              </Link>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  )
}

export default Events
