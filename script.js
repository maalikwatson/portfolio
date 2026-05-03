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
