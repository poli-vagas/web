import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import DashboardHome from '~/pages/DashboardHome'
// import Forgot from '~/pages/Forgot'
// import Login from '~/pages/Login'
import Vacancies from '~/pages/Vacancies'
import Dashboard from '~/layouts/Dashboard'
// import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import VacancyDetails from '~/modals/VacancyDetails'
// import Notifications from '~/pages/Notifications'
import NotificationDetails from '~/modals/NotificationDetails'
// import Configurations from '~/pages/Configurations'
// import Administrators from '~/pages/Administrators'
// import AdministratorDetails from '~/modals/AdministratorDetails'

// const LoginComponent = () => (
//   <PublicRoute>
//     <Login />
//   </PublicRoute>
// )

// const ForgotComponent = () => (
//   <PublicRoute>
//     <Forgot />
//   </PublicRoute>
// )

const PrivateComponent = () => (
  <PublicRoute>
    <Dashboard />
  </PublicRoute>
)

const RoutesApp: React.FC = () => {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }

  return (
    <>
      <Routes>
        <Route path="">
          <Route index element={<Navigate to="dash" />} />
          {/* <Route index element={<LoginComponent />} />
          <Route path="forgot" element={<ForgotComponent />} /> */}
        </Route>

        <Route path="dash" element={<PrivateComponent />}>
          <Route index element={<DashboardHome />} />
          <Route path="vacancies" element={<Vacancies />}>
            <Route path=":id" element={<Vacancies />} />
          </Route>

          {/* <Route path="notification">
            <Route index element={<Notifications />} />
            <Route path="view/:id" element={<Notifications />} />
            <Route path="new" element={<Notifications />} />
          </Route>
          <Route path="configuration">
            <Route index element={<Configurations />} />
            <Route path="view/:id" element={<Configurations />} />
            <Route path="new" element={<Configurations />} />
          </Route>

          <Route path="administrators">
            <Route index element={<Administrators />} />
            <Route path="edit/:id" element={<Administrators />} />
            <Route path="new" element={<Administrators />} />
          </Route> */}
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="dash/vacancies/:id" element={<VacancyDetails />} />
          <Route
            path="dash/vacancies/send-notification"
            element={<NotificationDetails />}
          />
          {/* <Route
            path="dash/administrators/edit/:id"
            element={<AdministratorDetails />}
          /> */}
        </Routes>
      )}
    </>
  )
}

export default RoutesApp
