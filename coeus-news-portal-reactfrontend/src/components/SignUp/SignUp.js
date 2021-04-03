import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function SignUp() {
    return (
        <div className="App">
            <main className="form-signin">
                <form>
                    <h2 className="h3 mb-3 fw-normal" >Please Sign Up</h2>
                    <div className="form-floating">
                        <input type="First Name" className="form-control" id="floatingInput" placeholder="First Name" />
                    </div>
                    <div className="form-floating">
                        <input type="Last Name " className="form-control" id="floatingInput" placeholder="Last Name" />
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Email Address" />
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    </div>
                    <div className="form-floating">
                        <input type=" Confirm password" className="form-control" id="floatingPassword" placeholder="Confirm Password" />
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> I accept the terms of Use and privacy policy .
                        </label>
                    </div>
                    <div className="form-group">
                        <button className="w-100 btn btn-lg btn-primary" type="submit" >Sign Up </button>
                    </div>
                    <p className="forgot-password text-center">
                        Already registered <a href="/">log in?</a>
                    </p>
                </form>
            </main>
        </div>
    );
}

export default SignUp;
