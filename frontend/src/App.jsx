import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {ThemeProvider} from '@mui/material';

function App() {

  const {user , loginWithRedirect } = useAuth0();
  console.log("current user : " ,user);
  const theme = createTheme({});
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <>
       <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
        <Auth0Provider
        domain="dev-spgtplnzvs7tyejk.us.auth0.com"
        clientId="szAycWeYU35FJ5t1GW3A631ThP59ENpo"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
          <AppProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/main/home" />} />
              <Route path="main" element={<Main />}>
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="resetpassword" element={<ResetPassword />} />
              </Route>

              <Route path="user" element={<User />}>
                <Route path="profile" element={<Profile />} />
                <Route path="prediction/:Category" element={<Prediction />} />
                <Route path="prediction" element={<Prediction />} />
                <Route path="history" element={<History />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route>

              <Route path="admin" element={<Admin />}>
                <Route path="manageuser" element={<ManageUser />} />
              </Route>
            </Routes>
          </AppProvider>
          </Auth0Provider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
