import Dropdown from "./dropdown";
import Link from "next/link";

const MenuItems = ({ items }) => {
  return (
    <li className="">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <Link href={items.path}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;