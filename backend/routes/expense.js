const express = require("express");
const expenseController = require("../controllers/expense");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.use(authMiddleware);

router.get("/", expenseController.getAllExpenses);
router.post("/", expenseController.addExpense);
router.put("/:id", expenseController.editExpense);
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;
