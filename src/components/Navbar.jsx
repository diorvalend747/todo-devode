const Navbar = () => {
  return (
    <a
      href="/"
      data-cy="navbar"
      className="h-[105px] bg-primary flex items-center text-white"
    >
      <div className="container max-w-[1000px]  mx-auto">
        <h2 className="text-2xl font-bold">TO DO LIST APP</h2>
      </div>
    </a>
  );
};

export default Navbar;
