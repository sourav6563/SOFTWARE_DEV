// "use strict"

document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expensenameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const total = document.getElementById("total");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();
  renderExpenses();
  expenseForm.addEventListener("submit", (e) => {
    // in form every input came as a string
    e.preventDefault();
    const name = expensenameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        // if same key and value same than you can do only name or amount
      };
      expenses.push(newExpense);
      saveexpensesTolocal();
      renderExpenses();
      updateTotal();
      expensenameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `${expense.name} Rs.${expense.amount}
      <button data-id="${expense.id}"></button>`;
      expenseList.appendChild(li);
    });
  }
  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }
  function saveexpensesTolocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      const expenseid = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseid);
      saveexpensesTolocal();
      renderExpenses();
      updateTotal();
    }
  });
});
