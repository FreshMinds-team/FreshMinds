import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import AuthContext from '../../context/AuthContext'

const LoginPage = () => {
  let { loginUser, registerUser } = useContext(AuthContext)

  const [toggle, settoggle] = useState(true)

  const toggleSignUp = () => {
    settoggle(false)
  };

  const toggleSignIn = () => {
    settoggle(true)
  };

  return (
    <div>
      <Header />
      <div className="content">
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-8 offset-md-2">

              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src="/assets/img/login-banner.png" className="img-fluid" alt="Doccure Login" />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Login <span>Fresh Minds</span></h3>
                    </div>
                    <form onSubmit={loginUser}>
                      <div className="form-group form-focus">
                        <input type="text" name="username" className="form-control floating" />
                        <label className="focus-label">Username</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="password" name="password" className="form-control floating" />
                        <label className="focus-label">Password</label>
                      </div>

                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                      <div className="login-or">
                        <span className="span-or">or</span>
                      </div>

                      <div className="text-center dont-have">Don’t have an account? <Link to='/register'>Register</Link></div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )

}

export default LoginPage
