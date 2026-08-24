// ============================================================
// CUSTOMIZE YOUR SITE HERE — edit this section, not the layout.
// ============================================================
const profile = {
  name: "Alex Zhu",
  monogram: "AZ",
  role: "Student · Builder · Robotics",
  location: "Montréal, Canada"
};

const links = [
  { label: "GitHub", url: "https://github.com/alexwithadog", enabled: true },
  { label: "Instagram", url: "#", enabled: false },
  { label: "LinkedIn", url: "#", enabled: false },
  { label: "Email", url: "#", enabled: false }
];

const projects = [
  { title: "Atlas" },
  { title: "Artwork Vision Dataset" },
  { title: "WRO Future Innovators" },
  { title: "Maker Experiments" }
];

const nav = [
  ["home", "Home", "/"], ["about", "About", "/about/"],
  ["projects", "Projects", "/projects/"], ["links", "Links", "/links/"]
];

function shell(page, content) {
  return `<div class="site-frame"><header class="site-header"><a href="/" class="brand"><span class="brand-mark">${profile.monogram}</span><span><strong>${profile.name}</strong><small>${profile.role}</small></span></a><nav aria-label="Primary navigation">${nav.map(([key,label,url]) => `<a class="${page===key?'active':''}" href="${url}">${label}</a>`).join("")}</nav></header><main>${content}</main><footer class="site-footer"><div><span class="footer-mark">AZ</span></div><div class="footer-nav">${nav.map(([,label,url]) => `<a href="${url}">${label}</a>`).join("")}</div></footer></div>`;
}

function home() {
  const rows = projects.slice(0,3).map((p,i) => `<article class="project-row"><span class="project-number">0${i+1}</span><div><h3>${p.title}</h3></div></article>`).join("");
  return `<section class="hero section-pad"><h1>I build things that <em>move, see,</em> and talk.</h1><div class="hero-index">AZ / 26</div></section><section class="ticker"><div>ROBOTICS <span>✦</span> COMPUTER VISION <span>✦</span> AI <span>✦</span> DESIGN <span>✦</span> MAKING</div></section><section class="section-pad section-grid"><div class="section-heading"><p class="kicker">01 / Selected work</p><h2>Projects built from curiosity.</h2></div><div class="project-list">${rows}</div></section><section class="section-pad split-callout"><p class="kicker">02 / Currently</p><div><h2>Training machines to recognize art—and designing better ways for people to experience it.</h2></div></section><section class="section-pad connect-panel"><p class="kicker">03 / Connect</p><h2>Let's make something memorable.</h2></section>`;
}

function about() {
  return `<section class="page-intro section-pad"><p class="kicker">About / 01</p><h1>Curious by default.<br><em>Building on purpose.</em></h1></section><section class="section-pad principles"><p class="kicker">How I work / 02</p><div class="principle-grid"><article><h2>Learn by making</h2></article><article><h2>Design the whole thing</h2></article><article><h2>Stay curious</h2></article></div></section>`;
}

function projectPage() {
  const cards = projects.map((p,i)=>`<article class="project-card"><div class="project-card-top"><span>0${i+1}</span></div><h2>${p.title}</h2></article>`).join("");
  return `<section class="page-intro section-pad"><p class="kicker">Projects / 02</p><h1>Things I've built,<br><em>tested, and learned from.</em></h1></section><section class="project-cards section-pad">${cards}</section>`;
}

function linkPage() {
  const stack = links.map((x,i)=>`<div class="link-disabled"><span class="link-index">0${i+1}</span><strong>${x.label}</strong></div>`).join("");
  return `<section class="links-page section-pad"><p class="kicker">Links / 03</p><h1>Find me around<br><em>the internet.</em></h1><div class="link-stack">${stack}</div></section>`;
}

const page = document.body.dataset.page || "home";
const render = { home, about, projects: projectPage, links: linkPage }[page] || home;
document.querySelector("#app").innerHTML = shell(page, render());
