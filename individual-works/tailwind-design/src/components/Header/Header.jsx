import NavItem from "./NavItem";

const Header = () => {
    const navItems = [
      {
        label: "Features",
      },
      {
        label: "Pricings",
      },
      {
        label: "Testimonial",
      },
    ];
    return (
      <header className="bg-main min-h-[20px] py-4">
        <div className="lg:grid-cols-3 grid-cols-1 grid w-10/12 justify-items-center pt-3 h-min mx-auto mt-2">
          <div>
              <div className="font-bold text-lg mb-4 lg:mb-0">Startup Landing</div>
            </div>
            <div className="grid grid-cols-4 w-full justify-items-center mb-4 lg:mb-0">
                <button className="text-red-500 hover:text-red-700 hover:font-bold"> Home </button>
                {navItems.map((navItems) => (
                    <NavItem label={navItems.label} />
                ))}
            </div>
            <button className="text-red-500 hover:text-red-900 border rounded-3xl px-6 py-2 border-red-700 hover:bg-red-200"> Get Started</button>
        </div>
      </header>
    );
  };
  
  export default Header;