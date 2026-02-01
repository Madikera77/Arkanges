import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { 
  AttachMoney as MoneyIcon, 
  ShoppingCart as ShoppingIcon, 
  Handshake as PartnershipIcon, 
  Info as InfoIcon 
} from '@mui/icons-material'
import { ROUTES } from '../../constants/routes'
import styles from './Actions.module.scss'

const Actions = () => {
  const actions = [
    {
      id: 'financial',
      icon: <MoneyIcon />,
      title: 'Aide financière directe',
      description: 'Nous apportons un soutien financier concret pour pallier le manque à gagner lié à la maladie. Lorsqu\'une personne est en traitement, elle peut être dans l\'incapacité de travailler, ce qui crée une pression financière considérable.',
      details: [
        'Compensation partielle du manque à gagner',
        'Aide pour les frais de transport vers les centres de traitement',
        'Soutien pour les dépenses imprévues liées à la maladie',
      ],
    },
    {
      id: 'vouchers',
      icon: <ShoppingIcon />,
      title: 'Bons d\'achat ciblés',
      description: 'Nous offrons des bons d\'achat pour répondre à des besoins spécifiques et concrets, permettant aux personnes de retrouver une certaine normalité dans leur quotidien.',
      details: [
        'Bons d\'épicerie pour l\'alimentation',
        'Bons pour l\'achat de perruques de qualité',
        'Bons pour la lingerie post-ablation adaptée',
        'Autres besoins essentiels identifiés',
      ],
    },
    {
      id: 'partnerships',
      icon: <PartnershipIcon />,
      title: 'Partenariats d\'accompagnement',
      description: 'Nous collaborons avec des partenaires spécialisés qui partagent nos valeurs et offrent des services réellement utiles et humains aux personnes atteintes de cancer.',
      details: [
        'Accès à des services de bien-être adaptés',
        'Réseau de professionnels compréhensifs',
        'Solutions pratiques et concrètes',
      ],
    },
    {
      id: 'information',
      icon: <InfoIcon />,
      title: 'Information, sensibilisation et dédramatisation',
      description: 'Nous informons le public sur le cancer de manière positive, en mettant l\'accent sur la vie, la résilience et les solutions, plutôt que sur la peur et la maladie.',
      details: [
        'Événements de sensibilisation culturels',
        'Information sur les ressources disponibles',
        'Dédramatisation par l\'art et la culture',
        'Mise en avant de témoignages positifs',
      ],
    },
  ]

  return (
    <div className={styles.actions}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>
              Nos actions
            </Typography>
            <Typography variant="h5" className={styles.heroSubtitle}>
              Des actions concrètes pour un accompagnement humain et efficace
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Actions List */}
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Typography variant="body1" className={styles.intro}>
            Ark'Anges intervient à plusieurs niveaux pour accompagner les personnes atteintes de cancer.
            Chaque action est pensée pour être concrète, utile et respectueuse de la dignité des personnes.
            Nous privilégions toujours l'approche humaine, centrée sur la vie et le bien-être.
          </Typography>

          <Grid container spacing={4} className={styles.actionsGrid}>
            {actions.map((action) => (
              <Grid item xs={12} key={action.id}>
                <Card className={styles.actionCard}>
                  <CardContent>
                    <Box className={styles.actionHeader}>
                      <Box className={styles.actionIcon}>{action.icon}</Box>
                      <Typography variant="h3" className={styles.actionTitle}>
                        {action.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" className={styles.actionDescription}>
                      {action.description}
                    </Typography>
                    <Box component="ul" className={styles.actionDetails}>
                      {action.details.map((detail, idx) => (
                        <li key={`${action.id}-detail-${idx}`}>
                          <Typography variant="body2" className={styles.detailItem}>
                            {detail}
                          </Typography>
                        </li>
                      ))}
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
              Vous souhaitez bénéficier de notre accompagnement ?
            </Typography>
            <Typography variant="body1" className={styles.ctaText}>
              Contactez-nous pour en savoir plus sur nos programmes d'aide et nos critères d'éligibilité.
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

export default Actions
