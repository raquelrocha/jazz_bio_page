import { Navigation } from './Navigation';
import React from 'react';

export function NavigationMenu() {
  const navItemsList = [
    { title: 'Home', link: '/' },
    { title: 'About us', link: '/about-us' },
    { title: 'Our dogs', link: '/dogs' }, //, ['Males', 'Females']],
    { title: 'Litters', link: '/litters' },
    { title: 'Contacts', link: '/contacts' },
  ];
  const navItems = navItemsList.map((menu, menuIdx) => {
    const { title, link } = menu;
    return <Navigation key={title} title={title} link={link}></Navigation>;
  });

  return <div>{navItems}</div>;
}
