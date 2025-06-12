import { NavLink } from "react-router-dom"
const AppHeader = () => {
return (
    <header>
<nav className="navbar navbar-expand-lg bg-dark fs-5" data-bs-theme="dark" >
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  aria-current="page" to="post">I nostri posts</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/about">About Us</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </header>
    
)
}
export default AppHeader