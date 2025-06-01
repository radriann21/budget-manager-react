export type Category = {
  id: string;
  categoryName: string;
}

export type Budget = {
  id: string;
  budgetAmount: number;
  categoryId: string;
  startDate: Date;
  endDate: Date;
  currentAmount: number;
}

export type Transactions = {
  id: string;
  type: 'Income' | 'Expense';
  amount: number;
  transactionDate: Date;
  description?: string;

  // expenses 
  categoryId?: string;
  budgetId?: string;

  // incomes
  source?: string;
}


