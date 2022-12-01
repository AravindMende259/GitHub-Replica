import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    
      <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      </AuthWrapper>
    
  );
}

export default App;
