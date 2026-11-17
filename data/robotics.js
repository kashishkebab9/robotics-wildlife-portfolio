// Robotics content, sourced from kashishgarg.com (Nov 2026).
window.PROFILE = {
  name: "Kashish Garg",
  role: "Senior Robotics Engineer",
  org: "MeshMap Labs",
  blurb: "Robotics engineer with 7+ years across aerial, subsea and legged systems. Master's from the University of Pennsylvania. Interested in systems engineering, controls, embedded systems and SLAM. On weekends: a long lens, a park, and whatever is moving in the trees.",
  email: "kashishgarg9@gmail.com",
  github: "https://github.com/kashishkebab9",
  linkedin: "https://www.linkedin.com/in/kashishgarg/",
  camera: "Sony α7R IV",
  lenses: ["Tamron 150-500mm F5-6.7", "Sony FE 100-400mm GM", "Tamron 28-75mm F2.8"],
};

window.PROJECTS = [
  { id: "aerosimian", title: "AeroSimian", sub: "A bio-inspired, brachiating-flying robot", when: "06/25 – 12/25", tag: "Master's thesis", status: "fielded",
    stack: ["Mechanism design", "Controls", "Hybrid locomotion"],
    body: "My master's thesis at Penn: a robot that swings branch to branch like a gibbon and flies when there is no branch to reach. It joins the two halves of this site: an animal's way of moving, rebuilt in carbon fibre and code.",
    fig: "aerosimian" },
  { id: "emulidar", title: "EmuLiDAR", sub: "Simulated LiDAR for a Crazyflie", when: "10/24 – present", tag: "Education / research", status: "growing",
    stack: ["Crazyflie", "LiDAR odometry", "Sensor fusion", "State estimation"],
    body: "Built with Spencer Folk: an emulated LiDAR for a Crazyflie micro-quadrotor, intended to teach LiDAR odometry, sensor fusion and state estimation. Being folded into Penn's MEAM 620 curriculum.",
    fig: "emulidar" },
  { id: "ferret", title: "Ferret", sub: "Omni-wheeled robot, from bare PCB up", when: "09/24 – 01/25", tag: "Embedded", status: "fielded",
    stack: ["STM32", "PCB design", "Embedded C", "HAL from scratch"],
    body: "Designed the PCB around an STM32 and wrote the entire embedded C stack: toolchain, hardware abstraction layer and controller. It takes velocity commands from a Raspberry Pi or an RC transmitter.",
    fig: "omni" },
  { id: "taskalloc", title: "Task Allocation Architecture", sub: "Online multi-robot coordination with task precedence", when: "06/23 – 07/24", tag: "Paper · arXiv 2025", status: "growing",
    stack: ["ROS", "Systems architecture", "Multi-robot"],
    body: "A ROS-based architecture that traverses task-graph topologies asynchronously, built with Walker Gosrich et al. for the paper “Online Multi-Robot Coordination and Cooperation with Task Precedence Relationships” (arXiv 2025). I also wrote all the task-level logic for the exploration node.",
    fig: "graph" },
  { id: "starling", title: "Starling 2 Integration", sub: "kr_mav_control on ModalAI hardware", when: "09/23 – 04/24", tag: "GRASP Lab", status: "fielded",
    stack: ["kr_mav_control", "ModalAI VOXL", "PX4"],
    body: "Ported GRASP Lab's kr_mav_control stack onto ModalAI's Starling 2. Because the platform ships as a closed, out-of-the-box autonomy package, the port was mostly hacking around it rather than integrating with it.",
    fig: "quad2" },
  { id: "frontier", title: "Frontier Exploration", sub: "with opportunistic communication", when: "11/22 – 01/23", tag: "Paper + tutorial", status: "fielded",
    stack: ["ROS", "C++", "grid_map", "A*"],
    body: "A frontier-based exploration ROS node as proof of concept for a new robot-communication framework. Flood-fill finds the frontiers, they are clustered, centroids are taken, and A* picks the nearest one. The process is written up as a tutorial.",
    fig: "frontier" },
  { id: "quadtree", title: "Quadtree A*", sub: "Cell decomposition + search", when: "08/22 – 09/22", tag: "Study", status: "seed",
    stack: ["Python", "Quadtrees", "A*"],
    body: "A study of cell decomposition, with A* run on the quadtree graph. Next step: store the decomposition in a Z-order-curve structure.",
    fig: "quadtree" },
  { id: "quadruped", title: "Quadruped Simulation", sub: "Forward & Jacobian kinematics in ROS", when: "11/19 – 04/20", tag: "Personal", status: "seed",
    stack: ["URDF", "MATLAB", "ROS Kinetic", "Python"],
    body: "Converted a SolidWorks model to URDF, derived the forward and Jacobian kinematics in MATLAB, and implemented them in ROS. Includes a parabolic foot-trajectory generator driven by an Xbox 360 controller.",
    fig: "quadruped" },
  { id: "prosthetic", title: "Robotic Prosthetic Arm", sub: "Tendon-driven, EMG-controlled", when: "09/17 – 05/18", tag: "NYU", status: "seed",
    stack: ["Mechanical design", "Servos", "MLP", "Myo band"],
    body: "Five servos with fishing-line tendons drive the fingers. An MLP maps Myo armband EMG readings to grasp actions.",
    fig: "hand" },
];

window.WORK = [
  { org: "MeshMap Labs", url: "https://www.meshmap.com/", role: "Senior Robotics Engineer", when: "2026 – now", note: "" },
  { org: "UPenn GRASP Lab", url: "https://www.grasp.upenn.edu/", role: "Research Project Manager", when: "2022 – 2025", note: "Brought industry practice to lab research; ran lab resources and operations." },
  { org: "Exyn Technologies", url: "https://www.exyn.com/", role: "Field / Autonomy Integration Engineer", when: "2021 – 2022", note: "Wrote the C++ driver that put Exyn's aerial autonomy on Boston Dynamics' Spot; delivered drones that map GPS-denied mines." },
  { org: "Houston Mechatronics (Nauticus)", url: "https://nauticusrobotics.com/", role: "Mechatronics Design Engineer", when: "2019 – 2021", note: "Transforming-actuator mechanisms for Aquanaut; a 3000 m pressure-compensated enclosure; tests at NASA's Neutral Buoyancy Lab." },
  { org: "901D", url: "https://www.901d.com/", role: "Mechanical Design Engineer, CFD", when: "2018 – 2019", note: "MIL-SPEC enclosures for Raytheon, Boeing and General Dynamics; SolidWorks Flow thermal analysis." },
];

window.EDU = [
  { school: "University of Pennsylvania", url: "https://www.grasp.upenn.edu/academics/masters-degree-program/", deg: "M.S.E. Robotics", when: "2024 – 2025" },
  { school: "NYU Tandon", url: "https://engineering.nyu.edu/", deg: "B.S. Mechanical Eng., minor Aerospace", when: "2014 – 2018" },
];

// Line-drawing figures. Stroke uses currentColor so every theme can tint them.
// Hover hooks (styled in index.html): .a = stroke lights up in the accent, .af = fill lights up,
// .ov = overlay only shown while live, k-* = animations (swing, spin, bob, rotor, march, draw, pulse, step, curl).
window.FIG = (function () {
  const S = (inner, vb = "0 0 200 140") =>
    `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  const o = (x, y) => `style="transform-origin:${x}px ${y}px"`;
  const rotor = (x, y, r = 16) => `<ellipse class="a k-rotor" cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.28}"/><circle class="af" cx="${x}" cy="${y}" r="1.6" fill="currentColor"/>`;
  const dim = (x1, y1, x2, y2, t) => `<g stroke-width=".6" opacity=".6"><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-dasharray="2 2"/></g><text x="${(x1 + x2) / 2}" y="${(y1 + y2) / 2 - 3}" font-size="6" fill="currentColor" stroke="none" text-anchor="middle" font-family="monospace">${t}</text>`;
  const draw = (d, len, delay = 0, w = 1.6) => `<path class="ov a k-draw" d="${d}" stroke-width="${w}" style="--len:${len};--d:${delay}s"/>`;
  const figs = {
    aerosimian: S(`<path d="M10 22 Q100 8 190 24" stroke-width="2"/><path d="M60 16 l-4 -6 M140 17 l3 -7" />
      <circle class="a" cx="74" cy="18" r="3"/>
      <g class="k-swing" ${o(74, 18)}>
        <line class="a" x1="74" y1="21" x2="92" y2="62"/><line x1="92" y1="62" x2="120" y2="70" stroke-dasharray="3 2"/>
        <rect class="a" x="84" y="58" width="32" height="16" rx="3"/>${rotor(70, 78, 14)}${rotor(130, 78, 14)}<line x1="84" y1="66" x2="70" y2="78"/><line x1="116" y1="66" x2="130" y2="78"/>
      </g>
      <path class="a k-march" d="M92 62 A30 30 0 0 1 128 40" stroke-dasharray="1 3" opacity=".7"/><text x="132" y="40" font-size="7" fill="currentColor" stroke="none" font-family="monospace">θ swing</text>
      ${dim(70, 108, 130, 108, "brachiate ⇄ fly")}`),
    quad: S(`${rotor(50, 40)}${rotor(150, 40)}${rotor(50, 100)}${rotor(150, 100)}<line x1="50" y1="40" x2="150" y2="100"/><line x1="150" y1="40" x2="50" y2="100"/><rect class="a" x="88" y="62" width="24" height="16" rx="2"/>
      <g class="rays a k-spin" ${o(100, 70)} stroke-width=".7" stroke-dasharray="1 3" opacity=".75">${Array.from({ length: 13 }, (_, i) => { const a = (i / 13) * Math.PI * 2; return `<line x1="100" y1="70" x2="${100 + Math.cos(a) * 90}" y2="${70 + Math.sin(a) * 62}"/>`; }).join("")}</g><circle class="af" cx="100" cy="70" r="3" fill="currentColor"/>`),
    emulidar: (() => {
      // point mass flies a cubic spline, then an isometric cube point cloud resolves next to it
      const P = "M16 116 C30 62 58 26 92 24 S170 20 184 62";
      const wp = [[16, 116], [92, 24], [184, 62]];
      const cx = 128, cy = 116, s = 30, ex = [s * .866, -s * .5], ey = [-s * .866, -s * .5], ez = [0, -s];
      const at = (u, v, w) => [cx + u * ex[0] + v * ey[0] + w * ez[0], cy + u * ex[1] + v * ey[1] + w * ez[1]];
      const seen = new Set(), pts = [], n = 5;
      const add = (u, v, w, o) => { const k = [u, v, w].map(t => t.toFixed(2)).join(); if (seen.has(k)) return; seen.add(k);
        const h = Math.sin(u * 91.7 + v * 47.3 + w * 13.1) * 43758.5, j = (h - Math.floor(h)) - .5;
        const [x, y] = at(u, v, w); pts.push([x + j * 1.6, y + j * 1.2, o]); };
      for (let i = 0; i <= n; i++) for (let k = 0; k <= n; k++) { const a = i / n, b = k / n; add(a, b, 1, .4); add(a, 0, b, 1); add(0, a, b, .7); }
      const xs = pts.map(p => p[0]), x0 = Math.min(...xs), x1 = Math.max(...xs);
      return S(`<path d="${P}" stroke-dasharray="2 3" stroke-width=".8" opacity=".45"/>
        ${wp.map(([x, y]) => `<path d="M${x - 2.5} ${y} h5 M${x} ${y - 2.5} v5" stroke-width=".7" opacity=".55"/>`).join("")}
        <path class="ov a k-trace" d="${P}" pathLength="100" stroke-width="1.6"/>
        <g class="ov">${pts.map(([x, y, o]) => `<g opacity="${o}"><circle class="af k-cloud" style="--d:${(((x - x0) / (x1 - x0)) * .5).toFixed(2)}s" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${o === 1 ? 1.25 : 1.05}" fill="currentColor" stroke="none"/></g>`).join("")}</g>
        <g class="k-fly" style="offset-path:path('${P}');offset-rotate:0deg"><circle r="7" class="af" fill="currentColor" fill-opacity=".12" stroke="none"/><circle class="af" r="3.4" fill="currentColor" stroke="none"/></g>
        <text x="184" y="132" font-size="6" fill="currentColor" stroke="none" text-anchor="end" font-family="monospace">x(t) · spline → cloud</text>`);
    })(),
    quad2: S(`<g class="k-bob">${rotor(40, 50, 20)}${rotor(160, 50, 20)}<path d="M40 50 L80 66 H120 L160 50"/><rect class="a" x="78" y="58" width="44" height="22" rx="4"/><circle class="a" cx="100" cy="88" r="5"/><path d="M90 80 L86 112 M110 80 L114 112 M80 112 h12 M108 112 h12"/>
      <text x="100" y="72" font-size="6" fill="currentColor" stroke="none" text-anchor="middle" font-family="monospace">VOXL</text></g>`),
    omni: S(`<g class="k-spin" ${o(100, 70)}><circle cx="100" cy="70" r="44"/><g>${[0, 120, 240].map(d => { const a = (d - 90) * Math.PI / 180, x = 100 + Math.cos(a) * 44, y = 70 + Math.sin(a) * 44; return `<g transform="translate(${x} ${y}) rotate(${d})"><rect class="a" x="-12" y="-5" width="24" height="10" rx="2"/><line x1="-8" y1="-5" x2="-8" y2="5"/><line x1="0" y1="-5" x2="0" y2="5"/><line x1="8" y1="-5" x2="8" y2="5"/></g>`; }).join("")}</g></g>
      <rect x="82" y="56" width="36" height="28" rx="1"/><rect class="a" x="94" y="64" width="12" height="12"/><path d="M82 62 h-6 M82 70 h-6 M82 78 h-6 M118 62 h6 M118 70 h6 M118 78 h6"/><text x="100" y="92" font-size="5" fill="currentColor" stroke="none" text-anchor="middle" font-family="monospace">STM32</text>`),
    graph: S(`${[[30, 30, "A", 0], [30, 100, "B", 0], [90, 65, "C", .35], [150, 30, "D", .7], [150, 100, "E", .7], [185, 65, "F", 1.05]].map(([x, y, t, d]) => `<circle class="a k-node" style="--d:${d}s" cx="${x}" cy="${y}" r="11"/><text x="${x}" y="${y + 2.5}" font-size="8" fill="currentColor" stroke="none" text-anchor="middle" font-family="monospace">${t}</text>`).join("")}
      <path d="M41 34 L79 60 M41 96 L79 70 M101 60 L139 35 M101 70 L139 95 M161 34 L176 58 M161 96 L176 72"/><path d="M76 57 l3 3 -4 1 M76 73 l3 -3 -4 -1 M136 37 l3 -2 -1 4 M136 93 l3 2 -1 -4" />
      ${draw("M41 34 L79 60", 48, .1)}${draw("M41 96 L79 70", 48, .1)}${draw("M101 60 L139 35", 48, .45)}${draw("M101 70 L139 95", 48, .45)}${draw("M161 34 L176 58", 30, .8)}${draw("M161 96 L176 72", 30, .8)}`),
    frontier: S(`${(() => { let o = ""; for (let r = 0; r < 9; r++) for (let c = 0; c < 13; c++) { const x = 10 + c * 14, y = 8 + r * 14, d = Math.hypot(c - 4, r - 4); const known = d < 3.6 + Math.sin(c * 1.3 + r) * 0.9; const wall = known && (c === 1 || r === 8 || (c === 6 && r < 3)); const fr = !known && d < 4.8 + Math.sin(c * 1.3 + r) * 0.9; o += `<rect x="${x}" y="${y}" width="13" height="13" ${wall ? 'fill="currentColor" fill-opacity=".85"' : fr ? `class="af k-pulse" style="--d:${((c + r) % 5) * .12}s" fill="currentColor" fill-opacity=".28"` : known ? '' : 'stroke-opacity=".2"'} stroke-width=".5"/>`; } return o; })()}
      <circle class="af" cx="73" cy="70" r="4" fill="currentColor"/><path class="a k-march" d="M73 70 L120 40" stroke-dasharray="3 2" stroke-width="1.6"/><circle class="a" cx="120" cy="40" r="3"/>`),
    quadtree: S(`<rect x="30" y="10" width="140" height="120"/><path d="M100 10 V130 M30 70 H170 M65 10 V70 M30 40 H100 M135 70 V130 M100 100 H170 M117 70 V100 M100 85 H135 M47 10 V40 M30 25 H65"/>
      <rect class="af" x="47" y="40" width="18" height="30" fill="currentColor" fill-opacity=".8"/><rect class="af" x="135" y="100" width="35" height="30" fill="currentColor" fill-opacity=".8"/>
      <path d="M38 18 L82 55 L117 92 L152 115" stroke-dasharray="3 2" stroke-width="1.6"/>${draw("M38 18 L82 55 L117 92 L152 115", 160, 0, 2.2)}<circle class="af" cx="38" cy="18" r="3" fill="currentColor"/>`),
    quadruped: S(`<rect class="a" x="50" y="40" width="100" height="24" rx="6"/><circle class="a" cx="160" cy="46" r="8"/>
      ${[[62, 1], [138, -1], [80, 1], [120, -1]].map(([x, s], i) => `<g class="k-step" style="transform-origin:${x}px 64px;--d:${i === 0 || i === 3 ? 0 : -.45}s" opacity="${i > 1 ? .45 : 1}"><circle cx="${x}" cy="64" r="3"/><line class="a" x1="${x}" y1="64" x2="${x - 10 * s}" y2="92"/><circle cx="${x - 10 * s}" cy="92" r="2.4"/><line class="a" x1="${x - 10 * s}" y1="92" x2="${x + 4 * s}" y2="122"/></g>`).join("")}
      <path d="M40 124 H170" stroke-width=".6"/><path class="a k-march" d="M128 122 Q140 104 152 122" stroke-dasharray="2 2"/>`),
    sub: S(`<path d="M0 20 Q25 14 50 20 T100 20 T150 20 T200 20" stroke-width=".8" opacity=".6"/>
      <path d="M40 70 Q40 50 70 50 H130 Q160 50 160 70 Q160 90 130 90 H70 Q40 90 40 70Z"/><path d="M70 50 V38 H100 V50"/><circle cx="148" cy="70" r="6"/>
      <path d="M40 66 H26 M40 74 H26 M22 60 V80" /><path d="M100 90 L92 110 L104 118 M120 90 L128 110 L116 118"/>
      <g stroke-width=".7" opacity=".6" stroke-dasharray="2 3"><path d="M5 60 H20 M5 70 H20 M5 80 H20"/><path d="M176 64 l10 0 M176 76 l10 0"/></g>
      <text x="100" y="134" font-size="6" fill="currentColor" stroke="none" text-anchor="middle" font-family="monospace">↓ 3000 m · pressure-compensated</text>`),
    hand: S(`<path class="a" d="M70 130 V80 Q70 70 80 70 H120 Q130 70 130 80 V130"/>${[78, 92, 106, 120].map((x, i) => { const t = (i === 1 || i === 2 ? 8 : 0); return `<g class="k-curl" style="transform-origin:${x}px 70px;--d:${i * .12}s"><path class="a" d="M${x} 70 V${30 - t}"/><path d="M${x - 5} 70 V${32 - t} Q${x} ${24 - t} ${x + 5} ${32 - t} V70" opacity=".5"/></g>`; }).join("")}
      <path d="M70 92 Q52 84 48 64" /><path class="a k-march" d="M78 100 Q74 112 70 118 M92 100 V118 M106 100 V118 M120 100 Q124 112 128 118" stroke-dasharray="1 2"/><rect class="a" x="80" y="104" width="40" height="12" rx="2"/>`),
  };
  return id => figs[id] || "";
})();

// Notebook: blog posts / things being explored. `href` can point at a local page
// (notes/*.html) or, until migrated, the old Google Site. `children` = sub-links.
window.NOTES = [
  { title: "Frontier-Based Exploration in ROS & C++", kind: "Tutorial", when: "2023", status: "published",
    tags: ["ROS", "C++", "grid_map", "A*"], href: "notes/frontier-exploration.html",
    dek: "Flood-fill, cluster, centroid, A*: a five-step loop that sends a robot to the edge of what it knows.",
    children: [
      { title: "Step 0: Architecture", href: "notes/frontier-exploration.html#s0" },
      { title: "Step 1: Find frontiers", href: "notes/frontier-exploration.html#s1" },
      { title: "Step 2: Cluster them", href: "notes/frontier-exploration.html#s2" },
      { title: "Steps 3–4: Centroids & A*", href: "notes/frontier-exploration.html#s3" },
    ] },
  { title: "An Exploration into Optimal Control", kind: "Series", when: "2024", status: "published",
    tags: ["Optimal control", "Value iteration", "Python"], href: "notes/optimal-control-1-value-iteration.html",
    dek: "Working through Russ Tedrake's Underactuated Robotics, from value iteration on a simple pendulum to a real Quanser pendulum.",
    children: [
      { title: "Part I: Value Iteration", href: "notes/optimal-control-1-value-iteration.html" },
      { title: "Part II: Quanser Pendulum (in progress)", href: null },
    ] },
  { title: "MEAM 520 Course Notes", kind: "Notes", when: "2024", status: "published",
    tags: ["Kinematics", "Manipulation", "Penn"], href: "https://www.kashishgarg.com/blog/meam-520-course-notes", external: true,
    dek: "Notes from Penn's Introduction to Robotics: transforms, kinematics and planning for manipulators.", children: [] },
];

window.SKILLS = {
  "Software": ["C++", "Python", "ROS / ROS 2", "Embedded C", "MATLAB"],
  "Hardware": ["STM32", "PCB design", "PX4 / VOXL", "Crazyflie", "Spot"],
  "Mechanical": ["SolidWorks", "CFD (SolidWorks Flow)", "Pressure-rated enclosures", "Mechanism design"],
  "Domains": ["SLAM", "State estimation", "Controls", "Multi-robot systems", "Systems engineering"],
};

// Media + links per project, sourced from kashishgarg.com/projects (Nov 2026).
// type: 'youtube' (video id) | 'drive' (Google Drive file id; video or PDF). doc:true = tall document viewer.
(function () {
  const EXTRA = {
    aerosimian: { media: [
        { type: "youtube", id: "mhc-sYPZWrQ", label: "Thesis talk", title: "ROBO Thesis Presentations 2025, GRASP Lab" },
        { type: "drive", id: "1Y_54FBYkUBUf-jj-bPNOU7PJLvT9QTeK", label: "Thesis PDF", title: "AeroSimian: A Bio-Inspired, Brachiating-Flying Robot", doc: true } ],
      links: [] },
    emulidar: { media: [ { type: "drive", id: "1uDKxDQLwtwKeke6yioTRYWDk4YmeFz0w", label: "Demo", title: "EmuLiDAR demo" } ],
      links: [ { label: "GitHub", href: "https://github.com/spencerfolk/emulidar" } ] },
    frontier: { media: [ { type: "youtube", id: "WtHPOUjRNWU", label: "Video", title: "Scarab Exploration" } ],
      links: [ { label: "Paper", href: "https://www.danmox.com/projects/oc.html" }, { label: "Tutorial", href: "notes/frontier-exploration.html", internal: true } ] },
    ferret: { photo: "assets/robotics/ferret-pcb.webp", imgAlt: "Ferret rev 0.2 PCB render: STM32, motor drivers and connectors", media: [], links: [ { label: "GitHub", href: "https://github.com/kashishkebab9/omni-mapper" } ] },
    quadtree: { media: [ { type: "youtube", id: "9d3CE7SoYgA", label: "Video", title: "A* path planning on quadtrees" } ],
      links: [ { label: "GitHub", href: "https://github.com/kashishkebab9/quadtree_visualization" } ] },
    starling: { media: [], links: [ { label: "starling2_interface", href: "https://github.com/KumarRobotics/starling2_interface" }, { label: "kr_mav_control", href: "https://github.com/KumarRobotics/kr_mav_control" } ] },
    quadruped: { media: [ { type: "youtube", id: "2AXq1Yeof0E", label: "Video", title: "Quadruped kinematics" } ],
      links: [ { label: "GitHub", href: "https://github.com/kashishkebab9/bubastis_quadruped_ros" } ] },
    taskalloc: { media: [ { type: "pdf", src: "assets/papers/gosrich2025-task-precedence.pdf", label: "Paper", title: "Online Multi-Robot Coordination and Cooperation with Task Precedence Relationships (arXiv 2509.15052)", doc: true } ],
      links: [ { label: "arXiv", href: "https://arxiv.org/abs/2509.15052" } ] },
    prosthetic: { media: [], links: [] },
  };
  window.PROJECTS.forEach(p => Object.assign(p, { media: [], links: [] }, EXTRA[p.id] || {}));
})();
