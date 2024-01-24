
import { Link } from "react-router-dom";

const Register = () => {


    // const googleProvider = new GoogleAuthProvider();
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const phone = form.get("phone");
        const role = form.get("role");
        const email = form.get("email");
        const password = form.get("password");
        const newUser = {name, phone,role, email, password};
        fetch(`http://localhost:5000/signup`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert.success('User Created Successfully')
                }
                form.reset();
            })

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:gap-40">
                <div>
                    <img src="https://i.ibb.co/CzprGwq/login-3305943-2757111.jpg" alt="" width={700} />
                </div>
                <div className="flex-shrink-0 w-full max-w-lg shadow-xl p-5">
                    <h2 className="text-2xl text-center">Please Register</h2>
                    <form onSubmit={handleRegister} className="mx-auto card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select className="select select-bordered w-full" name='role' required>
                                <option value="Owner">House Owner</option>
                                <option value="Renter">House Renter</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name="phone" placeholder="Phone number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn">Register</button>
                        </div>
                    </form>
                    <p className="text-center mt-4">Already have an account ? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;