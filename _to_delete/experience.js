const experience = [
    {
        role: { sv: "Webbutvecklare", en: "Web Developer" },
        place: "Redtoken, Kungälv",
        period: { sv: "2026 – Nu", en: "2026 – Present" },
        description: {
            sv: "Redtoken är ett startup som utvecklar flera produkter och dApps på Hedera-nätverket. Jag ansvarar för frontend och design, integrerar apparna mot nätverket och bygger nya funktioner. Inför lanseringen jobbar jag mycket med att rätta buggar och göra apparna säkrare, snabbare och enklare att använda.",
            en: "Redtoken is a startup building several products and dApps on the Hedera network. I'm responsible for frontend and design, integrate the apps with the network and build new features. Ahead of launch, I spend a lot of time fixing bugs and making the apps more secure, faster and easier to use."
        },
        tech: ["Next.js", "TypeScript", "Hedera", "Git"]
    },
    {
        role: { sv: "Systemutvecklare – Praktik", en: "Software Developer – Internship" },
        place: "Grade Varbi, Trollhättan",
        period: { sv: "2025 – 2026", en: "2025 – 2026" },
        description: {
            sv: "Under praktiken arbetade jag med utveckling av Varbis interna system och rekryteringsplattformen. Jag implementerade nya funktioner och förbättrade befintliga delar, med fokus på både design och funktionalitet. Jag arbetade i sprintar enligt agil/scrum med Jira som verktyg.",
            en: "During the internship I worked on Varbi's internal systems and recruitment platform. I implemented new features and improved existing parts, with a focus on both design and functionality. I worked in sprints using agile/scrum, with Jira as our tool."
        },
        tech: ["PHP", "Agile / Scrum", "Jira"]
    },
    {
        role: { sv: "Lagerarbetare", en: "Warehouse Worker" },
        place: "ICA Centrallager, Kungälv",
        period: { sv: "2022 – Nu", en: "2022 – Present" },
        description: {
            sv: "Plock och pack av butiksbeställningar samt pallplacering med skjutstativtruck.",
            en: "Picking and packing store orders and placing pallets with a reach truck."
        },
        tech: []
    },
    {
        role: { sv: "Truckförare", en: "Forklift Driver" },
        place: "Volvo Cars TA Karossfabriken, Göteborg",
        period: { sv: "2024 – 2026", en: "2024 – 2026" },
        description: {
            sv: "Transporterade material inom fabriken och såg till att produktionslinjerna aldrig stod still. Roterade mellan olika stationer.",
            en: "Transported materials within the factory and made sure the production lines never stopped. Rotated between different stations."
        },
        tech: []
    },
    {
        role: { sv: "Högskoleingenjör – Datateknik", en: "B.Sc. Computer Engineering" },
        place: { sv: "Högskolan Väst, Trollhättan", en: "University West, Trollhättan" },
        period: { sv: "2023 – 2026", en: "2023 – 2026" },
        description: {
            sv: "Utbildning med inriktning mot programmering och nätverk. Examensarbete om AI-driven testautomatisering av webbapplikationer med stora språkmodeller och Playwright.",
            en: "Degree with a focus on programming and networks. Bachelor's thesis on AI-driven test automation for web applications using large language models and Playwright."
        },
        tech: []
    }
];

const experienceContainer = document.querySelector(".experience-list");

function renderExperience(lang = 'sv') {
    if (!experienceContainer) return;
    experienceContainer.innerHTML = "";
    experience.forEach(item => {
        const place = typeof item.place === 'string' ? item.place : (item.place[lang] || item.place.sv);
        experienceContainer.innerHTML += `
        <div class="experience-card">
            <div class="experience-header">
                <h3>${item.role[lang] || item.role.sv}</h3>
                <span class="experience-period">${item.period[lang] || item.period.sv}</span>
            </div>
            <p class="experience-place">${place}</p>
            <p>${item.description[lang] || item.description.sv}</p>
            ${item.tech.length ? `<ul class="tech-list">${item.tech.map(t => `<li>${t}</li>`).join("")}</ul>` : ""}
        </div>`;
    });
}
