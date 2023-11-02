// import React from "react";

export default function NavBar() {

    return (
        <div className="navbarWrapper">
            <nav>
                <div className="brandContainer">
                    <img src="" alt="" className="brandLogo" />
                    <p className="h2 brandName">Pristressia site01</p>
                </div>

                
            
                <div className="navMenu">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">Project</a>
                        </li>

                        <li>
                            <a href="#">Tutorial</a>
                        </li>

                        <li>
                            <a href="#">Physics Zone</a>
                        </li>

                        <li>
                            <a href="#">About me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}