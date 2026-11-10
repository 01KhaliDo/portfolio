const skillGroups = [
    {
        title: { sv: "Frontend", en: "Frontend" },
        items: ["TypeScript / JavaScript", "React / Next.js", "HTML & CSS"]
    },
    {
        title: { sv: "Backend och integrationer", en: "Backend and integrations" },
        items: ["Node.js", "Python", "PHP", "REST API:er", "SQL"]
    },
    {
        title: { sv: "AI och blockchain", en: "AI and blockchain" },
        items: ["AI / LLM-integration", "Hedera"]
    },
    {
        title: { sv: "Verktyg och arbetssätt", en: "Tools and ways of working" },
        items: ["Git", "Linux", "Testning (Playwright)", "Agile / Scrum (Jira)"]
    }
];

const skillsContainer = document.querySelector(".skills-grid");

function renderSkills(lang = 'sv') {
    skillsContainer.innerHTML = skillGroups.map(group => `
        <div class="skill-group">
            <h3>${group.title[lang] || group.title.sv}</h3>
            <ul>${group.items.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
    `).join("");
}
