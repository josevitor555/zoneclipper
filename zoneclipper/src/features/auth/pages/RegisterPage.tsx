import React from 'react';
import AuthShell from '../components/AuthShell';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    return (
        <AuthShell 
            title="Create your account" 
            description="Start creating viral clips from long videos with ZoneClipper.ai."
        >
            <RegisterForm />
        </AuthShell>
    );
}

export { RegisterPage };
