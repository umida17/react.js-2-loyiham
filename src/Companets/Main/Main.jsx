import './Main.css'

import bitmap from "../Main/png/Bitmap.png"
import path from "../Main/png/Path (3).png"
import dollr from "../Main/png/dollr.png"
import user from "../Main/png/user(2).png"

function Main() {
    return (
        <>
            <main>
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

                <section className='section2'>
                    <div className="container">
                        <div className="section2-container">
                            <div className="chiziq1"></div>
                            <h3 className='wer'>We’re different</h3>
                            <div className="cards">

                                <div className="card">
                                 <img src={path} alt="" />
                                 <h2>Snappy Process</h2>
                                 <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>

                                </div>

                                <div className="card1">
                                 <img src={dollr} alt="" />
                                 <h2>Affordable Prices</h2>
                                 <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>

                                </div>


                                <div className="card2">
                                 <img src={user} alt="" />
                                 <h2>People First</h2>
                                 <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>

                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
 }

 export default Main;