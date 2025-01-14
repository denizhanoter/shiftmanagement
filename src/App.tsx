import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShiftSchedule from "./pages/ShiftSchedule";
import EmployeeManagement from "./pages/EmployeeManagement";
import ShiftSettings from "./pages/ShiftSettings";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/' element={<Homepage />}>
          <Route path='/Shift-Schedule' element={<ShiftSchedule />} />
          <Route path='/Employee-Management' element={<EmployeeManagement />} />
          <Route path='/Shift-Settings' element={<ShiftSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
