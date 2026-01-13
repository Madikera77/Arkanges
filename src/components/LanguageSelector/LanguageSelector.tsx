import { MenuItem, Select, FormControl, SelectChangeEvent } from '@mui/material'
import { useTranslation } from 'react-i18next'
import styles from './LanguageSelector.module.scss'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'fr-CA', label: 'FR' },
    { code: 'en-US', label: 'EN' },
    { code: 'ht', label: 'HT' },
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
          <MenuItem key={lang.code} value={lang.code}>
            {lang.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default LanguageSelector
