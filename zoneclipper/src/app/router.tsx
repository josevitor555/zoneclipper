// Import RRD
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages (features)
import ClipperPage from "@/features/clipper/pages/ClipperPage";
import AnalysisPage from "@/features/analytics/pages/AnalysisPage";
import LibraryPage from "@/features/libraries/pages/LibraryPage";
import ClipDetailsPage from "@/features/clips/pages/ClipDetailsPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";

// Router
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Home Page */}
                <Route path="/" element={<ClipperPage />} />

                {/* Login Page */}
                <Route path="/login" element={<LoginPage />} />

                {/* Analysis Page */}
                <Route path="/analysis" element={<AnalysisPage />} />

                {/* Library Page */}
                <Route path="/library" element={<LibraryPage />} />

                {/* Clip Details Page */}
                <Route path="/clip" element={<ClipDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
