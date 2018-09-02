import { LitElement, html } from "../node_modules/@polymer/lit-element/lit-element.js";

class cvComponent extends LitElement {
  static get properties() {
    return {
      cvData: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    fetch('./cv.json').then(response => response.json()).then(data => this.cvData = data);
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
                flex-direction: column;
                align-items: center;
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
                margin-top: 1em;
                border: 1px dashed white;
                padding: 0.7em;
                text-align: justify;
            }
            .section {
                padding: 1em 1em 0 1em;
                margin-top: 1em;
            }
            .section-tittle {
                width: 100%;
                font-size: 1.8em;
                margin-top: 0;
            }
            .section-container {
                border-left: 3px #1c6c30 solid;
            }
            .skills-container {
                display: flex;
                box-sizing: border-box;
                flex-wrap: wrap;
                justify-content: space-evenly;
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
            .other-skills {
                font-size: 1.2em
            }
            .second-level-container{
                border-left: 3px #2a9043 solid;
                margin-left: 1em;
                padding-left: 0.5em;
            }
            .work-case:not(:first-child) {
                margin-top: 2em;
            }
            .second-level-tittle {
                margin-bottom: 0;
            }
            .work-time-place {
                line-height: 2em;
            }
            .work-description {
                font-size: 0.9em;
                text-align: justify;
            }
            .work-icon {
                position: absolute;
                top: 1em;
                right: 1em;
                height: 3em;
                witdh: 3em;
            }
            .third-level-container {
                border-left: 3px #40d965 solid;
                margin-left: 0.5em;
                padding-left: 0.5em;
            }
            .third-level-tittle {
                margin-bottom: 0.5em;
            }
            .page-end {
                height: 4em;
            }

        </style>
        ${this.cvData ? html`
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
                    <div class="skills-container section-container">
                        ${this.cvData.technicalSkills.map(skill => {
      return html`
                                <div class="skill">
                                    <img class="skill-icon" src="${skill.iconUrl}" alt="skill.name">
                                    <span class="skill-name">${skill.name}</span>
                                </div>
                            `;
    })}
                    </div>
                </div>
                <div class="section">
                    <h2 class="section-tittle">Other Skills</h2>
                    <div class="section-container">
                        <ul class="other-skills">
                        ${this.cvData.otherSkills.map(skill => {
      return html`
                                <li type="square">${skill}</li>
                            `;
    })}
                        </ul>
                    </div>
                </div>
                <div class="section">
                    <h2 class="section-tittle">Experience</h2>
                    <div class="section-container">
                        ${this.cvData.experience.map(workCase => {
      return html`
                                <div class="second-level-container">
                                    <h3 class="second-level-tittle">${workCase.name}</h3>
                                    <span class="work-time-place">${workCase.startDate} - ${workCase.endDate || 'Present'} | ${workCase.location}</span>
                                    <div>
                                        <span class="work-description">${workCase.description}</span>
                                    </div>
                                    ${workCase.clients ? html`
                                            ${workCase.clients.map(client => {
        return html`
                                                    <div class="third-level-container">
                                                        <h4 class="third-level-tittle">${client.name}</h4>
                                                        <span>${client.startDate} - ${client.endDate || 'Present'}</span>
                                                    </div>
                                                `;
      })}
                                        ` : html``}
                                </div>
                            `;
    })}
                        </ul>
                    </div>
                </div>
                <div class="section">
                    <h2 class="section-tittle">Education</h2>
                    <div class="section-container">
                        ${this.cvData.education.map(degree => {
      return html`
                                <div class="second-level-container">
                                    <h3 class="second-level-tittle">${degree.name}</h3>
                                    <div>
                                        <span>${degree.place}</span>
                                    </div>
                                    <div>
                                        <span>${degree.startDate} - ${degree.endDate || 'Present'}</span>
                                    </div>
                                </div>
                            `;
    })}
                    </div>
                </div>
                <div class="page-end">
                </div>` : html`
                <span>Loading...</span>
            `}
        `;
  }

}

customElements.define('cv-component', cvComponent);