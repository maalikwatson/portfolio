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

// Add interactivity to the Contact form submit button
var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var contactName = document.getElementById("senderName").value;
    alert("Thank you, " + contactName + ", your message has been sent!");
});
