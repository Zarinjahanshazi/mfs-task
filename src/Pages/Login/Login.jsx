

const Login = () => {
    return (
        <div>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">PIN</span>
          </label>
          <input type="password" placeholder="PIN" className="input input-bordered" required />
          <label className="label">
            {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input type="number" placeholder="Mobile ~Number" className="input input-bordered" required />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div> */}
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;