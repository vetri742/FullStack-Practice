class ExpenseTracker {
  constructor() {
    this.transactions = [];
  }

  addTransaction(type, amount, category) {
    if (amount <= 0) {
      console.log("Invalid amount");
      return;
    }

    const transaction = {
      id: Date.now(),
      type, // "income" or "expense"
      amount,
      category,
      date: new Date()
    };

    this.transactions.push(transaction);
    console.log("Transaction added");
  }

  deleteTransaction(id) {
    this.transactions = this.transactions.filter(t => t.id !== id);
    console.log("Transaction deleted");
  }

  getBalance() {
    return this.transactions.reduce((balance, t) => {
      return t.type === "income"
        ? balance + t.amount
        : balance - t.amount;
    }, 0);
  }

  getTransactionsByCategory(category) {
    return this.transactions.filter(t => t.category === category);
  }

  getSummary() {
    const income = this.transactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = this.transactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      income,
      expense,
      balance: income - expense
    };
  }
}
const tracker = new ExpenseTracker();

tracker.addTransaction("income", 5000, "salary");
tracker.addTransaction("expense", 1200, "food");
tracker.addTransaction("expense", 800, "travel");

console.log(tracker.getSummary());