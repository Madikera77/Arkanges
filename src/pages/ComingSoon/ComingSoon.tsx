import { useTranslation } from "react-i18next";
import { Container, Box, Typography } from "@mui/material";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import styles from "./ComingSoon.module.scss";

const ComingSoon = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.comingSoon}>
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <Container maxWidth="lg">
          <Box className={styles.heroContent}>
            <img
              src="/logos/Logo+typo_blancV3@300x.png"
              alt="Ark'anges"
              className={styles.logo}
            />
            <Typography variant="h1" className={styles.title}>
              {t("comingSoon.title")}
            </Typography>
            <Typography variant="h5" className={styles.subtitle}>
              {t("comingSoon.subtitle")}
            </Typography>
          </Box>
        </Container>
      </section>
      <footer className={styles.miniFooter}>
        <div className={styles.miniFooterSpacer} />
        <div className={styles.miniFooterText}>
          <Typography variant="body2" component="span">
            {t("footer.copyright", { year: currentYear })}
          </Typography>
          <Typography variant="body2" component="span">
            {t("footer.legal")}
          </Typography>
        </div>
        <div className={styles.miniFooterLang}>
          <LanguageSelector />
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
