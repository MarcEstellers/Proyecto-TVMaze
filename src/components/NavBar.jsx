import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="container">
                <nav className='NavBar__nav'>
                    <h3 className='marca'>
                        <Link to="/">
                            <i className='fas fa-video'></i> ESTELLERS-FLIX
                        </Link>
                    </h3>
                    <ul className='Paginas'>
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/about">About</Link>
                        </li>
                        <li>
                            <Link to ="/favorite">Favorite</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar