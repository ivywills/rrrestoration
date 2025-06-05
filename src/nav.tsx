import { NavLink, Outlet } from 'react-router';

export default function Nav() {
  return (
    <>
      <div className="navbar bg-secondary text-white shadow-sm">
        <div className="flex-1">
          <div className="btn btn-ghost text-xl">RR Restorations</div>
        </div>
        <div className="flex-none space-x-2">
          <NavLink to="/" end>
            <button className="btn btn-soft btn-primary">Home</button>
          </NavLink>
          <NavLink to="/about">
            <button className="btn btn-soft btn-primary">About</button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
