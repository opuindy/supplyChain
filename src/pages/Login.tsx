import LoginSection from "../ui/LoginSection";
import loginImage from "./../assets/images/loginImg.jpg";

const Login = () => {
  return (
    <section
      className="flex h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <LoginSection />
    </section>
  );
};

export default Login;
