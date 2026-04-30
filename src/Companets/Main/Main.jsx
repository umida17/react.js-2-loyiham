import './Main.css'

import bitmap from "../Main/png/Bitmap.png"

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
                            
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
 }

 export default Main;