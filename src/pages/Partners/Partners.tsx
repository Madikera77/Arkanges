import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { Handshake as PartnershipIcon } from '@mui/icons-material'
import styles from './Partners.module.scss'

const Partners = () => {
  const partners = [
    {
      id: 'kreokare',
      name: 'Kréokare',
      description: 'Kréokare est un partenaire qui partage nos valeurs d\'accompagnement humain et concret. Ensemble, nous travaillons à offrir des solutions réellement utiles aux personnes atteintes de cancer.',
      partnership: 'Notre partenariat avec Kréokare repose sur une vision commune : celle d\'un accompagnement respectueux, utile et aligné avec les besoins réels des personnes. Nous collaborons pour offrir des services complémentaires qui enrichissent notre offre d\'aide.',
      values: [
        'Approche humaine et respectueuse',
        'Solutions concrètes et utiles',
        'Alignement avec nos valeurs',
        'Non-commercial et centré sur l\'humain',
      ],
    },
    {
      id: 'patricia',
      name: 'La Maison de Patricia',
      description: 'La Maison de Patricia est un partenaire privilégié avec qui nous organisons des événements d\'envergure, notamment le Gala de l\'Espoir et du Glamour.',
      partnership: 'Notre collaboration avec La Maison de Patricia illustre parfaitement notre approche : allier élégance, culture et générosité pour créer des moments mémorables qui sensibilisent et collectent des fonds. Ce partenariat est basé sur une vision partagée de l\'accompagnement et du soutien.',
      values: [
        'Événements prestigieux et élégants',
        'Vision commune de l\'accompagnement',
        'Impact significatif pour nos bénéficiaires',
        'Partenariat durable et aligné',
      ],
    },
  ]

  return (
    <div className={styles.partners}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>
              Nos partenaires
            </Typography>
            <Typography variant="h5" className={styles.heroSubtitle}>
              Des alliances fortes pour un impact réel
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Intro */}
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Box className={styles.introBox}>
            <PartnershipIcon className={styles.introIcon} />
            <Typography variant="body1" className={styles.intro}>
              Les partenariats d'Ark'Anges sont sélectionnés avec soin. Nous collaborons uniquement
              avec des organisations et des entreprises qui partagent nos valeurs : approche humaine,
              solutions concrètes, alignement éthique, et centrage sur le bien-être des personnes.
            </Typography>
            <Typography variant="body1" className={styles.intro}>
              Chaque partenariat est pensé pour être utile, humain et aligné. Nous refusons les
              partenariats purement commerciaux qui ne servent pas réellement nos bénéficiaires.
              Notre logique est simple : si ce n'est pas utile, humain et aligné, ce n'est pas pour nous.
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Partners List */}
      <section className={styles.partnersSection}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {partners.map((partner) => (
              <Grid item xs={12} key={partner.id}>
                <Card className={styles.partnerCard}>
                  <CardContent>
                    <Typography variant="h2" className={styles.partnerName}>
                      {partner.name}
                    </Typography>
                    
                    <Typography variant="body1" className={styles.partnerDescription}>
                      {partner.description}
                    </Typography>
                    
                    <Box className={styles.partnershipBox}>
                      <Typography variant="h5" className={styles.partnershipTitle}>
                        Notre partenariat
                      </Typography>
                      <Typography variant="body1" className={styles.partnershipText}>
                        {partner.partnership}
                      </Typography>
                    </Box>
                    
                    <Box className={styles.valuesBox}>
                      <Typography variant="h6" className={styles.valuesTitle}>
                        Valeurs partagées
                      </Typography>
                      <Box component="ul" className={styles.valuesList}>
                        {partner.values.map((value, idx) => (
                          <li key={`${partner.id}-value-${idx}`}>
                            <Typography variant="body2" className={styles.valueItem}>
                              {value}
                            </Typography>
                          </li>
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Become Partner Section */}
      <section className={styles.becomePartnerSection}>
        <Container maxWidth="lg">
          <Box className={styles.becomePartnerContent}>
            <Typography variant="h3" className={styles.becomePartnerTitle}>
              Devenir partenaire
            </Typography>
            <Typography variant="body1" className={styles.becomePartnerText}>
              Vous partagez nos valeurs et souhaitez collaborer avec Ark'Anges ?
              Nous sommes ouverts aux partenariats qui apportent une vraie valeur ajoutée
              à nos bénéficiaires, dans le respect de nos principes éthiques.
            </Typography>
            <Box className={styles.becomePartnerButtons}>
              <Link to="/contact" className={styles.btn}>
                Nous contacter
              </Link>
              <Link to="/nous-soutenir" className={styles.btn}>
                En savoir plus
              </Link>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  )
}

export default Partners
