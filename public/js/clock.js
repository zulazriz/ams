function updateTime() {
    const now = new Date();
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // Change to true for 12-hour format
    };
    document.getElementById("current-time").textContent =
        now.toLocaleTimeString([], options);
}

setInterval(updateTime, 1000); // Update time every second
updateTime(); // Initial call to display time immediately

// function updateAnalogClock() {
//     console.log("App Timezone la: " + appTimezone);

//     // Get the current time in the specified timezone
//     const now = new Date(
//         new Date().toLocaleString("en-US", { timeZone: appTimezone })
//     );
//     const seconds = now.getSeconds();
//     const minutes = now.getMinutes();
//     const hours = now.getHours();

//     // Calculate the rotation for each hand
//     const secondDeg = (seconds / 60) * 360; // 90 to offset the initial rotation
//     const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6; // 6 degrees per second
//     const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30; // 30 degrees per minute

//     // Set the rotation
//     document.getElementById(
//         "second-hand"
//     ).style.transform = rotate(${secondDeg}deg);
//     document.getElementById(
//         "minute-hand"
//     ).style.transform = rotate(${minuteDeg}deg);
//     document.getElementById(
//         "hour-hand"
//     ).style.transform = rotate(${hourDeg}deg);
// }

// // Update clock every second
// setInterval(updateAnalogClock, 1000);
// updateAnalogClock(); // Initial call to display clock immediately