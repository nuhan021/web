import './css/Services.css';
const Services = () => {
    
    return (
        <>
            <div className="container">
                <pre id='pre'>what i do ?</pre>
                <h3 id='h3'>here ar some of my <span>experitise</span></h3>

                <div className="exprertise">

                    <div style={{borderBottom:'3px solid #2c98f0'}} className="item item_1">
                        <h2>react app</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>

                        <div className="align">
                            <div className="warp">
                                <div style={{borderBottom:'30px solid #2c98f0'}} className="up"></div>
                                <div style={{backgroundColor:'#2c98f0'}} className="mid">
                                <iconify-icon icon="akar-icons:react-fill" width="40" height="40" style={{color:'white'}}></iconify-icon>
                                </div>
                                <div style={{borderTop: '30px solid #2c98f0'}} className="down"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{borderBottom:'3px solid #ec5453'}} className="item item_2">
                        <h2>next js</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        <div className="align">
                            <div className="warp">
                            <div style={{borderBottom:'30px solid #ec5453'}} className="up"></div>
                                <div style={{backgroundColor:'#ec5453'}} className="mid">
                                <iconify-icon icon="cib:next-js" width="40" height="40" style={{color:'white'}}></iconify-icon>
                                </div>
                                <div style={{borderTop: '30px solid #ec5453'}} className="down"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{borderBottom:'3px solid #f9bf3f'}} className="item item_3">
                        <h2>react native</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        <div className="align">
                            <div className="warp">
                            <div style={{borderBottom:'30px solid #f9bf3f'}} className="up"></div>
                                <div style={{backgroundColor:'#f9bf3f'}} className="mid">
                                <iconify-icon icon="tabler:brand-react-native" width="40" height="40" style={{color:'white'}}></iconify-icon>
                                </div>
                                <div style={{borderTop: '30px solid #f9bf3f'}} className="down"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{borderBottom:'3px solid #ff1493'}} className="item item_4">
                        <h2>Mongo DB</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        <div className="align">
                            <div className="warp">
                            <div style={{borderBottom:'30px solid #ff1493'}} className="up"></div>
                                <div style={{backgroundColor:'#ff1493'}} className="mid">
                                <iconify-icon icon="ant-design:database-filled" width="40" height="40" style={{color:'white'}}></iconify-icon>
                                </div>
                                <div style={{borderTop: '30px solid #ff1493'}} className="down"></div>
                            </div>
                        </div>
                    </div>

                </div>




                <div className="exprertise2">

                    <div style={{borderBottom:'3px solid #a84cb8'}} className="item item_5">
                        <h2>machin learning</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>

                        <div className="align">
                            <div className="warp">
                                <div style={{borderBottom:'30px solid #a84cb8'}} className="up"></div>
                                <div style={{backgroundColor:'#a84cb8'}} className="mid">
                                <iconify-icon icon="carbon:machine-learning" width="40" height="40" style={{color:'white'}}></iconify-icon>
                                </div>
                                <div style={{borderTop: '30px solid #a84cb8'}} className="down"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{borderBottom:'3px solid #2fa499'}} className="item item_6">
                        <h2>website</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        <div className="align">
                            <div className="warp">
                            <div style={{borderBottom:'30px solid #2fa499'}} className="up"></div>
                                <div style={{backgroundColor:'#2fa499'}} className="mid">
                                <iconify-icon icon="arcticons:websitemonitor" width="40" height="40" style={{color:'white'}}></iconify-icon>
                                </div>
                                <div style={{borderTop: '30px solid #2fa499'}} className="down"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{borderBottom:'3px solid #4054b2'}} className="item item_7">
                        <h2>graphic design</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        <div className="align">
                            <div className="warp">
                            <div style={{borderBottom:'30px solid #4054b2'}} className="up"></div>
                                <div style={{backgroundColor:'#4054b2'}} className="mid">
                                <iconify-icon icon="fluent:design-ideas-24-regular" width="40" height="40" style={{color:'white'}}></iconify-icon>
                                </div>
                                <div style={{borderTop: '30px solid #4054b2'}} className="down"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{borderBottom:'3px solid #00ffff'}} className="item item_8">
                        <h2>Node js</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        <div className="align">
                            <div className="warp">
                            <div style={{borderBottom:'30px solid #00ffff'}} className="up"></div>
                                <div style={{backgroundColor:'#00ffff'}} className="mid">
                                <iconify-icon icon="fa-brands:node-js" width="40" height="40" style={{color:'white'}} ></iconify-icon>
                                </div>
                                <div style={{borderTop: '30px solid #00ffff'}} className="down"></div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Services;