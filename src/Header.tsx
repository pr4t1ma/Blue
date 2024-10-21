import Menu from "./Menu";

const Header = () => {
  return (
    <div>
      <Menu
        items={[
          { label: "home", href: "./" },
          { label: "About", href: "./" },
          { label: "Contact", href: "./" },
        ]}
      />
    </div>
  );
};

export default Header;
