import React, { useEffect, useState } from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";
import Link from "next/link";
import axios from "axios";
import { Appointment } from "./Appointment";

interface menuProps {
  title: string;
  url: string;
}

interface navbarProps {
  image?: string;
  button?: ButtonProps;
  menu?: Array<menuProps>;
}

export const Navbar = ({
  image = "https://staging.sugarlogger.com/static/media/Logo.652fce25.svg",
}: navbarProps) => {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [state, setState] = useState<any>({});

  async function fetchData() {
    const data = {
      query: `
      query{
        navbar{
          data{
            attributes{
              menus{
                title,
                url
              },
              url,
              button{
                title,
                cta_action,
                type,
                icon_type,
                icon
              },
              logo{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        },
      }
      `,
    };
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, data)
      .then((res) => res);
    // console.log(response.data.data);
    // return response.data.data;
    setState({ ...response.data.data.navbar.data.attributes });
  }
  useEffect(() => {
    Object.keys(state).length === 0 && fetchData();
  }, [state]);

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
                src={
                  `${process.env.NEXT_PUBLIC_API_URL}${state?.logo?.data?.attributes?.url}` ||
                  image
                }
                alt="logo"
                // onClick={() => (window.location.href = "/")}
                // onClick={handleClick}
              />
            </Link>
          </div>
          <Button
            cta_title={state?.button?.title}
            cta_action={state?.button?.cta_action}
            cta_type={state?.button?.type}
            handleClick={() => {
              setFormOpen(true);
            }}
            size={"small"}
          />
        </div>
        <div className="menu">
          {state.menus?.length > 0 &&
            state.menus?.map((doc: any, ind: number) => (
              <Link
                href={doc.url}
                key={ind}
                className={`${
                  typeof window !== "undefined" &&
                  window.location.pathname === doc.url
                    ? "active"
                    : ""
                }`}
              >
                <Button
                  cta_type="ghost"
                  cta_title={doc.title}
                  // handleClick={handleClick}
                  size="small"
                />
              </Link>
            ))}
          <Button
            cta_title={state?.button?.title}
            cta_action={state?.button?.cta_action}
            cta_type={state?.button?.type}
            size={"small"}
            handleClick={() => {
              setFormOpen(true);
            }}
          />
        </div>
      </div>
      {open && (
        <div className="mobileMenu">
          {state.menus?.length > 0 &&
            state.menus?.map((doc: any, ind: number) => (
              <Link
                href={doc.url}
                key={ind}
                className={`${
                  typeof window !== "undefined" &&
                  window.location.pathname === doc.url
                    ? "active"
                    : ""
                }`}
              >
                <Button
                  cta_type="ghost"
                  cta_title={doc.title}
                  handleClick={handleClick}
                  size="small"
                />
              </Link>
            ))}
        </div>
      )}
      {formOpen && <Appointment setOpen={setFormOpen} />}
    </div>
  );
};
