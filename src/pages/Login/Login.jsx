import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  //   load recaptcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Login success!');
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleLogin}
              className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
                <button className="btn btn-outline btn-sm mt-2">Validate</button>
              </div>
              <div className="form-control mt-6">
                {/* TODO: make button disable for captcha */}
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={'Login'}
                  disabled={false}
                />
              </div>
            </form>
            <div>
              <SocialLogin></SocialLogin>
            </div>
            <p className="text-center pb-3">
              <small>
                New Here? <Link to={'/signup'}>Create a new Account</Link>{' '}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
