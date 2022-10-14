import { Routes, Route, Navigate } from "react-router-dom";
import ItmsHome from "./features/itms/ItmsHome";
import ItmsList from "./features/itms/ItmsList";
import Layout from "./components/Layout";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ItmsHome />} />
        <Route path="itmsList" element={<ItmsList />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;