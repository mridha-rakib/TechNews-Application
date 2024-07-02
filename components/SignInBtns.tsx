import { FaGithub, FaGoogle } from "react-icons/fa";

const SignInBtns = () => {
  return (
    <>
      <h1 className="text-center mt-8">Sign In</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-3">
        <button className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-300 transition">
          <FaGithub />
          Sign In with GitHub
        </button>

        <button className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-300 transition">
          <FaGoogle />
          Sign In With Google
        </button>
      </div>
    </>
  );
};

export default SignInBtns;
