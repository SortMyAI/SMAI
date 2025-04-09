import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Github } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useFirebaseConnection } from '@/contexts/FirebaseConnectionContext';
import { useEffect, useState } from 'react';

const Login = () => {
  const { signInWithProvider, user } = useAuth();
  const { isOnline, forceReconnect } = useFirebaseConnection();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (user) {
      const from = (location.state as any)?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);
  
  const handleProviderSignIn = async (provider: 'google' | 'github' | 'twitter') => {
    setIsLoading(true);
    try {
      if (!isOnline) {
        await forceReconnect();
      }
      await signInWithProvider(provider);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Button 
              variant="outline" 
              type="button" 
              disabled={isLoading}
              onClick={() => handleProviderSignIn('google')}
            >
              <Github className="mr-2 h-4 w-4" />
              {isLoading ? 'Connecting...' : 'Sign in with Google'}
            </Button>
            <Button 
              variant="outline" 
              type="button" 
              disabled={isLoading}
              onClick={() => handleProviderSignIn('github')}
            >
              <Github className="mr-2 h-4 w-4" />
              {isLoading ? 'Connecting...' : 'Sign in with GitHub'}
            </Button>
            <Button 
              variant="outline" 
              type="button" 
              disabled={isLoading}
              onClick={() => handleProviderSignIn('twitter')}
            >
              {isLoading ? 'Connecting...' : 'Sign in with Twitter'}
            </Button>
            {!isOnline && (
              <Button
                variant="destructive"
                onClick={forceReconnect}
                type="button"
                disabled={isLoading}
              >
                Retry Connection
              </Button>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-sortmy-blue hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
