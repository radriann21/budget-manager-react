import { Dashboard } from "@/pages/Dashboard"
import { Routes, Route, BrowserRouter } from "react-router"
import { MainLayout } from "@/layouts/MainLayout"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}