        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");
        const monthEl = document.getElementById("month");
        const weekdayEl = document.getElementById("weekday");
        const dayEl = document.getElementById("day-of-month");

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const weekdayNames = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];

        function updateClock() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const month = now.getMonth();
            const weekday = now.getDay();
            const date = now.getDate();

            hoursEl.textContent = hours % 12 === 0 ? 12 : hours % 12;
            minutesEl.textContent = minutes.toString().padStart(2, '0');
            secondsEl.textContent = seconds.toString().padStart(2, '0');

            monthEl.textContent = monthNames[month];
            weekdayEl.textContent = weekdayNames[weekday];
            dayEl.textContent = date.toString().padStart(2, '0');
        }

        setInterval(updateClock, 1000);
        updateClock(); // initialize immediately