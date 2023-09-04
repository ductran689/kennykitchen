import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl: '/Dashboard',
    });

    console.log(res);
  };
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">WELCOME KEN</a>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Please Log In to continue
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                autoFocus
                value={userInfo.email}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                value={userInfo.password}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
            />
            {/* <div>
                    <button
                        type="button"
                        className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                        onClick={() => signIn("credentials", {
                            email: email.current, password: password.current,
                        })}
                    >
                        Log in
                    </button>
                </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

/* export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();
  if (session) {
    redirect('/');
  }
  return {
    props: {
      providers,
    },
  };
} */
