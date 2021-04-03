import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div className="App">
            <main className="form-signin">
                <form>
                    <h2 className="h3 mb-3 fw-normal" >Please Login</h2>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Email address" />
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <div className="form-group">
                        <button className="w-100 btn btn-lg btn-primary" type="submit" >Login</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Login;
