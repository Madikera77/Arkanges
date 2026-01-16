import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:899px)");
  const { t } = useTranslation();

  const menuItems = [
    { path: "/", label: t("nav.home") },
    { path: "/a-propos", label: t("nav.about") },
    { path: "/nos-actions", label: t("nav.actions") },
    { path: "/evenements", label: t("nav.events") },
    { path: "/partenaires", label: t("nav.partners") },
    { path: "/nous-soutenir", label: t("nav.support") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <AppBar position="sticky" className={styles.navbar}>
        <Toolbar className={styles.toolbar}>
          <Link to="/" className={styles.logo}>
            <img
              src="/logos/header-logo.png"
              alt="Ark'Anges"
              className={styles.logoImage}
            />
          </Link>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              className={styles.menuButton}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <nav className={styles.nav}>
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${styles.navLink} ${
                      isActive(item.path) ? styles.active : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <LanguageSelector />
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        className={styles.drawer}
        PaperProps={{
          className: styles.drawerPaper,
        }}
      >
        <div className={styles.drawerHeader}>
          <img
            src="/logos/header-logo.png"
            alt="Ark'Anges"
            className={styles.drawerLogoImage}
          />
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              className={`${styles.drawerItem} ${
                isActive(item.path) ? styles.active : ""
              }`}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        <div className={styles.drawerLanguageSelector}>
          <LanguageSelector showText={true} />
        </div>
      </Drawer>
    </>
  );
};

export default Navigation;
