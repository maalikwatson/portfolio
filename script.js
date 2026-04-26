var userName = prompt("Please enter your name:");
document.getElementById("welcomeMessage").textContent = "Welcome, " + userName + "!";

// Create an array with at least 5 skills
var skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

// Use a loop to display the skills in the About section
var skillsList = document.getElementById("skillsList");

for (var i = 0; i < skills.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = skills[i];
    skillsList.appendChild(listItem);
}

// Dynamically add a new paragraph to the About Me section
var aboutSection = document.getElementById("about");

var newParagraph = document.createElement("p");
newParagraph.textContent = "I am continuing to grow my skills through web development projects, class assignments, and hands-on practice.";

aboutSection.appendChild(newParagraph);

// Select and modify existing elements
var mainHeading = document.querySelector("h1");
mainHeading.textContent = "Maalik Watson | Portfolio";
mainHeading.style.fontSize = "36px";

var projectsSection = document.getElementById("projects");
projectsSection.style.border = "2px solid #333";
projectsSection.style.padding = "15px";

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

// Add Dark Mode toggle
var darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});

// Add timed confirmation to the Contact form
var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var formMessage = document.getElementById("formMessage");

    formMessage.textContent = "Sending message...";

    setTimeout(function() {
        formMessage.textContent = "Message sent successfully!";
    }, 3000);
});
