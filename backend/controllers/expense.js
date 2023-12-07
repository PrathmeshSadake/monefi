const Expense = require("../models/Expense");

// Get all expenses for a user
exports.getAllExpenses = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from middleware
    const expenses = await Expense.find({ user: userId }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Add new expense
exports.addExpense = async (req, res) => {
  try {
    const { description, amount } = req.body;
    const userId = req.userId; // Extracted from middleware

    const newExpense = new Expense({ description, amount, user: userId });
    await newExpense.save();

    res.status(201).json({ message: "Expense added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update expense
exports.editExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount } = req.body;

    await Expense.findByIdAndUpdate(id, { description, amount });

    res.status(200).json({ message: "Expense updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    await Expense.findByIdAndDelete(id);

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
