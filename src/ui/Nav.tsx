// import CustomNavLink from "./CustomNavLink";
import LinkButton from "./LinkButton";

const Nav = () => {
  return (
    <nav className="flex">
      <ul className="m-auto flex items-center justify-between gap-x-4">
        {/* <CustomNavLink to="/" title="home" /> */}

        {/* <CustomNavLink to="dashboard" title="dashboard" /> */}

        {/* <CustomNavLink to="login" title="login" /> */}
        {/*  */}
        <LinkButton to="login">Connect</LinkButton>
      </ul>
    </nav>
  );
};

export default Nav;
