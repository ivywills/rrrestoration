import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Nav from './nav.tsx';
import Home from './home.tsx';
import About from './about.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
