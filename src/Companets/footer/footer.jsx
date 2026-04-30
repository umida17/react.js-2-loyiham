import "./Footer.css"
import insure from "../Footer/foto.png/INSURE.png"
import fesbok from "../Footer/foto.png/feskbook.svg"




function Footer() {
    return(
        <>
        <div className="Footer">
        <div className="container">
            <div className="footer-container">
                <img src={insure} alt="" />
                <div className="icon">

                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer