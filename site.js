const profile = {
  name: "Alex Zhu",
  location: "Montréal, QC",
  role: "Student · Maker · Creative technologist",
  intro: "I turn curiosity into things people can see, use, and remember—from intelligent machines to small creative experiments.",
  about: "I learn by making. That has led me through robotics, computer vision, AI, design, music, photography, and the useful detours in between. I care about the full experience: what something does, how it feels, and the questions it leaves behind."
};

const links = [
  { label: "LinkedIn", note: "A little more about my work", url: "https://www.linkedin.com/in/alex-zhu17/" },
  { label: "GitHub", note: "Code, experiments, and works in progress", url: "https://github.com/alexwithadog" }
];

const projects = [
  { number: "01", title: "Atlas", type: "Human-centered AI", description: "A conversational guide that brings computer vision, robotics, and storytelling together to make looking at art feel more personal.", tags: ["AI", "Robotics", "Experience design"], accent: "lime" },
  { number: "02", title: "Artwork Vision", type: "Computer vision", description: "A growing image dataset and real-time recognition experiment built around iconic artworks and clear visual learning.", tags: ["RT-DETR", "Data", "Research"], accent: "blue" },
  { number: "03", title: "WRO Future Innovators", type: "Competition + teamwork", description: "Years of testing, rebuilding, presenting, and learning through robotics competition—culminating in a national-winning season.", tags: ["Engineering", "Teamwork", "Storytelling"], accent: "coral" },
  { number: "04", title: "Maker Experiments", type: "Always in motion", description: "The ongoing workshop: 3D printing, camera tests, electronics, fabrication, photography, and any idea worth trying with my hands.", tags: ["Prototyping", "Fusion 360", "Design"], accent: "violet" }
];

const nav = [["home", "Home", "/"], ["about", "Story", "/about/"], ["projects", "Work", "/projects/"], ["links", "Find me", "/links/"]];
const arrow = "<span aria-hidden=\"true\">↗</span>";
const tags = list => `<div class="tag-list">${list.map(tag => `<span>${tag}</span>`).join("")}</div>`;

function brand() {
  return `<a href="/" class="brand" aria-label="Alex Zhu home"><span class="brand-mark"><i>A</i><b>Z</b></span><span class="brand-copy"><strong>${profile.name}</strong><small>curiosity · craft · systems</small></span></a>`;
}

function shell(page, content) {
  return `<div class="site-frame"><header class="site-header">${brand()}<nav aria-label="Primary navigation">${nav.map(([key, label, url]) => `<a class="${page === key ? "active" : ""}" href="${url}">${label}</a>`).join("")}</nav></header><main>${content}</main><footer class="site-footer"><div>${brand()}<p>Made in Montréal, with curiosity.</p></div><div class="footer-nav">${nav.map(([, label, url]) => `<a href="${url}">${label}</a>`).join("")}</div><p class="copyright">© ${new Date().getFullYear()} Alex Zhu</p></footer></div>`;
}

function home() {
  const featured = projects.slice(0, 3).map(project => `<article class="project-row"><span class="project-number">${project.number}</span><div><p class="project-type">${project.type}</p><h3>${project.title}</h3><p>${project.description}</p>${tags(project.tags)}</div></article>`).join("");
  return `<section class="hero section-pad"><div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div><p class="eyebrow"><span class="status-dot"></span> Hello, I’m Alex Zhu</p><h1>I make <em>curious ideas</em> real.</h1><p class="hero-copy">${profile.intro}</p><div class="hero-actions"><a class="button button-primary" href="/projects/">See selected work ${arrow}</a><a class="button button-quiet" href="/about/">My story <span>→</span></a></div><div class="hero-stamp"><span>AZ</span><small>01 / 04</small></div></section><section class="ticker" aria-label="Interests"><div>AI <span>✦</span> DESIGN <span>✦</span> ROBOTICS <span>✦</span> MUSIC <span>✦</span> PHOTOGRAPHY <span>✦</span> MAKING <span>✦</span> AI <span>✦</span> DESIGN <span>✦</span> ROBOTICS <span>✦</span> MUSIC <span>✦</span></div></section><section class="section-pad section-grid"><div class="section-heading"><p class="kicker">01 / Selected work</p><h2>Built from questions worth chasing.</h2><a class="text-link" href="/projects/">View all work <span>→</span></a></div><div class="project-list">${featured}</div></section><section class="section-pad split-callout"><p class="kicker">02 / Beyond the build</p><div><h2>Learning doesn’t stay in one lane.</h2><p>I’m as interested in a piano phrase, a photograph, a hard chess position, or a dragon-boat practice as I am in a new tool. The point is to keep stretching the way I think.</p><div class="interest-grid"><span>Piano + music</span><span>Photography</span><span>Dragon boat</span><span>Chess + badminton</span></div></div></section><section class="section-pad connect-panel"><p class="kicker">03 / Connect</p><h2>Let’s make something with a point of view.</h2><div class="connect-links">${links.map(link => `<a href="${link.url}" target="_blank" rel="noreferrer"><span>${link.label}</span><small>${link.note}</small>${arrow}</a>`).join("")}</div></section>`;
}

function about() {
  return `<section class="page-intro section-pad"><p class="kicker">Story / 01</p><h1>Curious by default.<br><em>Building on purpose.</em></h1></section><section class="section-pad about-layout"><div class="portrait-art" aria-label="Abstract Alex Zhu monogram"><span>AZ</span><i>MAKE<br>ROOM<br>FOR<br>WONDER</i></div><div class="about-copy"><p>${profile.about}</p><div class="about-facts"><div><span>Based in</span><strong>${profile.location}</strong></div><div><span>Right now</span><strong>Student + co-founder of Atlas</strong></div><div><span>Also</span><strong>3D-design mentor, photographer, teammate</strong></div></div></div></section><section class="section-pad principles"><p class="kicker">How I work / 02</p><div class="principle-grid"><article><span>01</span><h2>Learn by making</h2><p>I give ideas a real shape early, then test them until they teach me something.</p></article><article><span>02</span><h2>Design the whole thing</h2><p>Technology is stronger when the story, interaction, and visual language pull together.</p></article><article><span>03</span><h2>Share the tools</h2><p>Teaching 3D design has reinforced a simple idea: knowledge is better when it travels.</p></article></div></section>`;
}

function projectPage() {
  const cards = projects.map(project => `<article class="project-card ${project.accent}"><div class="project-card-top"><span>${project.number}</span><span>${project.type}</span></div><div><h2>${project.title}</h2><p>${project.description}</p></div>${tags(project.tags)}</article>`).join("");
  return `<section class="page-intro section-pad"><p class="kicker">Work / 02</p><h1>Things I’ve built,<br><em>tested, and learned from.</em></h1><p>Projects across robotics, computer vision, AI, design, and hands-on experimentation.</p></section><section class="project-cards section-pad">${cards}</section>`;
}

function linkPage() {
  const stack = links.map((link, index) => `<a href="${link.url}" target="_blank" rel="noreferrer"><span class="link-index">0${index + 1}</span><span><strong>${link.label}</strong><small>${link.note}</small></span>${arrow}</a>`).join("");
  return `<section class="links-page section-pad"><p class="kicker">Find me / 03</p><h1>More places to<br><em>keep in touch.</em></h1><div class="link-stack">${stack}</div><p class="link-note">I’m always building, learning, and collecting better questions.</p></section>`;
}

const page = document.body.dataset.page || "home";
const render = { home, about, projects: projectPage, links: linkPage }[page] || home;
document.querySelector("#app").innerHTML = shell(page, render());
