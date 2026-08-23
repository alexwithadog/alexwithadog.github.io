// ============================================================
// CUSTOMIZE YOUR SITE HERE — edit this section, not the layout.
// ============================================================
const profile = {
  name: "Alex Zhu",
  monogram: "AZ",
  role: "Student · Builder · Robotics",
  location: "Montréal, Canada",
  intro: "I’m a student, robotics competitor, and hands-on maker interested in the space where intelligent software meets the physical world.",
  about: [
    "I’m Alex—a student who likes turning complicated ideas into things people can actually see, touch, and use. Robotics has been the thread connecting most of my work for the past seven years.",
    "What started with RoboMission grew into Future Innovators, computer vision, conversational AI, 3D printing, and a habit of learning whatever a project needs next.",
    "I care about the whole experience: not only whether a machine works, but whether the story, interaction, and design around it make people want to understand it."
  ]
};

const links = [
  { label: "GitHub", url: "https://github.com/alexwithadog", note: "Code and experiments", enabled: true },
  { label: "Instagram", url: "#", note: "Photos and life", enabled: false },
  { label: "LinkedIn", url: "#", note: "Work and milestones", enabled: false },
  { label: "Email", url: "#", note: "Say hello", enabled: false }
];

const projects = [
  { title: "Atlas", category: "Conversational robotics", year: "Now", short: "An AI-powered guide designed to recognize artworks and turn looking at art into a conversation.", description: "Atlas brings together a physical robot, computer vision, and a conversational interface. The goal is to make museum learning feel natural, curious, and personal.", tags: ["AI", "Robotics", "Experience design"], status: "In development" },
  { title: "Artwork Vision Dataset", category: "Computer vision", year: "2026", short: "A seven-class image dataset built to teach a real-time model to recognize iconic artworks.", description: "A growing, carefully annotated dataset covering works including The Starry Night, Mona Lisa, The Great Wave, Sunflowers, and Tutankhamun’s mask.", tags: ["RT-DETR", "Roboflow", "Data"], status: "625+ images" },
  { title: "WRO Future Innovators", category: "Competition", year: "2025–26", short: "A national-winning robotics season built on seven years of competing, testing, failing, and rebuilding.", description: "A long-running team practice that evolved from RoboMission into open-ended invention—and earned first place at WRO Canada nationals.", tags: ["Engineering", "Teamwork", "WRO"], status: "National champion" },
  { title: "Maker Experiments", category: "Hardware & design", year: "Ongoing", short: "Small builds, camera tests, 3D-printed parts, and prototypes that turn questions into working objects.", description: "My workshop for learning in public: Fusion 360 designs, Jetson camera experiments, electronics, fabrication, and whatever useful detour comes next.", tags: ["3D printing", "Jetson", "Prototyping"], status: "Always building" }
];

const nav = [
  ["home", "Home", "/"], ["about", "About", "/about/"],
  ["projects", "Projects", "/projects/"], ["links", "Links", "/links/"]
];

const tags = list => `<div class="tag-list">${list.map(tag => `<span>${tag}</span>`).join("")}</div>`;

function shell(page, content) {
  return `<div class="site-frame"><header class="site-header"><a href="/" class="brand"><span class="brand-mark">${profile.monogram}</span><span><strong>${profile.name}</strong><small>${profile.role}</small></span></a><nav aria-label="Primary navigation">${nav.map(([key,label,url]) => `<a class="${page===key?'active':''}" href="${url}">${label}</a>`).join("")}</nav></header><main>${content}</main><footer class="site-footer"><div><span class="footer-mark">AZ</span><p>Built with curiosity<br>in ${profile.location}.</p></div><div class="footer-nav">${nav.map(([,label,url]) => `<a href="${url}">${label}</a>`).join("")}</div><p class="copyright">© 2026 Alex Zhu</p></footer></div>`;
}

function home() {
  const rows = projects.slice(0,3).map((p,i) => `<article class="project-row"><span class="project-number">0${i+1}</span><div><p class="project-meta">${p.category} · ${p.year}</p><h3>${p.title}</h3><p>${p.short}</p>${tags(p.tags)}</div></article>`).join("");
  const activeLinks = links.filter(x=>x.enabled).map(x=>`<a href="${x.url}" target="_blank" rel="noreferrer">${x.label}<span>↗</span></a>`).join("");
  return `<section class="hero section-pad"><div class="eyebrow"><span class="status-dot"></span> Available for ambitious ideas</div><h1>I build things that <em>move, see,</em> and talk.</h1><p class="hero-copy">${profile.intro}</p><div class="hero-actions"><a class="button button-primary" href="/projects/">Explore my work <span>↗</span></a><a class="button button-quiet" href="/about/">More about me</a></div><div class="hero-index">AZ / 26</div></section><section class="ticker"><div>ROBOTICS <span>✦</span> COMPUTER VISION <span>✦</span> AI <span>✦</span> DESIGN <span>✦</span> MAKING</div></section><section class="section-pad section-grid"><div class="section-heading"><p class="kicker">01 / Selected work</p><h2>Projects built from curiosity.</h2></div><div class="project-list">${rows}<a href="/projects/" class="text-link">View every project <span>→</span></a></div></section><section class="section-pad split-callout"><p class="kicker">02 / Currently</p><div><h2>Training machines to recognize art—and designing better ways for people to experience it.</h2><p>My current focus is Atlas, a conversational AI guide that combines robotics, computer vision, and storytelling.</p><a href="/about/" class="text-link">Read my story <span>→</span></a></div></section><section class="section-pad connect-panel"><p class="kicker">03 / Connect</p><h2>Let's make something memorable.</h2><div class="connect-links">${activeLinks}<a href="/links/">All links<span>→</span></a></div></section>`;
}

function about() {
  return `<section class="page-intro section-pad"><p class="kicker">About / 01</p><h1>Curious by default.<br><em>Building on purpose.</em></h1></section><section class="section-pad about-layout"><div class="portrait-placeholder"><span>YOUR PHOTO</span><small>Drop an image here later</small></div><div class="about-copy">${profile.about.map(x=>`<p>${x}</p>`).join("")}</div></section><section class="stats section-pad"><div><strong>7+</strong><span>years in robotics</span></div><div><strong>1st</strong><span>at WRO Canada nationals</span></div><div><strong>∞</strong><span>ideas still in progress</span></div></section><section class="section-pad principles"><p class="kicker">How I work / 02</p><div class="principle-grid"><article><span>01</span><h2>Learn by making</h2><p>The fastest way to understand an idea is to give it a real shape, test it, and improve it.</p></article><article><span>02</span><h2>Design the whole thing</h2><p>Engineering, storytelling, and visual design are stronger when they support the same experience.</p></article><article><span>03</span><h2>Stay curious</h2><p>A project should leave behind better questions, not just a finished object.</p></article></div></section>`;
}

function projectPage() {
  const cards = projects.map((p,i)=>`<article class="project-card"><div class="project-card-top"><span>0${i+1}</span><span>${p.status}</span></div><div><p class="project-meta">${p.category} · ${p.year}</p><h2>${p.title}</h2><p>${p.description}</p></div>${tags(p.tags)}</article>`).join("");
  return `<section class="page-intro section-pad"><p class="kicker">Projects / 02</p><h1>Things I've built,<br><em>tested, and learned from.</em></h1><p>Robotics, computer vision, AI, and hands-on experiments—documented while they're still evolving.</p></section><section class="project-cards section-pad">${cards}</section>`;
}

function linkPage() {
  const stack = links.map((x,i)=>x.enabled?`<a href="${x.url}" target="_blank" rel="noreferrer"><span class="link-index">0${i+1}</span><span><strong>${x.label}</strong><small>${x.note}</small></span><b>↗</b></a>`:`<div class="link-disabled"><span class="link-index">0${i+1}</span><span><strong>${x.label}</strong><small>Add your URL to enable</small></span><b>＋</b></div>`).join("");
  return `<section class="links-page section-pad"><p class="kicker">Links / 03</p><h1>Find me around<br><em>the internet.</em></h1><div class="link-stack">${stack}</div><p class="edit-hint">Want to change these? Everything editable is at the top of <code>site.js</code>.</p></section>`;
}

const page = document.body.dataset.page || "home";
const render = { home, about, projects: projectPage, links: linkPage }[page] || home;
document.querySelector("#app").innerHTML = shell(page, render());
