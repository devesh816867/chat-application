import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MessageSquare, MailIcon, LoaderIcon, LockIcon } from "lucide-react";


import { Link } from "react-router";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-zinc-900">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            {/* FORM CLOUMN - LEFT SIDE */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-zinc-600/30">
              <div className="w-full max-w-md">
                {/* HEADING TEXT */}
                <div className="text-center mb-8">
                  <MessageSquare className="w-12 h-12 mx-auto text-zinc-400 mb-4" />
                  <h2 className="text-2xl font-bold text-zinc-200 mb-2">Welcome Back</h2>
                  <p className="text-zinc-400">Login to access to your account</p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* EMAIL INPUT */}
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />

                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                        placeholder="devesh@gmail.com"
                      />
                    </div>
                  </div>

                  {/* PASSWORD INPUT */}
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />

                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="input"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button className="auth-btn" type="submit" disabled={isLoggingIn}>
                    {isLoggingIn ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - PROFESSIONAL PANEL */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-12 bg-gradient-to-br from-zinc-950 to-zinc-900">
              <div className="max-w-md">

                <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                  Secure & Reliable Messaging
                </h2>

                <p className="text-zinc-400 mb-8">
                  Access your account to continue conversations in real time.
                  Powered by a scalable MERN architecture with secure authentication.
                </p>

                <div className="space-y-6">

                  <div>
                    <h4 className="text-white font-medium mb-1">Real-Time Communication</h4>
                    <p className="text-zinc-400 text-sm">
                      WebSocket-powered instant message delivery.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1">Secure Authentication</h4>
                    <p className="text-zinc-400 text-sm">
                      JWT-based access control and encrypted sessions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1">Modern Architecture</h4>
                    <p className="text-zinc-400 text-sm">
                      Built using MongoDB, Express, React, and Node.js.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}
export default LoginPage;
