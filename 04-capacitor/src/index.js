import '@ionic/core/css/ionic.bundle.css'

import {defineCustomElements} from "@ionic/core/loader"
import {defineCustomElements as pwaElements} from '@ionic/pwa-elements/loader';
import { Camera, CameraResultType } from "@capacitor/camera";
// import { Storage } from "@capacitor/storage";

pwaElements(window)

const init = async () => {
    await defineCustomElements()

    const talksElement = document.getElementById('talks')
    const photoButton = document.getElementById('photo')

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


    const picture = async () => {
        return await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri,
        });
    };

    fetch('https://devfest-nantes-2018-api.cleverapps.io/blog')
        .then(data => data.json())
        .then(talks => talks.forEach(talk => talksElement.appendChild(createTalk(talk))))

    photoButton.addEventListener('click', async function (event) {
        const picture = await picture()
    })

    console.log(photoButton)
}

init()