import React from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";
import Link from "next/link";

interface linksProps {
  active: boolean;
  label: string;
  link: string;
}

interface navbarProps {
  image?: string;
  button?: ButtonProps;
  links?: Array<linksProps>;
  variant?: 1 | 2 | 3 | 4 | 5;
}

export const Navbar = ({
  links = [],
  button = { label: "button", Type: "primary", size: "small" },
  image = "https://staging.sugarlogger.com/static/media/Logo.652fce25.svg",
  variant = 1,
}: navbarProps) => {
  return (
    <div className={`footer`}>
      <div className="container">
        {variant === 1 ? (
          <p className="para-md">description</p>
        ) : variant === 2 ? (
          <>
            <div className="links">
              {links.length > 0 &&
                links.slice(0, 4).map((doc, ind) => (
                  <Link
                    href={doc.link}
                    key={ind}
                    className={`${doc.active ? "active" : ""}`}
                  >
                    <Button Type="ghost" label={doc.label} size="small" />
                  </Link>
                ))}
              <Button {...button} />
            </div>
            <p className="para-md">description</p>
          </>
        ) : variant === 3 ? (
          <>
            <div className="left">
              <div className="logo">
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt="logo"
                    // onClick={() => (window.location.href = "/")}
                  />
                </Link>
              </div>
              <div className="links">
                {links.length > 0 &&
                  links.slice(0, 4).map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      className={`${doc.active ? "active" : ""}`}
                    >
                      <Button Type="ghost" label={doc.label} size="small" />
                    </Link>
                  ))}
                <Button {...button} />
              </div>
            </div>
            <div className="right">
              <p className="para-md">basic</p>
            </div>
          </>
        ) : variant === 4 ? (
          <>
            <div className="left">
              <div className="links">
                {links.length > 0 &&
                  links.slice(0, 4).map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      className={`${doc.active ? "active" : ""}`}
                    >
                      <Button Type="ghost" label={doc.label} size="small" />
                    </Link>
                  ))}
                <Button {...button} />
              </div>
            </div>
            <div className="right">
              <div className="links">
                {links.length > 0 &&
                  links.slice(0, 4).map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      className={`${doc.active ? "active" : ""}`}
                    >
                      <Button Type="ghost" label={doc.label} size="small" />
                    </Link>
                  ))}
                <Button {...button} />
              </div>
            </div>
          </>
        ) : variant === 5 ? (
          <>
            <div className="left">
              <div className="logo">
                <Link href="/">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt="logo"
                    // onClick={() => (window.location.href = "/")}
                  />
                </Link>
              </div>
              <div className="links">
                {links.length > 0 &&
                  links.slice(0, 4).map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      className={`${doc.active ? "active" : ""}`}
                    >
                      <Button Type="ghost" label={doc.label} size="small" />
                    </Link>
                  ))}
                <Button {...button} />
              </div>
            </div>
            <div className="right">
              <div className="links">
                {links.length > 0 &&
                  links.slice(0, 4).map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      className={`${doc.active ? "active" : ""}`}
                    >
                      <Button Type="ghost" label={doc.label} size="small" />
                    </Link>
                  ))}
                <Button {...button} />
              </div>
            </div>
            <p className="para-md">basic</p>
          </>
        ) : (
          <>
            <div className="data">
              <div className="links">
                {links.length > 0 &&
                  links.slice(0, 4).map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      className={`${doc.active ? "active" : ""}`}
                    >
                      <Button Type="ghost" label={doc.label} size="small" />
                    </Link>
                  ))}
                <Button {...button} />
              </div>
              <div className="links">
                {links.length > 0 &&
                  links.slice(0, 4).map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      className={`${doc.active ? "active" : ""}`}
                    >
                      <Button Type="ghost" label={doc.label} size="small" />
                    </Link>
                  ))}
                <Button {...button} />
              </div>
              <div className="info">
                <p className="para-lg">title</p>
                <p className="para-sm">description</p>
              </div>
              <div className="links">
                {links.length > 0 &&
                  links.slice(0, 4).map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      className={`${doc.active ? "active" : ""}`}
                    >
                      <Button Type="ghost" label={doc.label} size="small" />
                    </Link>
                  ))}
                <Button {...button} />
              </div>
            </div>
            <p className="para-md">basic</p>
          </>
        )}
      </div>
    </div>
  );
};
