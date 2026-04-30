// Import RRD
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages (features)
import ClipperPage from "@/features/clipper/pages/ClipperPage";

// Router
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* 404 Not found */}
                <Route path="/" element={<div>404 Not Found</div>} />

                {/* Home Page */}
                <Route path="/home" element={<ClipperPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
