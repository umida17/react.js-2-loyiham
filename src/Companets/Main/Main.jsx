import './Main.css'
import bitmap from "../Main/png/Bitmap.png"
import path from "../Main/png/Path (3).png"
import dollr from "../Main/png/dollr.png"
import user from "../Main/png/user(2).png"
import group from "../Main/png/Group 10.svg"

function Main() {
    return (
        <>
            <div className="main">
                <section className="section1">
                    <div className="container">
                        <div className="section1-conatiner">
                            <div className="chiziq"></div>
                            <div className="top">
                                <div className="section1-left">
                                <h2 className='your'>Humanizing your insurance.</h2>
                                <p className='get'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                                <button className='plan'>VIEW PLANS</button>
                            </div>

                            <div className="section1-right">
                                 <img src={bitmap}alt="" />       
                            </div>
                            </div>
                             
                        </div>
                    </div>
                </section>

                <section className="section2">
                    <div className="container">
                            <div className="chiziq1"></div>
                            <h3 className='wer'>We're different</h3>
                            <div className="cards">
                                <div className="card">
                                 <img className='path' src={path} alt="" />
                                 <h2 className='snap'> Snappy Process</h2>
                                 <p className='our'>  Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p> </div>
                                <div className="card1">
                                 <img  className='path1' src={dollr} alt="" />
                                 <h2 className='snap'>Affordable Prices</h2>
                                 <p className='our'>We dont want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>  </div>
                                <div className="card2">
                                 <img className='path' src={user} alt="" />
                                 <h2 className='snap'>People First</h2>
                                 <p className='our'>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
                                </div>
                            </div>
                        </div>
                    
                </section>

                <section className='section3'>
                        <div className="container"> 
                            <div className="section3-container">
                                <h3 className='work'>Find out more about how we work</h3>
                                <button>HOW WE WORK</button>
                                <img className='' src={group} alt=""/>
                            </div>
                        </div>
                </section>
           </div>
        </>
    )
 }

 export default Main;