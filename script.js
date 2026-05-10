/*
    Author: Maalik Watson
    Date: 4/17/2026
    Purpose: portfolio...
*/

// Create an array with at least 5 skills
var skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

// Use a loop to display the skills in the About section
var skillsList = document.getElementById("skillsList");

for (var i = 0; i < skills.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = skills[i];
    skillsList.appendChild(listItem);
}

// Create custom project objects
var project1 = {
    projectTitle: "Portfolio Website",
    briefSummary: "This project is a personal portfolio page that introduces my background, skills, and featured projects. It uses HTML, CSS, JavaScript, DOM manipulation, and web storage.",
    iconImageURL: "images/project1.png",
    repositoryLink: "https://github.com/yourusername/project1"
};

var project2 = {
    projectTitle: "Form Validation Project",
    briefSummary: "This project uses JavaScript validation to check user input before a form is submitted. It demonstrates live feedback and basic client-side form handling.",
    iconImageURL: "images/project2.png",
    repositoryLink: "https://github.com/yourusername/project2"
};

var project3 = {
    projectTitle: "Bill Splitter",
    briefSummary: "This project calculates a tip, total bill, and amount owed per person. It uses form inputs, JavaScript arithmetic, and dynamic output.",
    iconImageURL: "images/project3.png",
    repositoryLink: "https://github.com/yourusername/project3"
};

// Define an array to contain the newly created objects
var projects = [project1, project2, project3];

// On page load, check if project data exists in session storage
if (sessionStorage.getItem("portfolioProjects") === null) {
    // Convert the array to a string using JSON.stringify() and store it
    sessionStorage.setItem("portfolioProjects", JSON.stringify(projects));
} else {
    // Retrieve and parse the stored data using JSON.parse()
    projects = JSON.parse(sessionStorage.getItem("portfolioProjects"));
}

// Select the project section of the portfolio page using a DOM selector
var projectCards = document.getElementById("projectCards");

// Loop through the array and dynamically create DOM elements
for (var j = 0; j < projects.length; j++) {
    var projectBox = document.createElement("div");
    projectBox.className = "resource-box";

    var projectTitle = document.createElement("h3");
    projectTitle.textContent = projects[j].projectTitle;

    var projectSummary = document.createElement("p");
    projectSummary.textContent = projects[j].briefSummary;

    var projectImage = document.createElement("img");
    projectImage.src = projects[j].iconImageURL;
    projectImage.alt = projects[j].projectTitle + " screenshot";
    projectImage.width = 300;
    projectImage.height = 200;
    projectImage.className = "project-image";

    var projectLink = document.createElement("a");
    projectLink.href = projects[j].repositoryLink;
    projectLink.target = "_blank";
    projectLink.textContent = "View Repository";

    projectBox.appendChild(projectTitle);
    projectBox.appendChild(projectSummary);
    projectBox.appendChild(projectImage);
    projectBox.appendChild(projectLink);

    projectCards.appendChild(projectBox);
}

// Determine which Featured Content divs to show
var projectLinks = document.querySelectorAll("#projects a");
var universityResources = document.getElementById("universityResources");
var personalProjects = document.getElementById("personalProjects");

if (projectLinks.length < 3) {
    universityResources.style.display = "block";
    personalProjects.style.display = "block";
} else {
    personalProjects.style.display = "block";
    universityResources.style.display = "none";
}

// Close welcome modal
var closeModal = document.getElementById("closeModal");
var welcomeModal = document.getElementById("welcomeModal");

closeModal.addEventListener("click", function() {
    welcomeModal.style.display = "none";
});

// Add Dark Mode toggle and persist preference
var darkModeToggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", function() {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});

// Add interactivity to the Contact form submit button
var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var contactName = document.getElementById("senderName").value;
    alert("Thank you, " + contactName + ", your message has been sent!");
});
