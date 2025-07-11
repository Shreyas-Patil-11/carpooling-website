import { useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import LoginSignupDialog from './LoginSignupDialog';

const AuthCheck = ({ 
  children, 
  fallback = null,
  onAuthSuccess = () => {},
  renderButton = true,
  buttonText = "Login to continue",
  buttonClassName = "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
}) => {
  const { user } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  
  // User is already authenticated
  if (user) {
    return children;
  }
  
  // Show login dialog immediately if no button render is requested
  if (!renderButton) {
    return (
      <LoginSignupDialog
        isInitiallyOpen={true}
        showButtonOnly={false}
        onLoginSuccess={onAuthSuccess}
      />
    );
  }
  
  // Otherwise show a button that will trigger login when clicked
  return (
    <>
      {fallback || (
        <div className="flex flex-col items-center justify-center p-4">
          <p className="text-center text-muted-foreground mb-4">
            Please log in to continue.
          </p>
          <LoginSignupDialog
            buttonText={buttonText}
            buttonClassName={buttonClassName}
            onLoginSuccess={onAuthSuccess}
          />
        </div>
      )}
    </>
  );
};

export default AuthCheck;