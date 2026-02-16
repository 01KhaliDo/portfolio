const projects = [
    {
        title: { sv: "Webbchatt", en: "Web Chat" },
        description: {
            sv: "En smidig webbapplikation för privata realtidskonversationer med skrivindikatorer och ljudnotiser.",
            en: "A smooth web application for private real time conversations with typing indicators and sound notifications."
        },
        tech: ["Node.js", "Express", "Socket.io", "HTML5", "CSS", "JavaScript"],
        live: "https://wavewebchat.vercel.app/",
        github: "https://github.com/01KhaliDo/WaveWebChat"
    },
    {
        title: { sv: "RKD Travels", en: "RKD Travels" },
        description: {
            sv: "Resebokningsplattform med sökning, bokning och användarhantering.",
            en: "Travel booking platform with search, booking, and user management."
        },
        tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "AWS"],
        live: "",
        github: "https://github.com/01khalido/rkd-travels"
    },
    {
        title: { sv: "Face Recognition", en: "Face Recognition" },
        description: {
            sv: "Ett system som använder webbkamera för att detektera och känna igen ansikten samt tränar automatiskt om modellen när ny data läggs till.",
            en: "A system using webcam for face detection and recognition, automatically retraining the model when new data is added."
        },
        tech: ["Python", "OpenCV", "NumPy", "Haar Cascade", "LBPH Face Recognizer"],
        live: "",
        github: "https://github.com/01khalido/Face-recognition-system"
    }
];

const projectsContainer = document.querySelector(".projects-grid");

function renderProjects(lang = 'sv') {
    projectsContainer.innerHTML = "";
    projects.forEach(project => {
        const title = project.title[lang] || project.title.sv;
        const description = project.description[lang] || project.description.sv;
        const liveText = translations[lang].project_link_live;
        const githubText = translations[lang].project_link_github;

        projectsContainer.innerHTML += `
        <div class="project-card">
            <h3>${title}</h3>
            <p>${description}</p>

            <ul class="tech-list">
                ${project.tech.map(tech => `<li>${tech}</li>`).join("")}
            </ul>

            <div class="project-links">
                ${project.live ? `<a href="${project.live}" target="_blank">${liveText}</a>` : ""}
                <a href="${project.github}" target="_blank">${githubText}</a>
            </div>
        </div>
    `;
    });
}

// Initial render handled by main script or default here
// renderProjects('sv'); 

