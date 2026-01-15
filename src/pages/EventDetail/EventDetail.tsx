import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  SentimentSatisfied as ComedyIcon,
  MusicNote as MusicIcon,
  Celebration as GalaIcon,
  Store as MarketIcon,
  ArrowBack as ArrowBackIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import { getEventById } from "../../data/events";
import TicketWidget from "../../components/TicketWidget/TicketWidget";
import styles from "./EventDetail.module.scss";

const EventDetail = () => {
  const { t, i18n } = useTranslation();
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const eventData = getEventById(eventId || "");

  const formatDate = (date: Date): string => {
    if (date.getFullYear() === 2099) {
      return t("events.comingSoon");
    }
    return new Intl.DateTimeFormat(i18n.language === "ht" ? "fr-CA" : i18n.language, {
      month: "long",
      year: "numeric",
      day: "numeric",
    }).format(date);
  };

  const getEventIcon = (id: string) => {
    const iconMap: Record<string, JSX.Element> = {
      comedy: <ComedyIcon />,
      concert: <MusicIcon />,
      gala: <GalaIcon />,
      market: <MarketIcon />,
    };
    return iconMap[id] || <ComedyIcon />;
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

  if (!eventData) {
    return (
      <div className={styles.eventDetail}>
        <Container maxWidth="lg">
          <Box className={styles.notFound}>
            <Typography variant="h2">{t("eventDetail.notFound")}</Typography>
            <Link to="/evenements" className={styles.backLink}>
              {t("eventDetail.backToEvents")}
            </Link>
          </Box>
        </Container>
      </div>
    );
  }

  const eventKey = getEventTranslationKey(eventData.id);
  const event = {
    icon: getEventIcon(eventData.id),
    title: t(`events.${eventKey}Title`),
    type: t(`events.${eventKey}Type`),
    date: formatDate(eventData.date),
    period: t(`events.${eventKey}Period`),
    description: t(`events.${eventKey}Desc`),
    objective: t(`events.${eventKey}Objective`),
    ambiance: t(`events.${eventKey}Ambiance`),
  };

  if (!event) {
    return (
      <div className={styles.eventDetail}>
        <Container maxWidth="lg">
          <Box className={styles.notFound}>
            <Typography variant="h2">{t("eventDetail.notFound")}</Typography>
            <Link to="/evenements" className={styles.backLink}>
              {t("eventDetail.backToEvents")}
            </Link>
          </Box>
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.eventDetail}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate("/evenements")}
              className={styles.backButton}
            >
              {t("eventDetail.back")}
            </Button>
            <Box className={styles.heroIcon}>{event.icon}</Box>
            <Typography variant="h1" className={styles.heroTitle}>
              {event.title}
            </Typography>
            <Typography variant="h5" className={styles.heroSubtitle}>
              {event.type}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Event Info */}
      <section className={styles.infoSection}>
        <Container maxWidth="lg">
          <Grid container spacing={4} className={styles.infoGrid}>
            <Grid item xs={12} md={4}>
              <Box className={styles.infoCard}>
                <CalendarIcon className={styles.infoIcon} />
                <Typography variant="h6" className={styles.infoLabel}>
                  {t("eventDetail.date")}
                </Typography>
                <Typography variant="body1" className={styles.infoValue}>
                  {event.date}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={styles.infoCard}>
                <InfoIcon className={styles.infoIcon} />
                <Typography variant="h6" className={styles.infoLabel}>
                  {t("eventDetail.periodicity")}
                </Typography>
                <Typography variant="body1" className={styles.infoValue}>
                  {event.period}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className={styles.infoCard}>
                <LocationIcon className={styles.infoIcon} />
                <Typography variant="h6" className={styles.infoLabel}>
                  {t("eventDetail.location")}
                </Typography>
                <Typography variant="body1" className={styles.infoValue}>
                  {t("eventDetail.locationValue")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Description */}
      <section className={styles.descriptionSection}>
        <Container maxWidth="lg">
          <Box className={styles.sectionContent}>
            <Typography variant="h2" className={styles.sectionTitle}>
              {t("eventDetail.about")}
            </Typography>
            <Typography variant="body1" className={styles.description}>
              {event.description}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Objective */}
      <section className={styles.objectiveSection}>
        <Container maxWidth="lg">
          <Box className={styles.sectionContent}>
            <Typography variant="h2" className={styles.sectionTitle}>
              {t("events.objective")}
            </Typography>
            <Typography variant="body1" className={styles.objective}>
              {event.objective}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Ambiance */}
      <section className={styles.ambianceSection}>
        <Container maxWidth="lg">
          <Box className={styles.sectionContent}>
            <Typography variant="h2" className={styles.sectionTitle}>
              {t("events.ambiance")}
            </Typography>
            <Typography variant="body1" className={styles.ambiance}>
              {event.ambiance}
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Ticket Widget */}
      <section className={styles.ticketSection}>
        <Container maxWidth="lg">
          <Box className={styles.sectionContent}>
            <Typography variant="h2" className={styles.sectionTitle}>
              {t("eventDetail.tickets")}
            </Typography>
            {eventData.ticketWidgetId && (
              <TicketWidget eventId={eventData.ticketWidgetId} />
            )}
          </Box>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <Container maxWidth="lg">
          <Box className={styles.ctaContent}>
            <Typography variant="h3" className={styles.ctaTitle}>
              {t("eventDetail.ctaTitle")}
            </Typography>
            <Typography variant="body1" className={styles.ctaText}>
              {t("eventDetail.ctaText")}
            </Typography>
            <Box className={styles.ctaButtons}>
              <Link to="/contact" className={styles.btn}>
                {t("eventDetail.contactUs")}
              </Link>
              <Link to="/nous-soutenir" className={styles.btn}>
                {t("eventDetail.supportUs")}
              </Link>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default EventDetail;
