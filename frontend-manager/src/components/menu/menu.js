import React from 'react';
import{ NavLink} from 'react-router-dom'
function Menu(){
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-info navbar-dark">
                <a className="navbar-brand">MANAGER SONG</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact = {true} >Trang chủ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/songs"   >Quản lý sản phẩm</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Menu;