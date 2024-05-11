import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext(null);



export const SettingsProvider = ({ children }) => {

    const [language, setLanguage] = useState("en")

    useEffect(() => {

        if (localStorage.getItem("language")) {
            setLanguage(localStorage.getItem("language"))
        }

    }, [])



    return <SettingsContext.Provider value={{ language, setLanguage }}>
        {children}
    </SettingsContext.Provider>


}