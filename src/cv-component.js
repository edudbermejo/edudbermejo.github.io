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
            .god-container {
                width: 100%;
            }
            .personal-information {
                background-color: #37999e;
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
            .job-tittle {
                display: inline-table;
            }
            .email-address {
                display: inline-table;
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
            .profile-photo {
                height: 10em;
                width: 10em;
                border: 1px solid white;
                border-radius: 50%;
            }
            .profile-data-container ul {
                text-align: left;
                font-size: 1.2em;
                line-height: 1.8em;
            }
            .profile-info-icon {
                height: 1.5em;
                width: 1.5em;
                border: none;
            }
            .job-tittle {
                margin-top: 1em;
            }
            .email-address {
                margin-top: 0.5em;
                color: white;
            }
            .personal-introduction-container {
                margin-top: 1.5em;
                border: 1px dashed white;
                padding: 0.7em;
                text-align: justify;
            }
            .section {
                padding: 1em 1em 0 1em;
                margin-top: 1em;
                width: 100%;
            }
            .section-tittle {
                color: #37999e;
                width: 100%;
                font-size: 1.8em;
                margin-top: 0;
            }
            .section-container {
                border-left: 3px #37999e solid;
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
            .skills-list {
                font-size: 1.2em
            }
            .human-skills {
                list-style-type: lower-greek;
            }
            .second-level-container{
                border-left: 3px #308388 solid;
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
                border-left: 3px #26696d solid;
                margin-left: 0.5em;
                padding-left: 0.5em;
            }
            .third-level-tittle {
                margin-bottom: 0.5em;
            }
            .page-end {
                height: 4em;
            }
            #print-icon {
                display: none;
            }
            .profile-info-container {
                margin-top: 1.5em;
            }
            .profile-info {
                display: flex;
                align-items: center;
            }
            .profile-info span {
                margin-left: 0.5em;
            }

            @media only screen and (min-width: 1024px) {
                .god-container {
                    display: flex;
                    height: 100vh;
                }
                .personal-information {
                    display: flex;
                    flex-direction: column;
                    width: 25em;
                }
                .non-personal-information {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                }
                .skill .skill-name,
                .page-end {
                    display: none;
                }
                .section {
                    width: 30%;
                }
                .experience-container {
                    height: 80vh;
                    overflow-y: hidden;
                }
                .experience-container .work-case:first-child h3{
                    margin-top: 0;
                }
                #print-icon {
                    display: block;
                    height: 3em;
                    width: 3em;
                    position: absolute;
                    bottom: 2em;
                }
            }

        </style>
        ${this.cvData ? html`
            <div class="god-container">
                <div class="personal-information">
                    <div class="complete-name">
                        <h1>${this.cvData.name}</h1>
                        <h1>${this.cvData.surname}</h1>
                    </div>
                    <div class="profile-data-container">
                        <img class="profile-photo" src="${this.cvData.profilePhotoUrl}" alt="profile-photo">
                            <div class="profile-info-container">
                                <div class="profile-info">
                                    <img class="profile-info-icon" src="${this.cvData.imageTittle}" alt="tittle-icon">
                                    <span class="job-tittle">${this.cvData.title}</span>
                                </div>
                                <div class="profile-info">
                                    <img class="profile-info-icon" src="${this.cvData.imageEmail}" alt="email-icon">
                                    <a class="email-address" href="mailto:${this.cvData.email}">${this.cvData.email}</a>
                                </div>
                            </div>
                    </div>
                    <div class="personal-introduction-container">
                        <span>${this.cvData.introduction}</span>
                    </div>
                    <img id="print-icon" src="./images/print.png" alt="print" on-click="${this._printCV}">
                </div>
                <div class="non-personal-information">
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
                        <h2 class="section-tittle">Human Skills</h2>
                        <div class="section-container">
                            <ul class="skills-list human-skills">
                            ${this.cvData.humanSkills.map(skill => {
          return html`
                                    <li>${skill}</li>
                                `;
        })}
                            </ul>
                        </div>
                    </div>
                    <div class="section">
                        <h2 class="section-tittle">Other Skills</h2>
                        <div class="section-container">
                            <ul class="skills-list">
                            ${this.cvData.otherSkills.map(skill => {
          return html`
                                    <li type="square">${skill}</li>
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
                    <div class="section">
                        <h2 class="section-tittle">Experience</h2>
                        <div class="section-container experience-container" onmouseover="this.style.overflowY='scroll'"
onmouseout="this.style.overflowY='hidden'">
                            ${this.cvData.experience.map(workCase => {
          return html`
                                    <div class="second-level-container work-case">
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
                    <div class="page-end">
                </div>
            </div>
        </div>`
                : html`
                <span>Loading...</span>
            `}
        `;
  }

  _printCV() {
      window.print();
  }

}

customElements.define('cv-component', cvComponent);
