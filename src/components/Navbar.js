import React, {Component} from 'react';
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className="parent">
                <div className="logoName">
                    <h1>Ariq Bimantoro</h1>
                </div>
                <div className="bg-color">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Treat me ?</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar