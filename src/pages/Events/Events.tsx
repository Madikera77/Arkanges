import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { 
  SentimentSatisfied as ComedyIcon, 
  MusicNote as MusicIcon, 
  Celebration as GalaIcon, 
  Store as MarketIcon 
} from '@mui/icons-material'
import styles from './Events.module.scss'

const Events = () => {
  const events = [
    {
      id: 'comedy',
      icon: <ComedyIcon />,
      title: 'Rions ensemble contre le cancer',
      type: 'Show d\'humour',
      date: 'Février 2024',
      periodicite: 'Annuel',
      description: 'Un spectacle d\'humour caritatif qui rassemble, fait rire et sensibilise. L\'humour comme acte de résistance et de guérison.',
      objective: 'Rassembler la communauté, sensibiliser de manière positive, et collecter des fonds pour nos programmes d\'aide.',
      ambiance: 'Chaleureuse, festive, pleine de rires et de bonne humeur. Un moment de joie partagée.',
    },
    {
      id: 'concert',
      icon: <MusicIcon />,
      title: 'La Voix des Anges',
      type: 'Concert caritatif',
      date: 'Juin 2024',
      periodicite: 'Annuel',
      description: 'Un concert caritatif mettant en lumière la beauté et la force de la vie à travers la musique. Des artistes talentueux se réunissent pour une cause commune.',
      objective: 'Célébrer la vie, la beauté et la résilience à travers l\'art musical, tout en soutenant nos actions.',
      ambiance: 'Élégante, émouvante, inspirante. Une soirée où la musique devient un message d\'espoir.',
    },
    {
      id: 'gala',
      icon: <GalaIcon />,
      title: 'Le Gala de l\'Espoir et du Glamour',
      type: 'Gala caritatif',
      date: 'À venir',
      periodicite: 'Annuel',
      description: 'Un gala prestigieux organisé en partenariat avec La Maison de Patricia, alliant élégance, glamour et générosité.',
      objective: 'Organiser un événement d\'envergure pour collecter des fonds importants et sensibiliser un large public.',
      ambiance: 'Sophistiquée, glamour, nocturne. Une soirée où l\'élégance rencontre la générosité.',
    },
    {
      id: 'market',
      icon: <MarketIcon />,
      title: 'Le Marché AfroKare',
      type: 'Marché afro-caribéen bien-être & santé',
      date: 'À venir',
      periodicite: 'À déterminer',
      description: 'Un marché afro-caribéen dédié au bien-être et à la santé, mettant en avant des solutions naturelles et culturelles pour le bien-être.',
      objective: 'Promouvoir des approches de bien-être diversifiées et culturellement pertinentes, tout en créant un espace de rencontre et d\'échange.',
      ambiance: 'Vivante, colorée, communautaire. Un espace de découverte et de partage autour du bien-être.',
    },
  ]

  return (
    <div className={styles.events}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>
              Nos événements
            </Typography>
            <Typography variant="h5" className={styles.heroSubtitle}>
              Des moments de partage, de culture et de générosité
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Intro */}
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Typography variant="body1" className={styles.intro}>
            Les événements d'Ark'Anges sont conçus pour rassembler, sensibiliser et collecter des fonds,
            tout en célébrant la vie, la culture et la beauté. Chaque événement est une occasion de
            créer des moments de joie, de partage et d'espoir, loin de toute approche misérabiliste.
          </Typography>
        </Container>
      </section>

      {/* Events List */}
      <section className={styles.eventsSection}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid item xs={12} key={event.id}>
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
                          Objectif
                        </Typography>
                        <Typography variant="body2" className={styles.detailText}>
                          {event.objective}
                        </Typography>
                      </Box>
                      <Box className={styles.eventDetailItem}>
                        <Typography variant="h6" className={styles.detailLabel}>
                          Ambiance
                        </Typography>
                        <Typography variant="body2" className={styles.detailText}>
                          {event.ambiance}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
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
              Participez à nos événements
            </Typography>
            <Typography variant="body1" className={styles.ctaText}>
              Rejoignez-nous pour des moments de partage, de culture et de générosité.
              Restez informés de nos prochains événements en nous contactant.
            </Typography>
            <Box className={styles.ctaButtons}>
              <Link to="/contact" className={styles.btn}>
                Nous contacter
              </Link>
              <Link to="/nous-soutenir" className={styles.btn}>
                Nous soutenir
              </Link>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  )
}

export default Events
