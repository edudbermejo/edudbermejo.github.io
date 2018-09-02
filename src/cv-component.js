import {LitElement, html} from '@polymer/lit-element';

class cvComponent extends LitElement {

    static get properties() {
        return {
            cvData: { type: Object }
        };
    }

    constructor() {
        super();
        fetch('./cv.json')
        .then(response => response.json())
        .then(data => this.cvData = data);
    }

    _render() {
        return html`
        <style>
            .personal-information {
                background-color: #793323;
                /* background-image: linear-gradient(#461f11, #ab452e); */
                width: 100%;
                box-sizing: border-box;
                color: white;
                padding: 1.5em;
            }
            .personal-information h1 {
                text-align: center;
                margin: 0;
            }
            .complete-name {
                padding: 0 0.8em 0.8em;
            }
            .profile-data-container {
                margin-top: 0.5em;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
            }
            .profile-data-container img {
                height: 6em;
                width: 6em;
                border: 1px solid white;
                border-radius: 50%;
            }
            .profile-data-container ul {
                text-align: left;
                font-size: 1.2em;
                line-height: 1.8em;
            }
            .personal-introduction-container {
                margin-top: 1.5em;
                border: 1px dashed white;
                padding: 0.7em;
                text-align: justify;
            }
            .section {
                padding: 1em;
                margin-top: 1em;
            }
            .section-tittle {
                width: 100%;
                font-size: 1.8em;
                margin-top: 0;
            }
            .section-container {
                display: flex;
                box-sizing: border-box;
                flex-wrap: wrap;
                justify-content: space-evenly;
                border-left: 3px #1c6c30 solid;
            }
            .skill-icon {
                height: 4em;
            }
            .skill {
                padding: 1em;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .skill .skill-name {
                padding-top: 0.5em;
            }

        </style>
        ${this.cvData
            ? html`
                <div class="personal-information">
                    <div class="complete-name">
                        <h1>${this.cvData.name}</h1>
                        <h1>${this.cvData.surname}</h1>
                    </div>
                    <div class="profile-data-container">
                        <img class="profile-photo" src="${this.cvData.profilePhotoUrl}" alt="profile-photo">
                        <ul>
                            <li>${this.cvData.title}</li>
                            <li>${this.cvData.email}</li>
                        </ul>
                    </div>
                    <div class="personal-introduction-container">
                        <span>${this.cvData.introduction}</span>
                    </div>
                </div>
                <div class="section">
                    <h2 class="section-tittle">Technical Skills</h2>
                    <div class="section-container">
                        ${this.cvData.technicalSkills.map((skill) => {
                            return html`
                                <div class="skill">
                                    <img class="skill-icon" src="${skill.iconUrl}" alt="skill.name">
                                    <span class="skill-name">${skill.name}</span>
                                </div>
                            `
                        })}
                    </div>
                </div>`
            : html`
                <span>Loading...</span>
            `
        }
        `;
    }
}

customElements.define('cv-component', cvComponent);
