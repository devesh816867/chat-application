import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MessageSquare, LockIcon, MailIcon, UserIcon, LoaderIcon } from "lucide-react";
import { Link } from "react-router";

function SignUpPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-zinc-900">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">

            {/* LEFT SIDE - FORM */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-zinc-700/40">
              <div className="w-full max-w-md">
                
                <div className="text-center mb-8">
                  <MessageSquare className="w-12 h-12 mx-auto text-zinc-400 mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
                  <p className="text-zinc-400">Join the platform and start chatting instantly</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* FULL NAME */}
                  <div>
                    <label className="auth-input-label">Full Name</label>
                    <div className="relative">
                      <UserIcon className="auth-input-icon" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="input"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input"
                        placeholder="Create a strong password"
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/login" className="auth-link">
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - PRODUCT SECTION */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-12 bg-gradient-to-br from-zinc-950 to-zinc-900">
              <div className="max-w-md">

                <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                  Real-Time Communication Made Simple
                </h2>

                <p className="text-zinc-400 mb-8">
                  Built using MERN stack and WebSockets to deliver secure,
                  fast and scalable messaging for modern applications.
                </p>

                <div className="space-y-5">
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-zinc-300">Instant real-time messaging</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-zinc-300">Secure JWT authentication</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-zinc-300">Scalable backend architecture</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-zinc-300">Clean modern UI</p>
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

export default SignUpPage;
