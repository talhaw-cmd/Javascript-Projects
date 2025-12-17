 const addExpenseBtn = document.getElementById("addExpenseBtn");
    const categoryInput = document.getElementById("categoryInput");
    const amountInput = document.getElementById("amountInput");
    const expenseList = document.getElementById("expenseList");

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    addExpenseBtn.addEventListener("click", () => {

        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        const expenseRow = document.createElement("div");
        expenseRow.classList.add("expense-row");

        expenseRow.innerHTML = `
            <div class="expense-details">
                <div class="expense-name">${categoryInput.value}</div>
                <div class="expense-date">${formattedDate}</div>
            </div>

            <div class="expense-price">
                <div class="currency">Rs</div>
                <div class="amount">${amountInput.value}</div>
            </div>
        `;

        const deleteIcon = document.createElement("i");
        deleteIcon.className = "bi bi-x-square-fill delete-btn";

        deleteIcon.addEventListener("click", () => {
            expenseList.removeChild(expenseRow);
        });

        expenseRow.appendChild(deleteIcon);
        expenseList.appendChild(expenseRow);

        categoryInput.value = "";
        amountInput.value = "";
    });
