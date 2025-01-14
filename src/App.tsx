import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ShiftSchedule from "./pages/ShiftSchedule";
import EmployeeManagement from "./pages/EmployeeManagement";
import ShiftSettings from "./pages/ShiftSettings";
import Box from "@mui/material/Box";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path='/vardiya-programi' element={<ShiftSchedule />} />
            <Route path='/calisan-yonetimi' element={<EmployeeManagement />} />
            <Route path='/vardiya-ayarlari' element={<ShiftSettings />} />
            <Route path='/' element={<Navigate to='/vardiya-programi' />} />
          </Routes>
        </Box>
    </BrowserRouter>
  );
}

export default App;
