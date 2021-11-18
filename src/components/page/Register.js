import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="">
            <div className="container my-5">
		<div className="row">
			<div className="col-md-6 mx-auto">
				<div className="form-signin shadow p-2">
					<form className="form" method="post">
						<h1 className="h3 mb-3 fw-normal">Please Register here</h1>

						<div className="form-floating">
							<input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
							<label htmlFor="email">Email address</label>
						</div>
						<div className="form-floating">
							<input type="text" name="password" className="form-control" id="password" placeholder="Password" />
							<label htmlFor="password">Password</label>
						</div>
						<input type="submit" name="login" value="Register" className="w-100 btn btn-lg btn-primary" />
					</form>
                    <p className="my-1">Already have a account.?  
                        <Link className="btn btn-sm btn-primary" to="/login"> Sing-In here</Link>
                    </p> <hr/>
                    <p>Or, Sign-in using Google, <button className="btn btn-sm btn-danger">Google Sign-in</button></p>
				
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Register;