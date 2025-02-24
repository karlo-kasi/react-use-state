import { useState } from "react"
import Buttons from "../components/Buttons"
import Cards from "./Cards"


const Main = (props) => {

    const {languages} = props

    const [selectLanguage, setSelectLanguage] = useState(null)



    const renderLanguage = () => languages.map( ( language ) => {
        
        const active = selectLanguage === language

        return (
            <Buttons key={language.id} isActive={active} title={language.title} onSelect={ () => setSelectLanguage(language) } />
        )

    })


    
    const renderSelectedLanguage = () => {

        if (!selectLanguage) return <h3> Nessun linguaggio selezionato </h3>

        const { title, description } = selectLanguage 

        return (
            <Cards title={title} description={description} />
        )
    }

    return (
        
        <main>
            <div className="container">
                <div className="row">
                    <div className="col d-flex gap-2">
                        { renderLanguage() }
                    </div>
                    <div>
                        { renderSelectedLanguage() }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main