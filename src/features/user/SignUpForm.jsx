import { Link } from "react-router";

const SignUpForm = () => {
  return (
    <div className="flexCenter mt-30">
      <div className="text-center max-w-144 w-full shadow-hektoFeatured py-12.5 px-16 rounded-sm h-128.5">
        <h4 className="font-josefin font-bold text-4xl">Create Account</h4>
        <p className="text-[#9096B2] mt-2">
          Please Sign Up using your details bellow.
        </p>
        <form className="mt-9 flex flex-col">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="UserName"
            className="h-13 pl-3 border-1 placeholder:text-[#9096B2] border-[#C2C5E1] outline-none"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="h-13 pl-3 border-1 placeholder:text-[#9096B2] border-[#C2C5E1] outline-none mt-6"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="h-13 pl-3 border-1 placeholder:text-[#9096B2] border-[#C2C5E1] outline-none mt-6"
          />
          <button className="bg-headerPink h-11.5 text-white font-semibold mt-6 cursor-pointer">
            Sign up
          </button>
        </form>
        <div className="mt-7 text-[#9096B2]">
          <span>Don you have an Account? </span>
          <Link to={"/login"} className="underline underline-offset-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
