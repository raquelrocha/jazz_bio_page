import { NavigationMenu } from '../NavigationMenu';
import React from 'react';

export function Header() {
  return (
    <div className="header">
      <img alt="Auriluminus Logo" src="/auriluminus_logo.webp"></img>
      <NavigationMenu></NavigationMenu>
    </div>
  );
}
