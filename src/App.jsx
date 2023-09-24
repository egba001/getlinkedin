import './index.css'
import Home from './pages/Home';
import Contact from './pages/Contact.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './pages/Register';
import Timeline from './components/home/Timeline';

// Create a router for the application
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/registration",
    element: <Register />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
