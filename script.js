document.addEventListener("DOMContentLoaded", function() {
    var aboutMeDiv = document.querySelector('.aboutMe .icon');
    var aboutMeContent = document.getElementById('aboutMeContent');
    var aboutMeExitButton = document.getElementById('aboutMeExitButton');
    var skillsDiv = document.querySelector('.skills .icon');
    var skillsContent = document.getElementById('skillsContent');
    var skillsExitButton = document.getElementById('skillsExitButton');
    var resumeDiv = document.querySelector('.resume .icon');
    var resumeContent = document.getElementById('resumeContent');
    var resumeExitButton = document.getElementById('resumeExitButton');
    var resumeYesButton = document.getElementById('resumeYesButton');
    var resumeNoButton = document.getElementById('resumeNoButton');

    // Event listener for About Me div
    aboutMeDiv.addEventListener('click', function() {
        aboutMeContent.classList.remove('hidden');
        aboutMeContent.style.top = "50%";
        aboutMeContent.style.left = "50%";
        aboutMeContent.style.transform = "translate(-50%, -50%)";
    });

    // Event listener for Skills div
    skillsDiv.addEventListener('click', function() {
        skillsContent.classList.remove('hidden');
        skillsContent.style.top = "50%";
        skillsContent.style.left = "50%";
        skillsContent.style.transform = "translate(-50%, -50%)";
    });

    // Event listener for Resume div
    resumeDiv.addEventListener('click', function() {
        resumeContent.classList.remove('hidden');
        resumeContent.style.top = "50%";
        resumeContent.style.left = "50%";
        resumeContent.style.transform = "translate(-50%, -50%)";
    });

    // Event listener for About Me exit button
    aboutMeExitButton.addEventListener('click', function() {
        aboutMeContent.classList.add('hidden');
    });

    // Event listener for Skills exit button
    skillsExitButton.addEventListener('click', function() {
        skillsContent.classList.add('hidden');
    });

    // Event listener for Resume exit button
    resumeExitButton.addEventListener('click', function() {
        resumeContent.classList.add('hidden');
    });

    // Event listener for Resume "Yes" button
    resumeYesButton.addEventListener('click', function() {
        // Specify the URL of the GitHub file
        var githubFileUrl = 'https://github.com/0tterMan/Profile-Website/blob/main/ResumeHulsebus24.pdf'; // Replace with the actual URL of your GitHub file
        
        // Open the GitHub file URL in a new tab
        window.open(githubFileUrl, '_blank');
    });

    // Event listener for Resume "No" button
    resumeNoButton.addEventListener('click', function() {
        resumeContent.classList.add('hidden');
    });
});
