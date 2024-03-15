import apparelpodLogo1 from "/ApparelPod/apparelpodLogo.svg";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5">
      <img src={apparelpodLogo1} className="w-32 p-0 m-0 h-auto" />
      <ul className="flex gap-10 text-lg">
        {navLinks.map((item, index) => (
          <a href={item.link} key={index} className="font-bold">
            {item.label}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Products",
    link: "#products",
  },
  {
    label: "Business",
    link: "#business",
  },
  {
    label: "Sign In",
    link: "#sign-in",
  },
];
