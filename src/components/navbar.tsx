import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavigationMenuDemoProps = {
  className?: string;
  textColor?: string;
};

export function NavigationMenuDemo({ className, textColor }: NavigationMenuDemoProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = (
    <>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/tentang-kami">Tentang Kami</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/produk">Produk</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[200px] gap-2 p-2 backdrop-blur-lg bg-white/80 border-b border-white/20 shadow-md">
            {["Sistem Informasi Geografis", "Pemetaan Topografi dan Utilitas", "Pengembangan Aplikasi Web dan Mobile", "Agrikultur Drone"].map((layanan) => (
              <li key={layanan}>
                <NavigationMenuLink asChild className={`${textColor ?? ""}`}>
                  <Link to={`/layanan/${layanan.toLowerCase().replace(/\s/g, "-")}`}>
                    {layanan}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/dokumentasi/galeri">Dokumentasi</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/portofolio">Portofolio Proyek</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to="/kontak">Kontak</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-[50px]" />
          <div className="hidden sm:flex flex-col">
            <p className="text-md text-white">PT.Dunia Maya Comunica</p>
            <p className="text-sm text-gray-100 font-light">GIS and Application Development</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className={`flex items-center gap-4 ${className ?? ""}`}>
              {navItems}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/80 backdrop-blur-md border-t border-white/20 shadow-md">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-2 p-4">
              {navItems}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </div>
  );
}
