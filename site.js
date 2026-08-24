const profile = {
  name: "Alex Zhu",
  location: "Montréal, QC",
  role: "Student · maker · teammate",
  intro: "I like learning by building, competing, and getting better at things with other people.",
  about: "I’m a student at Collège Sainte-Anne who enjoys projects with a real-world shape. Robotics is a major part of my life, but it sits alongside 3D printing, photography, sport, music, and the people I get to build and train with."
};

const links = [
  { label: "LinkedIn", note: "A little more about my work", url: "https://www.linkedin.com/in/alex-zhu17/" },
  { label: "GitHub", note: "Code, experiments, and works in progress", url: "https://github.com/alexwithadog" },
  { label: "Instagram", note: "Everyday work and life", url: "https://www.instagram.com/alex.zhu_17/" },
  { label: "See Thru Zhu", note: "Photography and films", url: "https://www.instagram.com/seethruzhu/" },
  { label: "Email", note: "alex.zhu@e.sainteanne.ca", url: "mailto:alex.zhu@e.sainteanne.ca" }
];

const projects = [
  { number: "01", title: "WRO Future Innovators", type: "Team project · 7–8 years in robotics", description: "A long-running robotics journey that now brings together competition, computer vision, hardware, and the challenge of making a useful experience for real people.", href: "/work/wro-future-innovators/", tags: ["WRO", "AI", "Teamwork"], accent: "lime" },
  { number: "02", title: "Maker Experiments", type: "Hands-on practice · 2–3 years", description: "3D printing, Fusion 360, electronics, cameras, and prototypes—the practical side of learning how an idea behaves once it leaves the screen.", href: "/work/maker-experiments/", tags: ["3D printing", "Fusion 360", "Prototyping"], accent: "violet" }
];

const nav = [["home", "Home", "/"], ["about", "Story", "/about/"], ["projects", "Work", "/projects/"], ["links", "Find me", "/links/"]];
const arrow = "<span aria-hidden=\"true\">↗</span>";
const tags = list => `<div class="tag-list">${list.map(tag => `<span>${tag}</span>`).join("")}</div>`;

function brand() {
  return `<a href="/" class="brand" aria-label="Alex Zhu home"><span class="brand-mark">AZ</span><span class="brand-copy"><strong>${profile.name}</strong><small>curiosity · craft · systems</small></span></a>`;
}

function navMarkup(page) {
  return `<nav aria-label="Primary navigation">${nav.map(([key, label, url]) => key === "projects" ? `<div class="nav-dropdown"><a class="${page === key || page === "wro" || page === "maker" ? "active" : ""}" href="${url}">${label}</a><div class="dropdown-menu"><a href="/work/wro-future-innovators/">WRO Future Innovators</a><a href="/work/maker-experiments/">Maker Experiments</a></div></div>` : `<a class="${page === key ? "active" : ""}" href="${url}">${label}</a>`).join("")}</nav>`;
}

function shell(page, content) {
  return `<div class="site-frame"><header class="site-header">${brand()}${navMarkup(page)}</header><main>${content}</main><footer class="site-footer"><div>${brand()}<p>Made in Montréal, with curiosity.</p></div><div class="footer-nav">${nav.map(([, label, url]) => `<a href="${url}">${label}</a>`).join("")}</div><p class="copyright">© ${new Date().getFullYear()} Alex Zhu</p></footer></div>`;
}

function projectCard(project, full = false) {
  return `<article class="project-card ${project.accent}"><div class="project-card-top"><span>${project.number}</span><span>${project.type}</span></div><div><h2>${project.title}</h2><p>${project.description}</p></div>${tags(project.tags)}<a class="card-link" href="${project.href}">${full ? "Explore the project" : "See more"} <span>→</span></a></article>`;
}

function home() {
  const featured = projects.map(project => `<article class="project-row"><span class="project-number">${project.number}</span><div><p class="project-type">${project.type}</p><h3>${project.title}</h3><p>${project.description}</p>${tags(project.tags)}<a class="text-link" href="${project.href}">See more <span>→</span></a></div></article>`).join("");
  return `<section class="hero section-pad"><div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div><p class="eyebrow"><span class="status-dot"></span> Hello, I’m Alex Zhu</p><h1>I make <em>curious ideas</em> real.</h1><p class="hero-copy">${profile.intro}</p><div class="hero-actions"><a class="button button-primary" href="/projects/">See selected work ${arrow}</a><a class="button button-quiet" href="/about/">My story <span>→</span></a></div><div class="hero-stamp"><span>AZ</span><small>01 / 04</small></div></section><section class="ticker" aria-label="Interests"><div>ROBOTICS <span>✦</span> 3D PRINTING <span>✦</span> DRAGON BOAT <span>✦</span> PHOTOGRAPHY <span>✦</span> MUSIC <span>✦</span> MAKING <span>✦</span> ROBOTICS <span>✦</span> 3D PRINTING <span>✦</span> DRAGON BOAT <span>✦</span></div></section><section class="section-pad section-grid"><div class="section-heading"><p class="kicker">01 / Selected work</p><h2>Built through team effort and hands-on experiments.</h2><a class="text-link" href="/projects/">View all work <span>→</span></a></div><div class="project-list">${featured}</div></section><section class="section-pad split-callout"><p class="kicker">02 / Beyond work</p><div><h2>Not everything I learn comes from a project.</h2><p>Dragon boat with 22Dragons, badminton, music, photography, and past years swimming with Dorval Swim Club all shape how I show up: patient, observant, and ready to work with a team.</p><div class="interest-grid"><span>22Dragons · 1 year</span><span>Badminton · 4–5 years</span><span>Photography + film</span><span>Music listener</span></div></div></section><section class="section-pad connect-panel"><p class="kicker">03 / Connect</p><h2>Let’s make something with a point of view.</h2><div class="connect-links">${links.slice(0, 3).map(link => `<a href="${link.url}" target="_blank" rel="noreferrer"><span>${link.label}</span><small>${link.note}</small>${arrow}</a>`).join("")}</div></section>`;
}

function about() {
  const activities = [
    ["Robotics", "7–8 years", "Competition, design, and patient iteration with a team."],
    ["3D printing", "2–3 years", "Designing, prototyping, and mentoring students with Fusion 360."],
    ["Dragon boat", "1 year", "Training and racing with 22Dragons."],
    ["Badminton", "4–5 years", "A sport I keep coming back to at school."],
    ["Swimming", "about 6 years · past", "Formerly with Dorval Swim Club; not currently swimming."],
    ["Photography", "ongoing", "A creative practice through @seethruzhu."],
    ["Music", "ongoing", "Listening closely and collecting new sounds."]
  ].map(([name, time, text]) => `<article><span>${time}</span><h2>${name}</h2><p>${text}</p></article>`).join("");
  return `<section class="page-intro section-pad"><p class="kicker">Story / 01</p><h1>A student who likes<br><em>making things real.</em></h1></section><section class="section-pad about-layout"><div class="portrait-art" aria-label="Alex Zhu monogram"><span>AZ</span><i>KEEP<br>LEARNING<br>IN<br>MOTION</i></div><div class="about-copy"><p>${profile.about}</p><div class="about-facts"><div><span>Based in</span><strong>${profile.location}</strong></div><div><span>Student</span><strong>Collège Sainte-Anne</strong></div><div><span>Roles</span><strong>Robotics teammate · 3D-printing mentor · photographer</strong></div></div></div></section><section class="section-pad principles"><p class="kicker">In motion / 02</p><div class="principle-grid activity-grid">${activities}</div></section>`;
}

function projectPage() {
  return `<section class="page-intro section-pad"><p class="kicker">Work / 02</p><h1>Two ways I<br><em>learn by doing.</em></h1><p>One is team competition at a larger scale. The other is a growing hands-on practice of making, testing, and teaching.</p></section><section class="project-cards section-pad">${projects.map(project => projectCard(project, true)).join("")}</section>`;
}

function wroPage() {
  return `<section class="detail-hero section-pad"><p class="kicker">Work / 01</p><p class="detail-label">WRO Future Innovators</p><h1>Building a better<br><em>way to look closer.</em></h1><p>Future Innovators is where my team brings together years of robotics competition, creative problem-solving, and the wish to make technology useful to people.</p><a class="text-link" href="/projects/">Back to work <span>←</span></a></section><section class="detail-grid section-pad"><p class="kicker">The direction</p><div><h2>One project, many connected systems.</h2><p>Our current WRO Future Innovators direction explores a wearable conversational museum guide: technology that can notice an artwork, understand context, and begin a natural conversation instead of giving someone a screen full of facts.</p><div class="detail-blocks"><article><span>01</span><h3>Atlas</h3><p>A conversational guide designed around curiosity, short helpful explanations, and a more personal museum experience.</p></article><article><span>02</span><h3>Artwork vision</h3><p>An evolving, annotated artwork dataset—625+ images so far—used to explore dependable visual recognition.</p></article><article><span>03</span><h3>Jetson Orin NX</h3><p>An edge-computing platform for bringing camera and AI work closer to the physical prototype.</p></article></div></div></section><section class="section-pad split-callout"><p class="kicker">What it teaches</p><div><h2>Good robotics is not only about getting the hardware to work.</h2><p>It is also about the person using it, the story it tells, and the repeated testing that turns a big idea into something trustworthy.</p></div></section>`;
}

function makerPage() {
  return `<section class="detail-hero section-pad"><p class="kicker">Work / 02</p><p class="detail-label">Maker Experiments</p><h1>Ideas become clearer<br><em>once you can hold them.</em></h1><p>This is the hands-on side of my work: the prints, parts, camera tests, and small failures that teach you what an idea needs next.</p><a class="text-link" href="/projects/">Back to work <span>←</span></a></section><section class="detail-grid section-pad"><p class="kicker">The workshop</p><div><h2>Making is how I learn what a design is really asking for.</h2><p>For the last 2–3 years, I’ve used 3D printing and Fusion 360 to take projects past the sketch stage. I also help other students get started with 3D design, because the fastest way to learn a tool is often to teach it clearly.</p><div class="detail-blocks"><article><span>01</span><h3>3D printing</h3><p>Parts, prototypes, and the quick print-test-adjust loop that makes physical ideas better.</p></article><article><span>02</span><h3>Fusion 360 mentoring</h3><p>Supporting students as they learn to design for print and turn a first model into a useful object.</p></article><article><span>03</span><h3>Robotics + cameras</h3><p>Experimenting with electronics, camera setups, and physical systems that connect software to the real world.</p></article></div></div></section><section class="section-pad split-callout"><p class="kicker">What stays with me</p><div><h2>Prototype early. Keep the useful mistakes.</h2><p>There is a specific kind of learning that only happens when a design prints wrong, a component does not fit, or a camera sees something unexpected.</p></div></section>`;
}

function linkPage() {
  const stack = links.map((link, index) => `<a href="${link.url}" ${link.url.startsWith("mailto:") ? "" : "target=\"_blank\" rel=\"noreferrer\""}><span class="link-index">0${index + 1}</span><span><strong>${link.label}</strong><small>${link.note}</small></span>${arrow}</a>`).join("");
  return `<section class="links-page section-pad"><p class="kicker">Find me / 03</p><h1>More places to<br><em>keep in touch.</em></h1><div class="link-stack">${stack}</div><p class="link-note">I’m always building, learning, and collecting better questions.</p></section>`;
}

function initializeTicker() {
  const ticker = document.querySelector(".ticker");
  if (!ticker) return;
  const interests = ["Robotics", "3D printing", "Dragon boat", "Photography", "Music", "Making"];
  const group = `<div class="ticker-group">${interests.map(item => `<span class="ticker-item">${item}<b aria-hidden="true">✦</b></span>`).join("")}</div>`;
  ticker.innerHTML = `<div class="ticker-track">${group}${group}</div>`;
}

function initializeMotion() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.body.classList.add("motion-ready");
  if (reducedMotion) return;

  const selectors = [
    ".section-heading", ".project-row", ".split-callout > *", ".connect-panel > *",
    ".page-intro > *", ".about-layout > *", ".about-facts > *", ".principle-grid article",
    ".project-card", ".detail-hero > *", ".detail-grid > *", ".detail-blocks article",
    ".links-page > *", ".link-stack a", ".site-footer > *"
  ].join(",");
  const revealTargets = [...document.querySelectorAll(selectors)];
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  revealTargets.forEach(element => observer.observe(element));

  document.querySelectorAll('a[href^="/"]:not([target])').forEach(link => {
    link.addEventListener("click", event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.pathname === window.location.pathname && destination.hash === window.location.hash) return;
      event.preventDefault();
      document.body.classList.add("page-leaving");
      window.setTimeout(() => window.location.assign(destination.href), 260);
    });
  });
}

const page = document.body.dataset.page || "home";
const render = { home, about, projects: projectPage, links: linkPage, wro: wroPage, maker: makerPage }[page] || home;
const motionStyles = document.createElement("link");
motionStyles.rel = "stylesheet";
motionStyles.href = "/motion.css";
document.head.append(motionStyles);
const layoutStyle = document.createElement("style");
layoutStyle.textContent = ".hero{min-height:clamp(590px,70vh,740px);padding-top:clamp(80px,6vw,105px);padding-bottom:clamp(45px,4vw,70px)}";
document.head.append(layoutStyle);
document.querySelector("#app").innerHTML = shell(page, render());
initializeTicker();
initializeMotion();
