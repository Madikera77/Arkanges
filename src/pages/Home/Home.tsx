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
import { getUpcomingEvents } from "../../data/events";
import { ROUTES } from "../../constants/routes";
import styles from "./Home.module.scss";

const Home = () => {
  const { t, i18n } = useTranslation();
  const upcomingEvents = getUpcomingEvents().slice(0, 2); // Afficher seulement les 2 premiers événements à venir

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat(
      i18n.language === "ht" ? "fr-CA" : i18n.language,
      {
        month: "long",
        year: "numeric",
        day: "numeric",
      }
    ).format(date);
  };

  const getEventTranslationKey = (eventId: string): string => {
    const keyMap: Record<string, string> = {
      comedy: "event1",
      concert: "event2",
      gala: "event3",
      market: "event4",
    };
    return keyMap[eventId] || "event1";
  };

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
                to={ROUTES.SUPPORT}
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                {t("home.donate")}
              </Link>
              <Link to={ROUTES.CONTACT} className={styles.btn}>
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
            <Link to={ROUTES.ACTIONS} className={styles.btn}>
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
          {upcomingEvents.length > 0 ? (
            <>
              <Box className={styles.eventsPreview}>
                {upcomingEvents.map((event) => {
                  const eventKey = getEventTranslationKey(event.id);
                  return (
                    <Card key={event.id} className={styles.eventCard}>
                      <Box className={styles.eventImage}>
                        <img
                          src={event.image}
                          alt={t(`home.${eventKey}Title`)}
                        />
                      </Box>
                      <CardContent className={styles.eventCardContent}>
                        <Box>
                          <Typography
                            variant="h4"
                            className={styles.eventTitle}
                          >
                            {t(`home.${eventKey}Title`)}
                          </Typography>
                          <Typography
                            variant="body2"
                            className={styles.eventDate}
                          >
                            {formatDate(event.date)}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          className={styles.eventDescription}
                        >
                          {t(`home.${eventKey}Desc`)}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
              <Box className={styles.eventsCTA}>
                <Link to={ROUTES.EVENTS} className={styles.btn}>
                  {t("home.viewAllEvents")}
                </Link>
              </Box>
            </>
          ) : (
            <Typography variant="body1" className={styles.sectionText}>
              {t("home.noUpcomingEvents")}
            </Typography>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Home;
