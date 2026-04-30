// Import RRD
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages (features)
import HomePage from '@/pages/Home'

// Router
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* 404 Not found */}
                <Route path="/" element={<div>404 Not Found</div>} />

                {/* Home Page */}
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
