document.addEventListener("DOMContentLoaded", function () {
    // List of video files (update with actual filenames)
    const videoFiles = [
        "videos/vid1.mp4",
        "videos/vid2.mp4",
        "videos/vid3.mp4",
        "videos/vid5.mp4",
        "videos/vid5.mp4",
        "videos/vid6.mp4",
        "videos/vid7.mp4",
        "videos/vid8.mp4",
        "videos/vid9.mp4"
    ];

    let currentVideoIndex = 0;
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");
    const prevButton = document.getElementById("prevVideo");
    const nextButton = document.getElementById("nextVideo");

    function loadVideo(index) {
        currentVideoIndex = index;
        videoSource.src = videoFiles[currentVideoIndex];
        videoPlayer.load();
        videoPlayer.play().catch(error => console.warn("Autoplay blocked by browser:", error));
    }

    prevButton.addEventListener("click", function () {
        currentVideoIndex = (currentVideoIndex - 1 + videoFiles.length) % videoFiles.length; // Loop backward
        loadVideo(currentVideoIndex);
    });

    nextButton.addEventListener("click", function () {
        currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length; // Loop forward
        loadVideo(currentVideoIndex);
    });

    // Auto-play next video when the current one ends
    videoPlayer.addEventListener("ended", function () {
        currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
        loadVideo(currentVideoIndex);
    });

    // Ensure the first video starts playing automatically
    loadVideo(currentVideoIndex);
    
    // Directly embed JSON data
    const data = [
        {
            "Game":"Valorant",
            "Organiser":"RCS (Radiant Competitive Scene)",
            "Role":"Cinematic Observer",
            "Date":"2025-02-10",
            "Hours":"01:00:00",
            "Stream":"https:\/\/www.twitch.tv\/radiantcompetitivescene",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"Cinematic Observer",
            "Date":"2025-02-11",
            "Hours":"02:00:00",
            "Stream":"https:\/\/www.twitch.tv\/radiantcompetitivescene",
            "Unnamed: 9":"Total Live Hours:"
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"Cinematic Observer",
            "Date":"2025-02-12",
            "Hours":"03:00:00",
            "Stream":"https:\/\/www.twitch.tv\/radiantcompetitivescene",
            "Unnamed: 9":32
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"POV Observer",
            "Date":"2025-02-14",
            "Hours":"01:00:00",
            "Stream":"https:\/\/www.twitch.tv\/radiantcompetitivescene",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"POV Observer",
            "Date":"2025-02-18",
            "Hours":"01:00:00",
            "Stream":"https:\/\/www.twitch.tv\/radiantcompetitivescene",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"POV Observer",
            "Date":"2025-02-21",
            "Hours":"01:00:00",
            "Stream":"https:\/\/www.twitch.tv\/radiantcompetitivescene",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"POV Observer",
            "Date":"2025-02-22",
            "Hours":"01:00:00",
            "Stream":"https:\/\/www.twitch.tv\/radiantcompetitivescene",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"POV Observer",
            "Date":"2025-02-24",
            "Hours":"02:00:00",
            "Stream":"https:\/\/www.youtube.com\/@RadiantSceneEu",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"POV Observer",
            "Date":"2025-02-25",
            "Hours":"01:30:00",
            "Stream":"https:\/\/www.youtube.com\/@RadiantSceneEu",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"POV Observer",
            "Date":"2025-03-03",
            "Hours":"02:30:00",
            "Stream":"https:\/\/www.youtube.com\/@RadiantSceneEu",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"POV Observer",
            "Date":"2025-03-05",
            "Hours":"03:00:00",
            "Stream":"https:\/\/www.twitch.tv\/radiantcompetitivescene",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"RCS",
            "Role":"POV Observer",
            "Date":"2025-03-06",
            "Hours":"03:00:00",
            "Stream":"https:\/\/www.twitch.tv\/radiantcompetitivescene",
            "Unnamed: 9":null
        },
        {
            "Game":"Marvel Rivals",
            "Organiser":"RDL (Rivals Draft League)",
            "Role":"Caster",
            "Date":"2025-03-08",
            "Hours":"01:00:00",
            "Stream":"https:\/\/www.twitch.tv\/rivalsdraftleague",
            "Unnamed: 9":null
        },
        {
            "Game":"Marvel Rivals",
            "Organiser":"TR (Team Resilience)",
            "Role":"POV Observer",
            "Date":"2025-03-08",
            "Hours":"03:00:00",
            "Stream":"https:\/\/www.twitch.tv\/teamresilience_",
            "Unnamed: 9":null
        },
        {
            "Game":"Marvel Rivals",
            "Organiser":"TR ",
            "Role":"POV Observer",
            "Date":"2025-03-09",
            "Hours":"03:00:00",
            "Stream":"https:\/\/www.twitch.tv\/teamresilience_",
            "Unnamed: 9":null
        },
        {
            "Game":"Valorant",
            "Organiser":"T2G (Thrive 2 Greatness)",
            "Role":"Caster",
            "Date":"2025-03-15",
            "Hours":"03:00:00",
            "Stream":"https:\/\/www.twitch.tv\/t2g_valorant",
            "Unnamed: 9":null
        }
    ];

    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = "";

    data.forEach(row => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.Game || "N/A"}</td>
            <td>${row.Organiser || "N/A"}</td>
            <td>${row.Role || "N/A"}</td>
            <td>${row.Date || "N/A"}</td>
            <td>${row.Hours || "N/A"}</td>
            <td><a href="${row.Stream || "#"}" target="_blank">${row.Stream || "N/A"}</a></td>
        `;
        tableBody.appendChild(tr);
    });
});
