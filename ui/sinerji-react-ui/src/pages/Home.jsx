import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { SettingsContext } from '../context/SettingsContext';

function Home() {

  const { t } = useTranslation();
  const { language } = useContext(SettingsContext)

  return (<>
    <h1>{language}</h1>
    <h1>{t("welcome home")}</h1>
  </>
  )
}

export default Home