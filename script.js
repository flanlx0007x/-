document.addEventListener("DOMContentLoaded", function() {
    const scheduleContainer = document.getElementById("schedule-container");
    const clockElement = document.getElementById("clock");
    const dayInfoElement = document.getElementById("day-info");
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = today.getDay();
    const schedule = getScheduledClasses(dayOfWeek);

    let scheduleHTML = "<div class='schedule'>";
    for (let i = 0; i < schedule.length; i++) {
        scheduleHTML += "<div class='class'>" + schedule[i] + "</div>";
    }
    scheduleHTML += "</div>";

    scheduleContainer.innerHTML = scheduleHTML;

    updateClock(); 

    setInterval(updateClock, 60000);

    function updateClock() {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const timeString = padZero(hours) + ":" + padZero(minutes);
        clockElement.textContent = timeString;
    }

    function padZero(num) {
        return (num < 10 ? "0" : "") + num;
    }

    const dayName = daysOfWeek[dayOfWeek];
    dayInfoElement.textContent = "ตรางวัน:" + dayName;
  const contactButton = document.querySelector(".contact-support button");
  const supportButton = document.querySelectorAll(".contact-support button")[1];

  contactButton.addEventListener("click", function() {
      window.open("https://discordapp.com/users/862571604751810602", "_blank"); // เปิดลิงก์ในแท็บใหม่
  });

  supportButton.addEventListener("click", function() {
      window.open("link_to_support_page", "_blank"); // เปิดลิงก์ในแท็บใหม่
  });
});

function getScheduledClasses(dayOfWeek) {
    const classSchedules = [
        // วันอาทิตย์
        [
            "ไม่มีเรียน"
        ],
        // วันจันทร์
        [
            "คาบที่ 1: วิชา A, ครู X, ห้อง 101",
            "คาบที่ 2: วิชา B, ครู Y, ห้อง 102",
            "คาบที่ 3: วิชา C, ครู Z, ห้อง 103",
            "คาบที่ 4: วิชา D, ครู W, ห้อง 104",
            "คาบที่ 5: วิชา E, ครู V, ห้อง 105",
            "คาบที่ 6: วิชา F, ครู U, ห้อง 106",
            "คาบที่ 7: วิชา G, ครู T, ห้อง 107"
        ],
        // วันอังคาร
        [
            "คาบที่ 1: วิชา X, ครู A, ห้อง 201",
            "คาบที่ 2: วิชา Y, ครู B, ห้อง 202",
            "คาบที่ 3: วิชา Z, ครู C, ห้อง 203",
            "คาบที่ 4: วิชา W, ครู D, ห้อง 204",
            "คาบที่ 5: วิชา V, ครู E, ห้อง 205",
            "คาบที่ 6: วิชา U, ครู F, ห้อง 206",
            "คาบที่ 7: วิชา T, ครู G, ห้อง 207"
        ],
        // วันพุธ
        [
            "คาบที่ 1: วิชา X, ครู A, ห้อง 201",
            "คาบที่ 2: วิชา Y, ครู B, ห้อง 202",
            "คาบที่ 3: วิชา Z, ครู C, ห้อง 203",
            "คาบที่ 4: วิชา W, ครู D, ห้อง 204",
            "คาบที่ 5: วิชา V, ครู E, ห้อง 205",
            "คาบที่ 6: วิชา U, ครู F, ห้อง 206",
            "คาบที่ 7: วิชา T, ครู G, ห้อง 207"
        ],
        // วันพฤหัสบดี
        [
            "คาบที่ 1: วิชา X, ครู A, ห้อง 201",
            "คาบที่ 2: วิชา Y, ครู B, ห้อง 202",
            "คาบที่ 3: วิชา Z, ครู C, ห้อง 203",
            "คาบที่ 4: วิชา W, ครู D, ห้อง 204",
            "คาบที่ 5: วิชา V, ครู E, ห้อง 205",
            "คาบที่ 6: วิชา U, ครู F, ห้อง 206",
            "คาบที่ 7: วิชา T, ครู G, ห้อง 207"
        ],
        // วันศุกร์
        [
          "คาบที่ 1: วิชา X, ครู A, ห้อง 201",
          "คาบที่ 2: วิชา Y, ครู B, ห้อง 202",
          "คาบที่ 3: วิชา Z, ครู C, ห้อง 203",
          "คาบที่ 4: วิชา W, ครู D, ห้อง 204",
          "คาบที่ 5: วิชา V, ครู E, ห้อง 205",
          "คาบที่ 6: วิชา U, ครู F, ห้อง 206",
          "คาบที่ 7: วิชา T, ครู G, ห้อง 207"
      ],
      // วันเสาร์
      [
        "ไม่มีเรียน"
      ],

    ];

    return classSchedules[dayOfWeek];
}
