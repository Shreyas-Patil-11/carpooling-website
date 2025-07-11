import { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import LoginSignupDialog from './LoginSignupDialog';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // Store the current location to redirect back after login
  useEffect(() => {
    if (!user) {
      localStorage.setItem('redirectAfterLogin', location.pathname + location.search);
    }
  }, [user, location]);
  
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center p-8 min-h-[50vh]">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Login Required</h2>
          <p className="text-muted-foreground mb-4">
            You need to be logged in to access this page.
          </p>
          <LoginSignupDialog 
            isInitiallyOpen={true}
            onLoginSuccess={() => {
              // LoginSignupDialog will handle the redirect
            }}
          />
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;