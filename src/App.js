import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Orders from './components/Orders';
import Main from './layout/Main';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: (
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                ),
            },
            {
                path: '/home',
                element: (
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                ),
            },
            {
                path: '/orders',
                element: (
                    <PrivateRoute>
                        <Orders />
                    </PrivateRoute>
                ),
            },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
        ],
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
