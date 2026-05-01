import React from 'react';
import AuthShell from '../components/AuthShell';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <AuthShell 
            title="Welcome back" 
            description="Sign in to your account to continue creating viral clips."
        >
            <LoginForm />
        </AuthShell>
    );
}

export { LoginPage };
