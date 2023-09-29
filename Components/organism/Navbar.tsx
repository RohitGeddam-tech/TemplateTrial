import React, { useState } from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";
import Link from "next/link";

interface menuProps {
  active: boolean;
  label: string;
  link: string;
}

interface navbarProps {
  image?: string;
  button?: ButtonProps;
  menu?: Array<menuProps>;
}

export const Navbar = ({
  menu = [],
  button = { label: "button", Type: "primary", size: "small" },
  image = "https://staging.sugarlogger.com/static/media/Logo.652fce25.svg",
}: navbarProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div className={`navbar`}>
      <div className="container">
        <div className="logo">
          <div className="imgLink">
            {open ? (
              <span className="material-icons-outlined" onClick={handleClick}>
                close
              </span>
            ) : (
              <span
                className="material-icons-outlined onlyMobile"
                onClick={handleClick}
              >
                menu
              </span>
            )}
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt="logo"
                // onClick={() => (window.location.href = "/")}
                onClick={handleClick}
              />
            </Link>
          </div>
          <Button {...button} />
        </div>
        <div className="menu">
          {menu.length > 0 &&
            menu.slice(0, 4).map((doc, ind) => (
              <Link
                href={doc.link}
                key={ind}
                className={`${doc.active ? "active" : ""}`}
              >
                <Button
                  Type="ghost"
                  label={doc.label}
                  size="small"
                  handleClick={handleClick}
                />
              </Link>
            ))}
          <Button {...button} />
        </div>
      </div>
      {open && (
        <div className="mobileMenu">
          {menu.length > 0 &&
            menu.slice(0, 4).map((doc, ind) => (
              <Link
                href={doc.link}
                key={ind}
                className={`${doc.active ? "active" : ""}`}
              >
                <Button
                  Type="ghost"
                  handleClick={handleClick}
                  label={doc.label}
                  size="small"
                />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
