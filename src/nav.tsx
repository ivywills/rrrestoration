import { NavLink, Outlet } from 'react-router';

export default function Nav() {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        {' | '}
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
