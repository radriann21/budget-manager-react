import { LuMonitor, LuWallet, LuTrendingUp, LuTrendingDown, LuTag, LuChartArea } from "react-icons/lu";

export const NavOptions = [
  {
    id: 1,
    name: "Dashboard",
    href: "/",
    icon: LuMonitor
  },
  {
    id: 2,
    name: "Budgets",
    href: "/budgets",
    icon: LuWallet
  },
  {
    id: 3,
    name: "Incomes",
    href: "/incomes",
    icon: LuTrendingUp
  },
  {
    id: 4,
    name: "Expenses",
    href: "/expenses",
    icon: LuTrendingDown
  },
  {
    id: 5,
    name: "Categories",
    href: "/categories",
    icon: LuTag
  },
  {
    id: 6,
    name: "Statistics",
    href: "/statistics",
    icon: LuChartArea
  }
]