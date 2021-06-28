import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className = "row">
                    <div className = "col-md-5 left">

                    </div>

                    <div className = "col-md-7 right">
                        <div className = "row">
                           <div className = "content">
                                <h3> <img src = {"images/ghanalogo.png"} />
                                Ghana Passport Delivery Portal</h3>
                                
                                <h1>Get your Passport Delivered to your doorstep.</h1>

                                <h3>Begin By Confirming Your Identity</h3>
                            
                                <br></br><br></br><br></br>

                               
                                <label>Enter your phone number used during passport application</label><br></br>
                                <div className="input-group col-lg-8">
                                    <input type="text" className="form-control" placeholder="024#######"/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button" id = "button">Send Code</button>
                                    </span>
                                         
                                </div>


                            </div>
                               
                        </div>
                    </div>
                </div>
            </div>

                
            
        )
    }
}
