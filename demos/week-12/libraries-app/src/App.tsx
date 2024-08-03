import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Menu from './components/Menu';

import HomePage from './pages/home';
import LibraryListPage from './pages/libraries';
import LibraryDetailsPage from './pages/libraries/[id]';

const App = () => {
    return (
        <div>
            <Menu />
            
            <Container className="my-5">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/libraries" element={<LibraryListPage />} />
                    <Route path="/libraries/:id" element={<LibraryDetailsPage />} />
                </Routes>
            </Container>
        </div>
    );
}
 
export default App;