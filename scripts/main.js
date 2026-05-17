var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var commands = [];

const cvPath = "assets/Dikondwar-Prerna-Resume.pdf";

// Romanian language support removed — site is English-only

window.addEventListener('load', function () {
  setTimeout(() => {
    loopLines(banner, "", 80);
    textarea.focus();
  }, 100);

  textarea.value = "";
  command.innerHTML = textarea.value;

  window.addEventListener("keyup", enterKey);
});

function enterKey(e) {
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;

    addLine(
    "<span style='color: var(--title-color); letter-spacing: 0px;'>prernadikondwar21@gmail.com</span>:~$ " +
          command.innerHTML,
        "no-animation",
        0
      );

    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }

  if (e.keyCode == 38) {
    if (git > 0) {
      git--;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
  }
  if (e.keyCode == 40) {
    if (git < commands.length - 1) {
      git++;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    } else {
      git = commands.length;
      textarea.value = "";
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
    // english-only: cmd stays as entered

  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "normal":
      addLine("Opening website...", "color2", 80);
      // open the local normal site folder/index.html relatively
      newTab("normal/index.html");
      break;
    case "aboutme":
      loopLines(aboutme, "color2 margin", 80);
      break;
    case "contact":
      loopLines(social, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "experience":
      loopLines(experience, "color2 margin", 80);
      break;
    case "certifications":
      loopLines(certifications, "color2 margin", 80);
      break;
    case "education":
      loopLines(education, "color2 margin", 80);
      break;
    case "resume":
      addLine("Downloading resume...", "color2", 80);
      downloadCV();
      break;

    case "email":
      addLine('Opening mailto: <a href="mailto:prernadikondwar21@gmail.com">prernadikondwar21@gmail.com</a>', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(() => {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 80);
      newTab(github);
      break;
    case "youtube":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "tryhackme":
      addLine("TryHackMe link has been removed.", "color2", 80);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 80);
      newTab(linkedin);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // language switching removed: English-only

    default:
      addLine('<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>', "error", 100);
  }
}

function downloadCV() {
  setTimeout(function () {
    const link = document.createElement("a");
    link.href = cvPath;
  link.download = "Dikondwar-Prerna-Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 500);
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(() => {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}

function $(elid) {
  return document.getElementById(elid);
}

var cursor;
// initialize cursor position without overwriting other onload handlers
window.addEventListener('load', function init() {
  let cursor = document.getElementById("cursor");
  if (cursor) cursor.style.left = "0px";
});

function n12br(txt) {
  return txt.replace(/\n/g, "");
}

function typeIt(from, e) {
  e = e || window.event;
  var w = document.getElementById("typer");
  var tw = from.value;

  w.innerHTML = n12br(tw);
}

function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keycode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= 0 - (count - 1) * 10) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && parseInt(cursor.style.left) + 10 <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

function updateLanguage() {
  // updateLanguage removed — site is English-only
}

function detectMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    )
  ) {
    if (window.location.pathname !== "/normal") {
  window.location.href = "https://prernadikondwar.com/normal";
    }
  }
}

// attach detectMobile without overwriting other onload handlers
window.addEventListener('load', detectMobile);
