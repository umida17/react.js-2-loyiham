import "./Footer.css"
import insure from "../Footer/foto.png/INSURE.png"
import fesbok from "../Footer/foto.png/feskbook.svg"
import twiter from "../Footer/foto.png/twiter.svg"
import icon from "../Footer/foto.png/icon.svg"
import inst from "../Footer/foto.png/inst.svg"


function Footer() {
    return(
        <>
        <div className="Footer">
        <div className="container">
            <div className="footer-container">
                <img src={insure} alt="" />
                <div className="icon">
                    <img src={fesbok} alt="" />
                    <img src={twiter} alt="" />
                    <img src={icon} alt="" />
                    <img src={icon} alt="" />
                </div>

            </div>
            
            <div className="footer-finish">
                <div className="Ocompany">
                    <h2>OUR COMPANY</h2>
                    <a href="#">HOW WE WORK</a>
                    <a href="#">WHY INSURE?</a>
                </div>

                <div className="help">
                    <h2>HELP ME</h2>
                    <a href="#">FAQ</a>
                    <a href="#">TERMS OF USE</a>
                </div>


                 <div className="CONTACT">
                    <h2>CONTACT</h2>
                    <a href="#">SALES</a>
                    <a href="#">SUPPORT</a>
                </div>

                
                 <div className="OTHERS">
                    <h2>OTHERS</h2>
                    <a href="#">CAREERS</a>
                    <a href="#">PRESS</a>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}

export default Footer