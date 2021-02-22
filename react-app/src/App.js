import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './services/auth';

// Component import line
import { LandingPage, MainPage, Templates, Management, ResumeForm } from './components';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} authenticated={authenticated} />
      <Switch>
        <Route exact path="/">
          <LandingPage authenticated={authenticated} />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path="/main" exact={true} authenticated={authenticated}>
          <MainPage />
        </ProtectedRoute>
        <ProtectedRoute path="/resumes" exact={true} authenticated={authenticated}>
          <Management />
        </ProtectedRoute>
        <ProtectedRoute path="/templates" exact={true} authenticated={authenticated}>
          <Templates />
        </ProtectedRoute>
        <ProtectedRoute path="/resume/:userId/create" exact={true} authenticated={authenticated}>
          <ResumeForm />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
