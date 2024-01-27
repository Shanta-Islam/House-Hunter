import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        const user = {email, password}
        fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.token){
                    localStorage.setItem('access-token', data.token);

                    navigate(location?.state ? location.state : '/');
                }
                
            })

    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:gap-40">
                <div>
                    <img src="https://i.ibb.co/CzprGwq/login-3305943-2757111.jpg" alt="" width={700} />
                </div>
                <div className="flex-shrink-0 w-full max-w-lg shadow-xl p-5">
                    <h2 className="text-2xl text-center">Please Login</h2>
                    <form onSubmit={handleLogin} className="mx-auto card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn">Login</button>
                        </div>
                    </form>
                    <p className="text-center mt-4">Do not have an account ? <Link to="/register">Register</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;