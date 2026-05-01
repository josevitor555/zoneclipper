// Import RRD
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages (features)
import ClipperPage from "@/features/clipper/pages/ClipperPage";
import AnalyticsDashboardPage from "@/features/analytics/pages/AnalyticsDashboardPage";
import LibraryPage from "@/features/libraries/pages/LibraryPage";
import ClipEditorPage from "@/features/clips/pages/ClipEditorPage";
import { LoginPage } from "@/features/auth/pages/LoginPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { ForgotPasswordPage } from "@/features/auth/pages/ForgotPasswordPage";

// Router
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Home Page */}
                <Route path="/" element={<ClipperPage />} />

                {/* Auth Pages */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                {/* Video Details Page */}
                <Route path="/video-details" element={<AnalyticsDashboardPage />} />

                {/* Library Page */}
                <Route path="/library" element={<LibraryPage />} />

                {/* Clip Editor Page */}
                <Route path="/clip-editor" element={<ClipEditorPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
