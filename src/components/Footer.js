import React, {Component} from 'react'
import './navbar.css'

class Footer extends Component {
    render() {
        return (
            <div className="parentFooter">
                <div className="contact2">
                    <h2>Here's my contact :</h2>
                </div>
                <div className="foot">
                    <ul className="contact">
                        <li><a href="">Email : ariqbimantoro@gmail.com</a></li>
                        <li><a href="">Phone :082185647268</a></li>
                        <li><a href="">Instagram : @ariqbimantoro</a></li>
                        <li><a href="">Github : @arb712</a></li>
                        <li><a href="">Gitlab : @arb712</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Footer