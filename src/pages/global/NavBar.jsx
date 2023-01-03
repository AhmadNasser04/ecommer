import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="fixed min-h-[5vh] w-screen bg-white shadow-md flex items-center justify-between px-5 z-10">
      {/* LOGO */}
      <Link to="/">
        <div className="text-red-600 font-semibold cursor-pointer">ECOMMER</div>
      </Link>
      {/* ICONS */}
      <div>
        <IconButton>
          <ShoppingCartIcon className="text-black" />
        </IconButton>
      </div>
    </header>
  );
}

export default NavBar;
