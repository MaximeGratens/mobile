import '@ionic/core/css/ionic.bundle.css'

import {defineCustomElements} from "@ionic/core/loader"

const init = async () => {
    await defineCustomElements()

    const talksElement = document.getElementById('talks')

    const createTalk = (talk) => {
        let template = document.createElement('template');
        template.innerHTML = `<ion-card>
            <img src="https://devfest2018.gdgnantes.com${talk.image}"  alt="Image du ${talk.title}"/>
            <ion-card-header>
                <ion-card-title>${talk.title}</ion-card-title>
            </ion-card-header>

            <ion-card-content>${talk.brief}</ion-card-content>
        </ion-card>`;

        return template.content.firstChild
    }

    fetch('https://devfest-nantes-2018-api.cleverapps.io/blog')
        .then(data => data.json())
        .then(talks => talks.forEach(talk => talksElement.appendChild(createTalk(talk))))
}

init()