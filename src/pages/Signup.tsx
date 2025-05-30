import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Github } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Signup = () => {
  const { signInWithProvider } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-sortmy-dark px-4">
      <Card className="w-full max-w-md bg-sortmy-gray/10 border-sortmy-gray/30">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">Sign up for your SortMyAI creator account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Button 
              variant="outline" 
              type="button" 
              className="w-full" 
              onClick={() => signInWithProvider('google')}
            >
              <Github className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
            <Button 
              variant="outline" 
              type="button" 
              className="w-full"
              onClick={() => signInWithProvider('github')}
            >
              <Github className="mr-2 h-4 w-4" />
              Sign up with GitHub
            </Button>
            <Button 
              variant="outline" 
              type="button" 
              className="w-full"
              onClick={() => signInWithProvider('twitter')}
            >
              <Github className="mr-2 h-4 w-4" />
              Sign up with Twitter
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-sortmy-blue hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;

