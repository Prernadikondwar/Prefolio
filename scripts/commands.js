var youtube = ""; // removed per request
var github = "https://github.com/prerna-dikondwar";
var linkedin = "https://www.linkedin.com/in/prerna-dikondwar/";
var email = "mailto:prernadikondwar21@gmail.com";
var tryhackme = ""; // removed per request

var help = [
  "<br>",
  '<span class="command">normal</span>             The "normal" version of the website',
  '<span class="command">aboutme</span>            Who am I?',
  '<span class="command">experience</span>         View my relevant work experience',
  '<span class="command">certifications</span>     Display my professional achievements',
  '<span class="command">education</span>          See where and what I study',
  '<span class="command">resume</span>             Did you save my CV?',
  '<span class="command">projects</span>           View my projects',
  '<span class="command">contact</span>            View my socials',
  '<span class="command">clear</span>              Clear terminal',
  "<br>",
];

var aboutme = [
  "<br>",
  "Hello, I'm <span class='white-glow'>Prerna</span>! 👋",
  "<br>",
  "<span class='white-glow'>My fields of interest are:</span>",
  "  │  Software Development",
  "  ├─ Web Development (Frontend & Backend)",
  "  └─ UI/UX Design",
  "<br>",
  "<span class='white-glow'>About me:</span>",
  "  │",
  "  ├─ Hello there! I am passionate about Web Development,",
  "  ├─ My aim is to become a skilled Software Developer.",
  "  │",
  "  ├─ I love exploring new tools and technologies,",
  "  ├─ and using them to build creative projects.",
  "  │",
  "  ├─ You can learn about some of my projects",
  "  ├─ using the <span class='green-glow'>'projects'</span> command.",
  "  │",
  "  ├─ Check out my GitHub account to see more of what I've made",
  "  ├─ using the <span class='green-glow'>'github'</span> command.",
  "  │",
  "  └─ Contact me at <a href='mailto:prernadikondwar21@gmail.com'><span class='green-glow'>'prernadikondwar21@gmail.com'</span></a>.",
  "<br>",
];

var experience = [
  "<br>",
  "I've worked with 👨‍💻",
  "<br>",
  "<span class='white-glow'>Web Development</span>",
  "  ├─ <i>Coder Gallery (August 2025 - present)</i>",
  "  ├─ Currently working at Coder Gallery, a web designing startup, where I contribute to creating responsive websites and user-friendly designs",
  "  │  I am gaining hands-on experience in web development, UI/UX design, and learning to adapt quickly in a fast-paced startup environment.",
  "  └─ <i> Python, git.</i>",

  "<br>",
  "<span class='white-glow'>Open Source Developer</span>",
  "  ├─ <i>Girlscript Summer Of Code</i>",
  "  ├─ Contributed to open-source projects as part of the GirlScript Summer of Code.",
  "  │  Worked on bug fixes, feature enhancements, and documentation improvements while collaborating with mentors",
  "  └─ and contributors. Gained practical exposure to Git, GitHub, and teamwork in open-source development.",
  "<br>",
  //"<span class='white-glow'>Database Services Analyst</span>",
  //"  ├─ <i>Regina Maria (June 2023 - February 2024)</i>",
 // "  ├─ Developed and deployed an AI assistant using Azure OpenAI Playground",
 // "  │  in collaboration with Microsoft, enhancing employee efficiency and work speed;",
  //"  │  additionally, managed and maintained customer databases, resolving tickets and",
  //"  │  updating information using Microsoft SQL Server, SysAdmin, Excel, CRM, and CMS.",
  //"  └─ <i> SQL, Azure OpenAI, SysAdmin, CRM, ERP, CMS, git, Excel.</i>",
  "<br>",//
];

var education = [
  "<br>",
  "My educational journey 🎓",
  "<br>",
  "<span class='white-glow'>University Of Mumbai</span>",
  "  ├─ Bachelor's program: Masters Of Computer Application. (2025-2027)",
  //"  └─ Relevant classes: Advanced Java, Advance Database Management System, Data Structure And Algorithms",
  //"                       Web Technology, Project Management System, Software Packages.",
  "<br>",
  // TryHackMe mention removed per request
  "<br>",
  "<span class='white-glow'>Rashtrasant Tukadoji Maharaj Nagpur University</span>",
  "  └─ Bachelor's Program: Bachelor Of Computer Application. (2021-2024)",
  "<br>",
];

var certifications = [
  "<br>",
  "My professional certifications and achievements 🏆",
  "<br>",
  "<span class='white-glow'>MSFDA(Government Of India)</span>",
  "  └─ <a target='_blank' href='https://drive.google.com/file/d/1M2nLeNLdMcnOpz_b4VA9ZfEPJ61s-TL3/view'><span class='green-glow'>View certification &#x2197;</span></a>",
  "<br>",
  "<span class='white-glow'>Python Data Structure</span>",
  "  └─ <a target='_blank' href='https://www.coursera.org/account/accomplishments/certificate/K6RKETLZ5PZR'><span class='green-glow'>View certification &#x2197;</span></a>",
  "<br>",
  //"<span class='white-glow'>First Step in Business (Hackathon)</span>",//
  //"  ├─ <a target='_blank' href='https://drive.google.com/drive/folders/1w5FfBu2JRW9DVSzZraYcvJPCXlEO8n-7?usp=sharing'><span class='green-glow'>2nd Place Winner &#x2197;</span></a>",//
  //"  └─ Built a complete business plan during a 2-month program at University of Bucharest,",//
  //"     presented to and evaluated by four real-world entrepreneurs. The project required",//
 // "     deep market analysis, detailed financial planning, and a solid execution strategy.",//
  "<br>",
];

var social = [
  "<br>",
  "Write me:",
  "  │",
    '  ├─ <span class="white-glow">email</span>           <a href="' +
      email +
    '" target="_blank">prernadikondwar21@gmail.com' +
      "</a>",
  '  ├─ <span class="white-glow">linkedin</span>        <a href="' +
    linkedin +
  '" target="_blank">linkedin/in/prerna-dikondwar' +
    "</a>",
  '  ├─ <span class="white-glow">github</span>          <a href="' +
    github +
  '" target="_blank">github/prerna-dikondwar' +
    "</a>",
  // TryHackMe and YouTube links removed per request
  "<br>",
];

var projects = [
  "<br>",
  "Will Upload it Soon",
  //"<br>",
  //"<span class='white-glow'>WebX - Web Vulnerability Scanner & AI</span>",
  //"  ├─ Web security scanning tool designed to identify vulnerabilities in websites,",
  //"  │  The application consists of a full-stack architecture with Python/Flask",
  //"  │  backend and JavaScript frontend.",
  //"  └─ <i> Python, Flask, JavaScript, OpenAI API</i>",
  //"<br>",
  //"<span class='white-glow'>Server Status Check</span>",
  //"  ├─ Python-based server monitoring tool for real-time website status checks",
  //"  │  and automated email alerts on downtime, with advanced user preferences",
  //"  │  management for the configuration file.",
  //"  └─ <i>Python, Email Alert, JSON</i>",
  //"<br>",
  //"<span class='white-glow'>Will Upload it Soon.</span>",
  //"  ├─ Implements XOR encryption and decryption using Python. The project",
  //"  │  consists of two main scripts (encryption.py and decryption.py) ",
  //"  │  that process text files using a user-provided key.",
  //"  └─ <i>Python, XOR, Files</i>",
  "<br>",
];

var banner = [
  `<h1 class="index">Prerna Dikondwar</h1>`,

  '<span class="color2">Welcome to my portfolio website with an interactive terminal.</span>',
  '<span class="color2">To get a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
  '<span class="color2">To visit the \'normal\' version of this website, type</span> <span class="command">\'normal\'</span><span class="color2">.</span>',
  "<br>",
];

