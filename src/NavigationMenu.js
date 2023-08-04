import { useState } from 'react';

import { Navigation } from './Navigation';

export function NavigationMenu() {
  const [activeMenu, setActiveMenu] = useState(0);
  const navItemsList = [
    { title: 'Home', link: '/' },
    { title: 'About us', link: 'about-us' },
    { title: 'Our dogs', link: '/dogs' }, //, ['Males', 'Females']],
    { title: 'Litters', link: '/litters' },
    { title: 'Contacts', link: '/contacts' },
  ];
  const navItems = navItemsList.map((menu, menuIdx) => {
    const { title, link } = menu;
    return (
      <Navigation
        key={menuIdx}
        title={title}
        link={link}
      ></Navigation>
    );
  });

  console.log(navItems);

  return <div>{navItems}</div>;
}
