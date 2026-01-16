import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Favorite as FavoriteIcon,
  Visibility as VisionIcon,
  Lightbulb as LightbulbIcon,
  Timeline as TimelineIcon,
} from "@mui/icons-material";
import styles from "./About.module.scss";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <TimelineIcon />,
      title: t("about.value0Title"),
      description: t("about.value0Desc"),
    },
    {
      icon: <FavoriteIcon />,
      title: t("about.value1Title"),
      description: t("about.value1Desc"),
    },
    {
      icon: <VisionIcon />,
      title: t("about.value2Title"),
      description: t("about.value2Desc"),
    },
    {
      icon: <LightbulbIcon />,
      title: t("about.value4Title"),
      description: t("about.value4Desc"),
    },
  ];

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>
              {t("about.title")}
            </Typography>
            <Typography variant="h5" className={styles.heroSubtitle}>
              {t("about.subtitle")}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Qui nous sommes */}
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Box className={styles.sectionContent}>
            <Typography variant="h2" className={styles.sectionTitle}>
              {t("about.whoWeAre")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("about.whoWeAreText1")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("about.whoWeAreText2")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("about.whoWeAreText3")}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Mission */}
      <section className={styles.sectionAlt}>
        <Container maxWidth="lg">
          <Box className={styles.sectionContent}>
            <Typography variant="h2" className={styles.sectionTitle}>
              {t("about.mission")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("about.missionText1")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("about.missionText2")}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Vision */}
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Box className={styles.sectionContent}>
            <Typography variant="h2" className={styles.sectionTitle}>
              {t("about.vision")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("about.visionText1")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("about.visionText2")}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Valeurs */}
      <section className={styles.sectionAlt}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={styles.sectionTitle}>
            {t("about.values")}
          </Typography>
          <Grid container spacing={4} className={styles.valuesGrid}>
            {values.map((value) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <Card className={styles.valueCard}>
                  <CardContent>
                    <Box className={styles.valueIcon}>{value.icon}</Box>
                    <Typography variant="h4" className={styles.valueTitle}>
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.valueDescription}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Raison d'être */}
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Box className={styles.sectionContent}>
            <Typography variant="h2" className={styles.sectionTitle}>
              {t("about.purpose")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("about.purposeText1")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("about.purposeText2")}
            </Typography>
            <Box className={styles.quoteBox}>
              <Typography variant="h4" className={styles.quote}>
                "{t("about.quote")}"
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default About;
