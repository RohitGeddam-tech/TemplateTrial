import React from "react";
import Link from "next/link";
import Image from "next/image";

interface linksProps {
  label: string;
  link: string;
}

interface socialProps {
  image: string;
  link: string;
}

interface complexProps {
  group1?: Array<linksProps>;
  group2?: Array<linksProps>;
  about?: {
    title: string;
    para: string;
  };
  sm?: Array<socialProps>;
}

interface navbarProps {
  image?: string;
  links?: Array<linksProps>;
  variant?: number;
  sm?: Array<socialProps>;
  complex?: complexProps;
  text?: string;
}

export const Footer = ({
  links = [],
  image = "https://staging.sugarlogger.com/static/media/Logo.652fce25.svg",
  variant = 1,
  sm = [],
  complex = {
    sm: [...sm],
    group1: [...links],
    group2: [...links],
    about: { title: "Title", para: "Description" },
  },
  text = "description",
}: navbarProps) => {
  return (
    <div className={`footer`}>
      <div className="container">
        {variant === 1 ? (
          <p className="para-md">{text}</p>
        ) : variant === 2 ? (
          <div className="insideFooter">
            <div className="links">
              {links.length > 0 &&
                links.map((doc, ind) => (
                  <Link
                    href={doc.link}
                    key={ind}
                    // className={`${doc.active ? "active" : ""}`}
                  >
                    <p className="para-md">{doc.label}</p>
                  </Link>
                ))}
            </div>
            <p className="para-md">{text}</p>
          </div>
        ) : variant === 3 ? (
          <div className="insideFooter">
            <div className="left">
              <div className="logo">
                <Link href="/">
                  <Image
                    width={130}
                    height={60}
                    src={image}
                    alt="logo"
                    // onClick={() => (window.location.href = "/")}
                  />
                </Link>
              </div>
              <div className="links">
                {links.length > 0 &&
                  links.map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      // className={`${doc.active ? "active" : ""}`}
                    >
                      <p className="para-md">{doc.label}</p>
                    </Link>
                  ))}
              </div>
            </div>
            <div className="right">
              <p className="para-md">{text}</p>
            </div>
          </div>
        ) : variant === 4 ? (
          <div className="insideFooter">
            <div className="left">
              <div className="links">
                {links.length > 0 &&
                  links.map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      // className={`${doc.active ? "active" : ""}`}
                    >
                      <p className="para-md">{doc.label}</p>
                    </Link>
                  ))}
              </div>
            </div>
            <div className="right">
              <div className="sm">
                {sm.length > 0 &&
                  sm.map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      // className={`${doc.active ? "active" : ""}`}
                    >
                      <Image
                        src={doc.image}
                        alt={doc.link}
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        ) : variant === 5 ? (
          <>
            <div className="insideFooter">
              <div className="left">
                <div className="logo">
                  <Link href="/">
                    <Image
                      width={130}
                      height={60}
                      src={image}
                      alt="logo"
                      // onClick={() => (window.location.href = "/")}
                    />
                  </Link>
                </div>
                <div className="links">
                  {links.length > 0 &&
                    links.map((doc, ind) => (
                      <Link
                        href={doc.link}
                        key={ind}
                        // className={`${doc.active ? "active" : ""}`}
                      >
                        <p className="para-md">{doc.label}</p>
                      </Link>
                    ))}
                </div>
              </div>
              <div className="right">
                <div className="sm">
                  {sm.length > 0 &&
                    sm.map((doc, ind) => (
                      <Link
                        href={doc.link}
                        key={ind}
                        // className={`${doc.active ? "active" : ""}`}
                      >
                        <Image
                          src={doc.image}
                          alt={doc.link}
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <p className="para-md" style={{ marginTop: 24 }}>
              {text}
            </p>
          </>
        ) : (
          <>
            <div className="data">
              <div className="links">
                <p className="para-lg">Group 1</p>
                {complex.group1 &&
                  complex.group1.length > 0 &&
                  complex.group1.map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      // className={`${doc.active ? "active" : ""}`}
                    >
                      <p className="para-sm">{doc.label}</p>
                    </Link>
                  ))}
              </div>
              <div className="links">
                <p className="para-lg">Group 2</p>
                {complex.group2 &&
                  complex.group2.length > 0 &&
                  complex.group2.map((doc, ind) => (
                    <Link
                      href={doc.link}
                      key={ind}
                      // className={`${doc.active ? "active" : ""}`}
                    >
                      <p className="para-sm">{doc.label}</p>
                    </Link>
                  ))}
              </div>
              <div className="info">
                <p className="para-lg">{complex.about?.title}</p>
                <p className="para-sm">{complex.about?.para}</p>
              </div>
              <div className="links">
                <p className="para-lg">Follow Us</p>
                <div className="sm">
                  {complex.sm &&
                    complex.sm.length > 0 &&
                    complex.sm.map((doc, ind) => (
                      <Link
                        href={doc.link}
                        key={ind}
                        // className={`${doc.active ? "active" : ""}`}
                      >
                        <Image
                          src={doc.image}
                          alt={doc.link}
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <p className="para-md" style={{ marginTop: 24 }}>
              {text}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
