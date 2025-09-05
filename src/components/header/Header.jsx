import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const {pathname} = useLocation()
  const isPink = pathname === "/posts"
  return (
    <header className={`${isPink ? "bg-pink-300" : ""} flex h-20 items-center gap-4`}>
      <div>Header</div>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/"}>Home</NavLink>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/posts"}>Post</NavLink>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/login"}>Login</NavLink>
    </header>
  );
};

export default Header;
