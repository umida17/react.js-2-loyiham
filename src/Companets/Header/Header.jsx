import './Header.css';

import insure from "../Header/Hero/INSURE.svg"; 
 
 function Header() {
    return (
        <>
            <div className="header">
                  <div className="container">
                      <div className="header-container">
                        <img src={insure} alt="" />
                        <input type="checkbox" id="menu-toggle" />
                        <label for="menu-toggle" class="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>

                        <div className="home">
                            <a href="#">HOW WE WORK</a>
                            <a href="#">BLOG</a>
                            <a href="#">ACCOUNT</a>
                            <button className='view'>VIEW PLANS</button> 
                        </div>
                    </div>
                  </div>
            </div>
        </>
    )
 }

 export default Header;