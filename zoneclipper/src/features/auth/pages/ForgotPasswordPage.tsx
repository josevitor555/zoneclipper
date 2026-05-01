import React from 'react';
import AuthShell from '../components/AuthShell';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

const ForgotPasswordPage = () => {
    return (
        <AuthShell 
            title="Forgot your password?" 
            description="Enter your email and we'll send recovery instructions."
        >
            <ForgotPasswordForm />
        </AuthShell>
    );
}

export { ForgotPasswordPage };
