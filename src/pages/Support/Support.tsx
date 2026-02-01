import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, Typography, Grid, Card, CardContent, TextField, Button } from '@mui/material'
import { 
  Favorite as DonateIcon, 
  Handshake as PartnerIcon, 
  VolunteerActivism as VolunteerIcon 
} from '@mui/icons-material'
import { ROUTES } from '../../constants/routes'
import styles from './Support.module.scss'

const Support = () => {
  const [donationAmount, setDonationAmount] = useState('')

  const supportOptions = [
    {
      id: 'donate',
      icon: <DonateIcon />,
      title: 'Faire un don',
      description: 'Votre don permet de financer directement nos programmes d\'aide financière et matérielle pour les personnes atteintes de cancer.',
      benefits: [
        'Aide financière directe aux bénéficiaires',
        'Bons d\'achat ciblés (épicerie, perruques, etc.)',
        'Organisation d\'événements caritatifs',
        'Soutien à nos actions de sensibilisation',
      ],
      note: 'Les dons sont essentiels pour permettre à Ark\'Anges de continuer à accompagner les personnes dans le besoin. Chaque contribution, quelle qu\'elle soit, fait une différence.',
    },
    {
      id: 'partner',
      icon: <PartnerIcon />,
      title: 'Devenir partenaire',
      description: 'Rejoignez-nous en tant que partenaire pour créer un impact durable et significatif.',
      benefits: [
        'Visibilité lors de nos événements',
        'Association avec une cause noble et humaine',
        'Partenariat aligné avec vos valeurs',
        'Impact concret et mesurable',
      ],
      note: 'Nous recherchons des partenaires qui partagent nos valeurs : approche humaine, solutions concrètes, alignement éthique. Contactez-nous pour discuter des possibilités de partenariat.',
    },
    {
      id: 'volunteer',
      icon: <VolunteerIcon />,
      title: 'S\'impliquer autrement',
      description: 'Il existe de nombreuses façons de soutenir Ark\'Anges au-delà du don financier.',
      benefits: [
        'Bénévolat lors de nos événements',
        'Partage de compétences et d\'expertise',
        'Sensibilisation dans votre réseau',
        'Organisation d\'événements locaux',
      ],
      note: 'Votre temps, vos compétences et votre engagement sont tout aussi précieux que les dons financiers. Ensemble, nous pouvons faire une différence.',
    },
  ]

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pourriez intégrer un système de paiement réel
    alert('Merci pour votre générosité ! Pour l\'instant, veuillez nous contacter directement pour effectuer un don.')
  }

  return (
    <div className={styles.support}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>
              Nous soutenir
            </Typography>
            <Typography variant="h5" className={styles.heroSubtitle}>
              Ensemble, faisons la différence dans la vie des personnes atteintes de cancer
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Support Options */}
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Typography variant="body1" className={styles.intro}>
            Il existe plusieurs façons de soutenir Ark'Anges et de contribuer à notre mission
            d'accompagnement des personnes atteintes de cancer. Chaque forme de soutien est précieuse
            et contribue à créer un impact réel et concret.
          </Typography>

          <Grid container spacing={4} className={styles.optionsGrid}>
            {supportOptions.map((option) => (
              <Grid item xs={12} md={4} key={option.id}>
                <Card className={styles.optionCard}>
                  <CardContent>
                    <Box className={styles.optionIcon}>{option.icon}</Box>
                    <Typography variant="h4" className={styles.optionTitle}>
                      {option.title}
                    </Typography>
                    <Typography variant="body1" className={styles.optionDescription}>
                      {option.description}
                    </Typography>
                    <Box component="ul" className={styles.optionBenefits}>
                      {option.benefits.map((benefit, idx) => (
                        <li key={`${option.id}-benefit-${idx}`}>
                          <Typography variant="body2" className={styles.benefitItem}>
                            {benefit}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                    <Typography variant="body2" className={styles.optionNote}>
                      {option.note}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Donation Form Section */}
      <section className={styles.donationSection}>
        <Container maxWidth="md">
          <Box className={styles.donationBox}>
            <Typography variant="h3" className={styles.donationTitle}>
              Faire un don
            </Typography>
            <Typography variant="body1" className={styles.donationText}>
              Votre générosité permet de financer directement nos programmes d'aide.
              Pour l'instant, veuillez nous contacter pour effectuer un don.
            </Typography>
            <form onSubmit={handleDonationSubmit} className={styles.donationForm}>
              <TextField
                fullWidth
                label="Montant du don (CAD)"
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className={styles.donationInput}
                InputProps={{
                  className: styles.input,
                }}
                InputLabelProps={{
                  className: styles.label,
                }}
              />
              <Button
                type="submit"
                variant="contained"
                className={styles.donationButton}
                fullWidth
              >
                Continuer
              </Button>
            </form>
            <Typography variant="body2" className={styles.donationNote}>
              Note : Pour l'instant, le système de paiement en ligne n'est pas encore activé.
              Veuillez nous contacter directement pour effectuer un don. Nous travaillons à
              mettre en place une solution de paiement sécurisée.
            </Typography>
          </Box>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <Container maxWidth="lg">
          <Box className={styles.ctaContent}>
            <Typography variant="h3" className={styles.ctaTitle}>
              Vous avez des questions ?
            </Typography>
            <Typography variant="body1" className={styles.ctaText}>
              N'hésitez pas à nous contacter pour discuter de la meilleure façon de soutenir Ark'Anges.
              Nous sommes là pour répondre à toutes vos questions.
            </Typography>
            <Box className={styles.ctaButtons}>
              <Link to={ROUTES.CONTACT} className={styles.btn}>
                Nous contacter
              </Link>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  )
}

export default Support
