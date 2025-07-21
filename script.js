document.addEventListener("DOMContentLoaded", () => {
  const codeContent = document.getElementById("codeContent");

  const snippets = [
    `const coder = {
  name: 'Iqra Hafeez',
  skills: ['SQL', 'Java', 'Content Writing', 
           'Graphic Designing', 'HTML', 'CSS'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`,

    `// frontend-dev.js

const iqra = {
  name: "Iqra Hafeez",
  focus: "User Interfaces",
  tools: ["Figma", "VS Code", "GitHub"],
  loves: ["Clean Code", "CSS Grids", "Dark Mode", "Animations"],
  debug: function(issue) {
    return \`🛠️ Fixing \${issue} with Chrome DevTools 🔍\`;
  }
};

console.log(iqra.debug("layout shift"));`,

    `// access_granted.js

const access = {
  username: "iqra_hafeez",
  role: "Penetration Tester",
  clearance: "TOP_SECRET",
  techniques: ["Enumeration", "Exploitation", "Privilege Escalation"],
  execute: function(target) {
    return \`🔍 Scanning \${target} for misconfigurations...\`;
  }
};

console.log(access.execute("public-facing portfolio"));`,

    `// creative-thoughts.js

const iqraWriter = {
  penName: "Iqra Hafeez",
  writingStyle: "Conversational & Clear",
  niches: ["Story Writing", "Articles", "Captions"],
  tools: ["MS Office", "Grammarly", "Google Docs"],
  write: function(topic) {
    return \`📝 Writing engaging content on "\${topic}"\`;
  }
};

console.log(iqraWriter.write("Frontend Optimization"));`
  ];

  let index = 0;
  let intervalId;

  function showNextSnippet() {
    codeContent.classList.remove("fade");
    void codeContent.offsetWidth;
    codeContent.classList.add("fade");

    codeContent.textContent = snippets[index];
    index = (index + 1) % snippets.length;
  }

  function startRotation() {
    intervalId = setInterval(showNextSnippet, 2000);
  }

  function stopRotation() {
    clearInterval(intervalId);
  }

  // Initial setup
  showNextSnippet();
  startRotation();

  // Pause on hover, resume on mouse leave
  codeContent.addEventListener("mouseenter", stopRotation);
  codeContent.addEventListener("mouseleave", startRotation);
});













// === Dynamic Active Link Highlighting ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});













// Pause horizontal scroll animation on hover
const container = document.querySelector('.projects-container');
container.addEventListener('mouseover', () => {
  container.style.animationPlayState = 'paused';
});
container.addEventListener('mouseout', () => {
  container.style.animationPlayState = 'running';
});

// Fancybox configuration
 // Wait until the DOM and Fancybox are ready
  window.addEventListener("DOMContentLoaded", () => {
    Fancybox.bind("[data-fancybox]", {
      on: {
        reveal: () => {
          document.querySelector('.custom-fancybox-arrows').style.display = 'block';
        },
        closing: () => {
          document.querySelector('.custom-fancybox-arrows').style.display = 'none';
        }
      }
    });

    // Custom navigation logic
    document.querySelector('.custom-prev').addEventListener('click', () => {
      const instance = Fancybox.getInstance();
      if (instance) instance.prev();
    });

    document.querySelector('.custom-next').addEventListener('click', () => {
      const instance = Fancybox.getInstance();
      if (instance) instance.next();
    });
  });

  // Redirect to projects page on ESC or custom key press
document.addEventListener("keydown", function (event) {
  // ESC key
  if (event.key === "Escape") {
    window.location.href = "projects.html";
  }

  // Optional: custom key (e.g., 'r' for return)
  if (event.key === "r") {
    window.location.href = "projects.html";
  }
});

// Handle stuck Fancybox overlay on random clicks
document.addEventListener("click", function () {
  const instance = Fancybox.getInstance();

  if (instance && !instance.isClosing) {
    // Try to close Fancybox normally
    instance.close();
  } else if (!instance) {
    // If no Fancybox is active but stuck overlay exists, force reload
    const overlay = document.querySelector('.fancybox__container');
    if (overlay) {
      window.location.href = "projects.html";
    }
  }
});
