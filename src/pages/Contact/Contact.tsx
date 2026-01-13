import { useState } from 'react'
import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material'
import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationIcon } from '@mui/icons-material'
import styles from './Contact.module.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pourriez intégrer un système d'envoi d'email réel
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      id: 'email',
      icon: <EmailIcon />,
      label: 'Email',
      value: 'contact@arkanges.org',
      link: 'mailto:contact@arkanges.org',
    },
    {
      id: 'phone',
      icon: <PhoneIcon />,
      label: 'Téléphone',
      value: '(514) XXX-XXXX',
      link: 'tel:+1514XXXXXXX',
    },
    {
      id: 'address',
      icon: <LocationIcon />,
      label: 'Adresse',
      value: 'Québec, Canada',
      link: null,
    },
  ]

  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>
              Contactez-nous
            </Typography>
            <Typography variant="h5" className={styles.heroSubtitle}>
              Nous sommes là pour vous écouter et répondre à vos questions
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Contact Content */}
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Box className={styles.introBox}>
            <Typography variant="body1" className={styles.intro}>
              Vous souhaitez en savoir plus sur Ark'Anges ? Vous avez des questions sur nos programmes
              d'aide ? Vous voulez nous soutenir ou devenir partenaire ? N'hésitez pas à nous contacter.
              Nous serons ravis de vous répondre et d'échanger avec vous.
            </Typography>
          </Box>

          <Grid container spacing={4} className={styles.contactGrid}>
            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Box className={styles.formBox}>
                <Typography variant="h3" className={styles.formTitle}>
                  Envoyez-nous un message
                </Typography>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <TextField
                    fullWidth
                    label="Nom complet"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.formField}
                    InputProps={{
                      className: styles.input,
                    }}
                    InputLabelProps={{
                      className: styles.label,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.formField}
                    InputProps={{
                      className: styles.input,
                    }}
                    InputLabelProps={{
                      className: styles.label,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Téléphone (optionnel)"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formField}
                    InputProps={{
                      className: styles.input,
                    }}
                    InputLabelProps={{
                      className: styles.label,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Sujet"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.formField}
                    InputProps={{
                      className: styles.input,
                    }}
                    InputLabelProps={{
                      className: styles.label,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    className={styles.formField}
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
                    className={styles.submitButton}
                    fullWidth
                  >
                    Envoyer le message
                  </Button>
                </form>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Box className={styles.infoBox}>
                <Typography variant="h3" className={styles.infoTitle}>
                  Informations de contact
                </Typography>
                <Box className={styles.infoList}>
                  {contactInfo.map((info) => (
                    <Box key={info.id} className={styles.infoItem}>
                      <Box className={styles.infoIcon}>{info.icon}</Box>
                      <Box className={styles.infoContent}>
                        <Typography variant="body2" className={styles.infoLabel}>
                          {info.label}
                        </Typography>
                        {info.link ? (
                          <a href={info.link} className={styles.infoValue}>
                            {info.value}
                          </a>
                        ) : (
                          <Typography variant="body1" className={styles.infoValue}>
                            {info.value}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box className={styles.infoNote}>
                  <Typography variant="body2" className={styles.noteText}>
                    Nous répondons généralement dans les 48 heures. Pour les demandes urgentes,
                    n'hésitez pas à nous appeler directement.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  )
}

export default Contact
