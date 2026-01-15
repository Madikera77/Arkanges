import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  Event as EventIcon,
  Favorite as FavoriteIcon,
  Handshake as HandshakeIcon,
} from "@mui/icons-material";
import styles from "./Home.module.scss";

const Home = () => {
  const { t } = useTranslation();

  const actions = [
    {
      id: "financial",
      icon: <FavoriteIcon />,
      title: t("home.action1Title"),
      description: t("home.action1Desc"),
    },
    {
      id: "vouchers",
      icon: <HandshakeIcon />,
      title: t("home.action2Title"),
      description: t("home.action2Desc"),
    },
    {
      id: "events",
      icon: <EventIcon />,
      title: t("home.action3Title"),
      description: t("home.action3Desc"),
    },
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Typography variant="h1" className={styles.heroTitle}>
              {t("home.heroTitle")}
            </Typography>
            <Typography variant="h5" className={styles.heroSubtitle}>
              {t("home.heroSubtitle")}
            </Typography>
            <Box className={styles.heroActions}>
              <Link
                to="/nous-soutenir"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                {t("home.donate")}
              </Link>
              <Link to="/contact" className={styles.btn}>
                {t("home.contactUs")}
              </Link>
            </Box>
          </Box>
        </Container>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <Container maxWidth="lg">
          <Box className={styles.sectionContent}>
            <Box className={styles.missionImage}>
              <img src="/images/mission.png" alt="Community support" />
            </Box>
            <Typography variant="h2" className={styles.sectionTitle}>
              {t("home.missionTitle")}
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              {t("home.missionText")}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Actions Section */}
      <section className={styles.actions}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={styles.sectionTitle}>
            {t("home.actionsTitle")}
          </Typography>
          <Grid container spacing={4} className={styles.actionsGrid}>
            {actions.map((action) => (
              <Grid item xs={12} md={4} key={action.id}>
                <Card className={styles.actionCard}>
                  <CardContent>
                    <Box className={styles.actionImage}>
                      <img
                        src={
                          action.id === "financial"
                            ? "/images/aide_financiere.png"
                            : action.id === "vouchers"
                            ? "/images/bon_achat.png"
                            : "/images/events.png"
                        }
                        alt={action.title}
                      />
                    </Box>
                    <Box className={styles.actionIcon}>{action.icon}</Box>
                    <Typography variant="h4" className={styles.actionTitle}>
                      {action.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={styles.actionDescription}
                    >
                      {action.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box className={styles.actionsCTA}>
            <Link to="/nos-actions" className={styles.btn}>
              {t("home.discoverActions")}
            </Link>
          </Box>
        </Container>
      </section>

      {/* Events Preview Section */}
      <section className={styles.events}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={styles.sectionTitle}>
            {t("home.eventsTitle")}
          </Typography>
          <Box className={styles.eventsPreview}>
            <Card className={styles.eventCard}>
              <Box className={styles.eventImage}>
                <img src="/images/rions.png" alt="Comedy show" />
              </Box>
              <CardContent>
                <Typography variant="h4" className={styles.eventTitle}>
                  {t("home.event1Title")}
                </Typography>
                <Typography variant="body2" className={styles.eventDate}>
                  {t("home.event1Date")}
                </Typography>
                <Typography variant="body1" className={styles.eventDescription}>
                  {t("home.event1Desc")}
                </Typography>
              </CardContent>
            </Card>
            <Card className={styles.eventCard}>
              <Box className={styles.eventImage}>
                <img src="/images/concert.png" alt="Concert" />
              </Box>
              <CardContent>
                <Typography variant="h4" className={styles.eventTitle}>
                  {t("home.event2Title")}
                </Typography>
                <Typography variant="body2" className={styles.eventDate}>
                  {t("home.event2Date")}
                </Typography>
                <Typography variant="body1" className={styles.eventDescription}>
                  {t("home.event2Desc")}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box className={styles.eventsCTA}>
            <Link to="/evenements" className={styles.btn}>
              {t("home.viewAllEvents")}
            </Link>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Home;
