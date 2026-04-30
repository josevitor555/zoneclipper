import type { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout">
            {/* Header and Sidebar can be added here later */}
            <main>
                {children}
            </main>
        </div>
    );
};
