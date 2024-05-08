import React,{useState} from 'react'
import { NavLink, useNavigate} from 'react-router-dom';

function Login()
{
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if(username == 'admin' && password == '1234')
      {
        alert("Successful login");
        navigate('/dashboard');
    }
    else
    {
      alert("Login failed");
    }
  }
  return (
      <div className="flex h-screen font-body">
          {/* Left side with image */}
          <div className="w-3/5 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
          </div>
          
          {/* Right side with login form */}
          <div className="w-2/5 flex flex-col justify-center items-center bg-[#eee]">
          <div className='text-primary text-6xl text-center w-full font-bold m-4'>SCTSMA</div>
              <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Login</h2>
                  <p className="text-gray-600 mb-6">Welcome back! Please login to your account.</p>
                  
                  {/* Form */}
                  <form>
                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                      </div>
                      <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                      </div>
                      <div className="flex items-center justify-between">
                          <button className="bg-primary hover:bg-secondary-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=> handleLogin()}>
                              Login
                          </button>
                          <a className="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary" href="#">
                              Forgot Password?
                          </a>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                          <NavLink to="/signup">
                          <a className="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary" href="#">
                              Dont have an account?
                          </a>
                          </NavLink>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default Login