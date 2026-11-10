const projects = [
    {
        title: { sv: "Hertz Freerider-bot", en: "Hertz Freerider Bot" },
        description: {
            sv: "En bot som bevakar Hertz Freerider och skickar en notis när en ny gratis hyrbil dyker upp mellan två orter. Jag hittade sidans interna API, vilket gjorde boten snabb och stabil. Den körs serverless och klarar flera användare samtidigt.",
            en: "A bot that monitors Hertz Freerider and sends a notification when a new free rental car shows up between two cities. I found the site's internal API, which made the bot fast and stable. It runs serverless and handles several users at the same time."
        },
        tech: ["JavaScript", "Cloudflare Workers", "Workers KV", "Telegram Bot API"],
        live: "",
        github: "https://github.com/01KhaliDo/hertz-freerider-bot",
        images: []
    },
    {
        title: { sv: "Jobbspanaren", en: "Jobbspanaren" },
        description: {
            sv: "Jag ville göra jobbsökandet enklare och bevakningarna på jobbsidorna fungerade inte som jag ville. Så jag byggde en egen bot som skickar en notis till mig när det dyker upp ett jobb som matchar det jag letar efter. Den hämtar nya jobb från Platsbanken räknar ut restiden med kollektivtrafik och sorterar bort det som ligger för långt bort. Resten sammanfattas av en AI modell och skickas direkt till min Telegram.",
            en: "I wanted to make job hunting easier, and the job alerts on the job sites didn't work the way I wanted. So I built my own bot that notifies me when a job that matches what I'm looking for shows up. It fetches new jobs from Platsbanken, calculates the travel time by public transport and filters out anything that's too far away. The rest is summarized by an AI model and sent straight to my Telegram."
        },
        tech: ["TypeScript", "Node.js", "JobTech API", "ResRobot", "OpenStreetMap", "Groq", "Telegram Bot API"],
        live: "",
        github: "https://github.com/01KhaliDo/jobbspanaren",
        images: []
    },
    {
        title: { sv: "WaveWebChat", en: "WaveWebChat" },
        description: {
            sv: "I en kurs hade vi en labb om sockets, och jag tyckte det var kul att se hur meddelanden kunde skickas i realtid. Så jag byggde vidare på det och gjorde en egen chattapp, lite som Messenger. Man väljer någon i listan och chattar, och meddelandena dyker upp direkt.",
            en: "In one of my courses we had a lab on sockets, and I thought it was fun to see how messages could be sent in real time. So I built on it and made my own chat app, a bit like Messenger. You pick someone from the list and chat, and the messages show up instantly."
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
        title: { sv: "Face Recognition", en: "Face Recognition" },
        description: {
            sv: "Jag såg några klipp om ansiktsigenkänning och tyckte det såg riktigt häftigt ut, så jag ville testa själv. Systemet använder webbkameran för att känna igen ansikten. Jag byggde det med hjälp av AI verktyg och lärde mig mycket om hur tekniken funkar på vägen.",
            en: "I saw some clips about face recognition and thought it looked really cool, so I wanted to try it myself. The system uses the webcam to recognize faces. I built it with the help of AI tools and learned a lot about how the technology works along the way."
        },
        tech: ["Python", "OpenCV", "NumPy", "Haar Cascade", "LBPH Face Recognizer"],
        live: "",
        github: "https://github.com/01khalido/Face-recognition-system",
        images: []
    },
    {
        title: { sv: "RKD Travels", en: "RKD Travels" },
        description: {
            sv: "Mitt första större projekt och det var en skoluppgift samtidigt. Projektet skulle förbereda oss för att jobba som fullstackutvecklare. I gruppen fick vi välja idé själva, och det blev en reseplattform där man kan söka och boka resor och hantera sitt konto. Hemsidan är kopplad till en egen server och databas och det var första gången jag fick jobba med frontend, backend och databas i samma projekt.",
            en: "My first bigger project, and a school assignment at the same time. The project was meant to prepare us for working as full-stack developers. Our group got to choose the idea ourselves, and we built a travel platform where you can search for and book trips and manage your account. The website is connected to its own server and database, and it was the first time I worked with frontend, backend and a database in the same project."
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
    }
];

const projectsContainer = document.querySelector(".projects-grid");

function renderProjects(lang = 'sv') {
    const t = translations[lang];
    projectsContainer.innerHTML = projects.map((project, projectIndex) => {
        const title = project.title[lang] || project.title.sv;
        const description = project.description[lang] || project.description.sv;
        const images = project.images || [];
        const hasMultiple = images.length > 1;

        const galleryHTML = images.length ? `
        <div class="project-gallery" id="gallery-${projectIndex}">
            <img class="gallery-img" src="${images[0]}" alt="${title}" loading="lazy" onerror="this.parentElement.classList.add('gallery-hidden')">
            ${hasMultiple ? `
            <div class="gallery-controls">
                <button type="button" class="gallery-btn" onclick="changeImage(${projectIndex}, -1)" aria-label="Föregående bild">&#8249;</button>
                <span class="gallery-count" id="gallery-count-${projectIndex}">1 / ${images.length}</span>
                <button type="button" class="gallery-btn" onclick="changeImage(${projectIndex}, 1)" aria-label="Nästa bild">&#8250;</button>
            </div>` : ''}
        </div>` : '';

        const links = [
            project.live ? `<a href="${project.live}" target="_blank" rel="noopener">${t.project_link_live}</a>` : '',
            project.github ? `<a href="${project.github}" target="_blank" rel="noopener">${t.project_link_github}</a>` : ''
        ].join('');

        return `
        <article class="project-card${images.length ? ' has-media' : ''}">
            <div class="project-body">
                <h3>${title}</h3>
                <p>${description}</p>
                <p class="tech-line"><span>${t.projects_built_with}:</span> ${project.tech.join(', ')}</p>
                <div class="project-links">${links}</div>
            </div>
            ${galleryHTML}
        </article>`;
    }).join('');
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
    const count = document.getElementById(`gallery-count-${projectIndex}`);
    if (count) count.textContent = `${idx + 1} / ${images.length}`;
}

// Initial render handled by main script or default here
// renderProjects('sv');

