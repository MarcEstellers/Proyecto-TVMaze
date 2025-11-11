import { NavBarlinks } from "../data/data";
import "./NavBar.css";

const NavBar = ()=>{
    return (

    <>
        <nav className="NavBar">
            <div>
                {}
                <div className="Logo">
                <p>TvMaze</p>
                </div>
                {}
                <div>
                    <ul className="Menu">
                        {
                            NavBarlinks.map((item)=>(
                                <li key={item.id}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {}
                <div>

                </div>
                {}
                <div>

                </div>
            </div>
        </nav>
    </>

    )
};

export default NavBar;