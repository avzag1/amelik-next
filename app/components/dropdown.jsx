import Link from "next/link";

const Dropdown = ({ submenus }) => {
  <ul className="">
    {submenus.map((submenu, id) => (
      <li key={id} className="">
        <Link href={submenu.path}>{submenu.title}</Link>
      </li>
    ))}
  </ul>;
};

export default Dropdown;
