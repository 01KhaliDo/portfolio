const projects = [
    {
        title: { sv: "WaveWebChat", en: "WaveWebChat" },
        description: {
            sv: "En smidig webbapplikation för privata realtidskonversationer med skrivindikatorer och ljudnotiser.",
            en: "A smooth web application for private real time conversations with typing indicators and sound notifications."
        },
        tech: ["Node.js", "Socket.io", "HTML", "CSS", "JavaScript"],
        live: "https://wavewebchat.vercel.app/",
        github: "https://github.com/01KhaliDo/WaveWebChat",
        images: [
            "project-images/wavewebchat/1.png",
            "project-images/wavewebchat/2.png",
        ]
    },
    {
        title: { sv: "RKD Travels", en: "RKD Travels" },
        description: {
            sv: "Resebokningsplattform med sökning, bokning och användarhantering.",
            en: "Travel booking platform with search, booking, and user management."
        },
        tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "AWS"],
        live: "",
        github: "https://github.com/01khalido/rkd-travels",
        images: [
            "project-images/rkd-travels/1.png",
            "project-images/rkd-travels/2.png",
            "project-images/rkd-travels/3.png",
            "project-images/rkd-travels/4.png",
            "project-images/rkd-travels/5.png",
        ]
    },
    {
        title: { sv: "Face Recognition", en: "Face Recognition" },
        description: {
            sv: "Ett system som använder webbkamera för att detektera och känna igen ansikten samt tränar automatiskt om modellen när ny data läggs till.",
            en: "A system using webcam for face detection and recognition, automatically retraining the model when new data is added."
        },
        tech: ["Python", "OpenCV", "NumPy", "Haar Cascade", "LBPH Face Recognizer"],
        live: "",
        github: "https://github.com/01khalido/Face-recognition-system",
        images: [
            "project-images/face-recognition/1.jpg",
            "project-images/face-recognition/2.png"
        ]
    }
];

const projectsContainer = document.querySelector(".projects-grid");

function renderProjects(lang = 'sv') {
    projectsContainer.innerHTML = "";
    projects.forEach((project, projectIndex) => {
        const title = project.title[lang] || project.title.sv;
        const description = project.description[lang] || project.description.sv;
        const liveText = translations[lang].project_link_live;
        const githubText = translations[lang].project_link_github;
        const images = project.images || [];
        const hasImages = images.length > 0;
        const hasMultiple = images.length > 1;

        const galleryHTML = hasImages ? `
        <div class="project-gallery" id="gallery-${projectIndex}">
            <img class="gallery-img" src="${images[0]}" alt="${title} screenshot" onerror="this.parentElement.classList.add('gallery-hidden')">
            ${hasMultiple ? `
            <button class="gallery-btn gallery-prev" onclick="changeImage(${projectIndex}, -1)">&#8249;</button>
            <button class="gallery-btn gallery-next" onclick="changeImage(${projectIndex}, 1)">&#8250;</button>
            <div class="gallery-dots">
                ${images.map((_, i) => `<span class="gallery-dot ${i === 0 ? 'active' : ''}" onclick="goToImage(${projectIndex}, ${i})"></span>`).join('')}
            </div>` : ''}
        </div>` : '';

        projectsContainer.innerHTML += `
        <div class="project-card">
            ${galleryHTML}
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

// Gallery state tracker
const galleryState = {};

function changeImage(projectIndex, direction) {
    const images = projects[projectIndex].images || [];
    if (!galleryState[projectIndex]) galleryState[projectIndex] = 0;
    galleryState[projectIndex] = (galleryState[projectIndex] + direction + images.length) % images.length;
    updateGallery(projectIndex);
}

function goToImage(projectIndex, index) {
    galleryState[projectIndex] = index;
    updateGallery(projectIndex);
}

function updateGallery(projectIndex) {
    const gallery = document.getElementById(`gallery-${projectIndex}`);
    if (!gallery) return;
    const idx = galleryState[projectIndex] || 0;
    const images = projects[projectIndex].images || [];
    const img = gallery.querySelector('.gallery-img');
    if (img) img.src = images[idx];
    const dots = gallery.querySelectorAll('.gallery-dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
}

// Initial render handled by main script or default here
// renderProjects('sv');

