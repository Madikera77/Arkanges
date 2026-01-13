import { MenuItem, Select, FormControl, SelectChangeEvent } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from './LanguageSelector.module.scss'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'fr-CA', label: 'FR', name: 'Français', flag: '/flags/ca.png' },
    { code: 'en-US', label: 'EN', name: 'English', flag: '/flags/us.png' },
    { code: 'ht', label: 'HT', name: 'Kreyòl', flag: '/flags/ht.png' },
  ]

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <FormControl className={styles.languageSelector}>
      <Select
        value={i18n.language}
        onChange={handleLanguageChange}
        className={styles.select}
        renderValue={(value) => {
          const lang = languages.find((l) => l.code === value)
          return lang ? (
            <span className={styles.selectedValue}>
              <img src={lang.flag} alt={lang.name} className={styles.flag} />
            </span>
          ) : (
            value
          )
        }}
        sx={{
          color: '#F5F5F5',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(212, 175, 55, 0.3)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(212, 175, 55, 0.5)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D4AF37',
          },
          '& .MuiSvgIcon-root': {
            color: '#D4AF37',
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code} className={styles.menuItem}>
            <img src={lang.flag} alt={lang.name} className={styles.flag} />
            <span className={styles.label}>{lang.name}</span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default LanguageSelector
