import { Routes, Route, BrowserRouter } from "react-router"
import { MainLayout } from "@/layouts/MainLayout"
import App from "@/App"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}