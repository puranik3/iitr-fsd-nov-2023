import { Container } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Navigation from "./components/Navigation/Navigation";
import LoginPage from "./pages/login/page";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import WelcomePage from "./pages/welcome/page";
import TodosListPage from "./pages/todos/page";
import TodoAddEditPage from "./pages/todos/[id]/page";

function App() {
  return (
    <>
        <Navigation />

        <Container className="my-5">
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/welcome/:username" element={
                  <AuthenticatedRoute>
                    <WelcomePage />
                  </AuthenticatedRoute>} />
                <Route path="/todos" element={
                  <AuthenticatedRoute>
                    <TodosListPage />
                  </AuthenticatedRoute>
                  } />
                <Route path="/todos/:id" element={
                  <AuthenticatedRoute>
                    <TodoAddEditPage />
                  </AuthenticatedRoute>
                } />
            </Routes>
        </Container>

        <ToastContainer />
    </>
  );
}

export default App;
