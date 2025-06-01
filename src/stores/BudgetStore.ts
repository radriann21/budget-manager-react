import { Budget, Transactions } from "@/types/types"
import { createStore } from "zustand"
import { persist } from "zustand/middleware"

interface BudgetStoreState {
  budgets: Budget[] | [];
  transactions: Transactions[] | [];
}

interface BudgetStoreActions {
  addBudget: (budget: Budget) => void
}

export const useBudgetStore = createStore<BudgetStoreState & BudgetStoreActions>()(
  persist(
    (set) => ({
      budgets: [],
      transactions: [],
      addBudget: (newBudget: Budget) => set(state => {
        const existBudget = state.budgets?.some(budget => budget.id === newBudget.id)
        if (existBudget) {
          return state
        }
        return {
          budgets: [...state.budgets, newBudget]
        }
      })
    }),
    { name: 'budget-data' }
  )
)