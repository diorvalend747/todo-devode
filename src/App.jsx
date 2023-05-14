import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingPage from "./components/LoadingPage";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const TodoList = lazy(() => import("./pages/TodoList"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<LoadingPage />}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="todo/:activityId" element={<TodoList />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
