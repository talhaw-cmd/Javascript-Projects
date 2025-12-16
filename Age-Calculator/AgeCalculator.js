const birthDateInput = document.getElementById("birthDateInput");
const calculateBtn = document.getElementById("calculateBtn");

const yearsResult = document.getElementById("yearsResult");
const monthsResult = document.getElementById("monthsResult");
const daysResult = document.getElementById("daysResult");
const resultBox = document.getElementById("resultBox");

calculateBtn.addEventListener("click", function () {

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const birthDate = new Date(birthDateInput.value);

    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if (currentMonth < birthMonth) {
        years--;
        months += 12;
    }

    if (currentDay < birthDay) {
        months--;
        days += 30;
    }

    if (birthYear >= currentYear) {
        resultBox.innerHTML = "Error :)";
        return;
    }

    yearsResult.innerHTML = years + " years";
    monthsResult.innerHTML = months + " months";
    daysResult.innerHTML = days + " days";
});
