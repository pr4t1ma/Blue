import { FC } from "react";

type NavItem = {
  label: string;
  href: string;
};
type MenuProps = {
  items: NavItem[];
};

const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <div>
      <ul className="flex gap-10 list-none">
        {items.map((item) => {
          return (
            <li>
              <a className="no-underline" href="" key={item.href}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
