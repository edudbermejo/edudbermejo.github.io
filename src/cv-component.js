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
                padding: 0.8em;
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
                </div>`
            : html`
                <span>Loading...</span>
            `
        }
        `;
    }
}

customElements.define('cv-component', cvComponent);
