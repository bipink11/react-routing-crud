import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Page</h1>
                <form>
                    <div className="form-group row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Contact;
