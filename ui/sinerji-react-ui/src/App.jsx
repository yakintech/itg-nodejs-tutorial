import React, { useContext } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enI18 } from './utils/i18helper/enI18';
import { trI18 } from './utils/i18helper/tri18';
import { SettingsContext } from './context/SettingsContext';


let globalLanguage = "en"

if(localStorage.getItem("language")){
  globalLanguage = localStorage.getItem("language")
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enI18
      },
      tr: {
        translation: trI18
      }
    },
    lng: globalLanguage,

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


function App() {

  const {language, setLanguage} = useContext(SettingsContext)

  const changeTr = () => {
    localStorage.setItem("language","tr");
    i18n.changeLanguage("tr")
    setLanguage("tr")
  }

  const changeEn = () => {
    localStorage.setItem("language","en");
    i18n.changeLanguage("en")
    setLanguage("en")
  }

  return (<>
    <button onClick={changeTr}>TR</button>
    <button onClick={changeEn}>EN</button>
    <hr />
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/about'}>About</Link></li>
      <li><Link to={'/contact'}>Contact</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
    <footer>Footer @2024</footer>

  </>
  )
}

export default App