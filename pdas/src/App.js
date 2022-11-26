import React from 'react'
import ProfileCard from './ProfileCard'
import 'bulma/css/bulma.css'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

const App = () => {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Person Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa213" 
                                image={AlexaImage}
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana52" 
                                image={CortanaImage} 
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri023" 
                                image={SiriImage}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;
