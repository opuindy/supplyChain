import Nav from "./Nav";

const Header = () => {
  return (
    <header className="globalPadding flex py-8 shadow-md">
      <div className="container flex w-full items-center justify-between">
        <div className="text-xl font-bold uppercase">supply chain</div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
