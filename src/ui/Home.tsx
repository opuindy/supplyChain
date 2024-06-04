import { useEffect } from "react";
import Banner from "./../assets/images/banner.png";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const account = useAccount();

  const navigate = useNavigate();

  useEffect(() => {
    if (account.isConnected) {
      navigate("/login");
    }
  }, [account.isConnected, navigate]);

  return (
    <section
      className="globalPadding flex h-[85vh] w-full items-center justify-between
    "
    >
      <div className="m-auto flex w-full max-w-custom items-center  justify-between gap-8">
        <div className="mb-auto mt-24 flex h-full w-1/2  flex-col items-start justify-center">
          <h1 className="mb-2 text-left text-5xl font-semibold">
            Welcome to Hebron Food Supply Chain
          </h1>
          <p className="mb-6 text-left text-lg">
            Ensuring transparency and trust in your food.
          </p>
          {/* <LinkButton to="login">Connect To Get Started</LinkButton> */}
          <w3m-button label="Connect To Get Started" />
        </div>{" "}
        <div className="flex h-full w-1/2">
          <img
            src={Banner}
            alt="dooted background"
            className="m-auto h-full w-full scale-[1.4]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
