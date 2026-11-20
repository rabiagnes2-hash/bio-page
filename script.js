
/* SECTION A: STORE PROJECTS AS DATA */

const projects = [
    {
        title: "Bio Page",
        description: "My first HTML and CSS page.",
        category: "HTML"
    },
    {
        title: "Responsive Nav",
        description: "A flexbox nav bar that adapts.",
        category: "CSS"
    },
    {
        title: "Grid Gallery",
        description: "Cards laid out with CSS Grid.",
        category: "CSS"
    },
    {
        title: "Contact Form",
        description: "A form with validation.",
        category: "HTML"
    }
];

console.log(projects[0].title);
console.log(projects[2].description);
console.log(projects.length);


/* SECTION B: BUILD PROJECT CARDS WITH A LOOP */

const grid = document.querySelector("#projectsGrid");

function displayProjects(projectList) {

    if (!grid) return;

    grid.innerHTML = "";

    projectList.forEach(function (project) {

        const card = document.createElement("div");

        card.className = "project-card";

        card.innerHTML =
            "<h3>" + project.title + "</h3>" +
            "<p>" + project.description + "</p>";

        grid.appendChild(card);

    });
}


/* SECTION E: FILTER PROJECTS */

function filterProjects(category) {

    if (category === "All") {

        displayProjects(projects);

    } else {

        const filteredProjects = projects.filter(function (project) {

            return project.category === category;

        });

        displayProjects(filteredProjects);

    }

}


/* DISPLAY ALL PROJECTS WHEN THE PAGE LOADS */

displayProjects(projects);


/* SECTION C: CONTACT FORM HANDLING */

const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

const textArea = document.querySelector("#message");
const charCount = document.querySelector("#charCount");

if (form && message) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();

        const text = textArea.value.trim();

        if (name === "" || text.length < 10) {

            message.textContent =
                "Please enter your name and a message of at least 10 characters.";

            return;
        }

        message.textContent =
            "Thanks, " + name + "! Your message was received.";

        form.reset();

        /* RESET CHARACTER COUNTER AFTER FORM SUBMISSION */

        if (charCount) {
            charCount.textContent = "Characters: 0";
        }

    });

}


/* SECTION E: MESSAGE CHARACTER COUNTER */

if (textArea && charCount) {

    textArea.addEventListener("input", function () {

        charCount.textContent =
            "Characters: " + textArea.value.length;

    });

}


/* SECTION E: DARK MODE TOGGLE */

const darkModeBtn = document.querySelector("#darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            darkModeBtn.textContent = "Switch to Light Mode";

        } else {

            darkModeBtn.textContent = "Switch to Dark Mode";

        }

    });

}
