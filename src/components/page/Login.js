import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

	const {user,signInUsingGoogle} = useAuth();

	const location = useLocation();
	const history = useHistory();
	const redirect_url = location.state?.from || '/shop';
	
	const handlerGoogleLogin = () => {
		signInUsingGoogle()
			.then(result => {
				history.push(redirect_url);
			})
	}
	

    return (
        <div className="">
            <div className="container my-5">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<div className="form-signin shadow p-2">
							<form className="form" method="post">
								<h1 className="h3 mb-3 fw-normal">Please sign in ( {user.displayName} )</h1>
								<div className="form-floating">
									<input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
									<label htmlFor="email">Email address</label>
								</div>
								<div className="form-floating">
									<input type="text" name="password" className="form-control" id="password" placeholder="Password" />
									<label htmlFor="password">Password</label>
								</div>
								<input type="submit" name="login" value="Login" className="w-100 btn btn-lg btn-primary" />
							</form>
							<p className="my-1">Don't have a account.?  
								<Link className="btn btn-sm btn-primary" to="/register"> Sign-Up here</Link>
							</p><hr/>
							<p>Or, Sign-in using Google, <button onClick={handlerGoogleLogin} className="btn btn-sm btn-danger">Google Sign-in</button></p>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Login;