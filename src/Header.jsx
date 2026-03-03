import { NavLink } from "react-router-dom"
export default function Header() {
    return (
        <>
            <header>
                <nav >
                    <div id="left-nav-item">
                        <div className="nav-item">
                            <div className="" id="logo">Logo</div>
                            {/* <div className="" id="home" ><a href="/home">Home</a></div> */}
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </div>
                    
                        <div className="nav-item">
                            <div className="">Logo</div>
                            {/* <div className="" id="profile"><a href="/profile">Profile</a></div> */}
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Profile
                            </NavLink>
                           
                        </div>
                    </div>
                   

                    <div id="right-nav-item">
                        <div className="nav-item">
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Logout
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
};