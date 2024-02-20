import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import facebook from "./facebook.svg";
import xTwitter from "./x-twitter.svg";
import youtube from "./youtube.svg";
import telegram from "./telegram.svg";
import instagram from "./instagram.svg";
import whatsapp from "./whatsapp.svg";

export const Footer = () => {
  const [state, setState] = useState<any>({});
  const [group, setGroup] = useState<any>({});
  const [sm, setSm] = useState<any>(null);

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
        footer {
          data {
            attributes {
              footer_type
              background_color
              components{
                __typename
                ...on ComponentAtomsMenuGroupAtom{
                  title
                  menus{
                    title,
                    url
                  }
                }
                ...on ComponentComponentSocialMediaComponent{
                  title
                  socail_media{
                    icon
                    icon_type
                    title
                    url
                  }
                }
                ...on ComponentAtomsTitleInfoAtom{
                  title
                  description
                }
              }
            }
          }
        }
      }
      `,
    };
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, data)
      .then((res) => res);
    console.log(response.data.data.footer.data.attributes.background_color);
    // return response.data.data;
    setState({ ...response.data.data.navbar.data.attributes });
    setGroup({ ...response.data.data.footer.data.attributes });
  }
  useEffect(() => {
    Object.keys(state).length === 0 && fetchData();
  }, [state]);

  const GroupType = ({ data }: any) => {
    const info = data;
    // console.log(info);
    switch (info?.__typename) {
      case "ComponentAtomsMenuGroupAtom":
        return (
          <div className="links">
            <p className="para-lg">{info?.title}</p>
            {info?.menus.map((doc: any, ind: number) => (
              <Link href={doc.url} key={ind}>
                <p className="para-sm">{doc.title}</p>
              </Link>
            ))}
          </div>
        );
      case "ComponentAtomsTitleInfoAtom":
        return (
          <div className="info">
            <p className="para-lg">{info?.title}</p>
            <p className="para-sm">{info?.description}</p>
          </div>
        );
      case "ComponentComponentSocialMediaComponent":
        return (
          <div className="links">
            <p className="para-lg">{info?.title}</p>
            <div className="sm">
              {info.socail_media?.map((doc: any, ind: number) => (
                <Link
                  href={doc.url}
                  key={ind}
                  // className={`${doc.active ? "active" : ""}`}
                >
                  {/* <span
                      style={{ fontSize: "24px", marginRight: "8px" }}
                      className={`material-icons-${doc.icon_type}`}
                    >
                      {doc.icon}
                    </span> */}
                  {doc.icon === "facebook" ? (
                    <Image
                      src={facebook}
                      alt="facebook"
                      width={24}
                      height={24}
                    />
                  ) : doc.icon === "twitter" ? (
                    <Image
                      src={xTwitter}
                      alt="twitter"
                      width={24}
                      height={24}
                    />
                  ) : doc.icon === "youtube" ? (
                    <Image src={youtube} alt="youtube" width={24} height={24} />
                  ) : doc.icon === "instagram" ? (
                    <Image
                      src={instagram}
                      alt="instagram"
                      width={24}
                      height={24}
                    />
                  ) : doc.icon === "telegram" ? (
                    <Image
                      src={telegram}
                      alt="telegram"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src={whatsapp}
                      alt="whatsapp"
                      width={24}
                      height={24}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        );
      default:
        return <></>;
    }
  };

  useEffect(() => {
    group?.components?.length > 0 &&
      setSm(
        group.components?.findIndex(
          (el: any) =>
            el.__typename === "ComponentComponentSocialMediaComponent"
        )
      );
  }, [group]);


  return (
    <div className="footer" style={{ backgroundColor: group?.background_color || "#fff" }}>
      {group.components?.length > 0 && sm !== null && (
        <div className="container">
          {group.footer_type === "default" ? (
            <>
              <div className="insideFooter">
                <div className="left">
                  <div className="logo">
                    <Link href="/">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          `${process.env.NEXT_PUBLIC_API_URL}${state?.logo?.data?.attributes?.url}` ||
                          ""
                        }
                        style={{
                          width: "90%",
                          maxHeight: "50px",
                          maxWidth: "300px",
                          cursor: "pointer",
                        }}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="links">
                    {state.menus?.length > 0 &&
                      state.menus?.map((doc: any, ind: number) => (
                        <Link
                          href={doc.url}
                          key={ind}
                          // className={`${doc.active ? "active" : ""}`}
                          
                        >
                          <p className="para-md" style={{ color: group?.text_color || "#212b36" }}>{doc.title}</p>
                        </Link>
                      ))}
                  </div>
                </div>
                <div className="right">
                  <div className="sm">
                    {group.components[sm]?.socail_media?.length > 0 &&
                      group.components[sm]?.socail_media?.map(
                        (doc: any, ind: number) => (
                          <Link
                            href={doc.url}
                            key={ind}
                            // className={`${doc.active ? "active" : ""}`}
                          >
                            {/* <span
                              style={{
                                fontSize: "24px",
                                marginRight: "8px",
                              }}
                              className={`material-icons-${doc.icon_type}`}
                            >
                              {doc.icon}
                            </span> */}
                            {doc.icon === "facebook" ? (
                              <Image
                                src={facebook}
                                alt="facebook"
                                width={24}
                                height={24}
                              />
                            ) : doc.icon === "twitter" ? (
                              <Image
                                src={xTwitter}
                                alt="twitter"
                                width={24}
                                height={24}
                              />
                            ) : doc.icon === "youtube" ? (
                              <Image
                                src={youtube}
                                alt="youtube"
                                width={24}
                                height={24}
                              />
                            ) : doc.icon === "instagram" ? (
                              <Image
                                src={instagram}
                                alt="instagram"
                                width={24}
                                height={24}
                              />
                            ) : doc.icon === "telegram" ? (
                              <Image
                                src={telegram}
                                alt="telegram"
                                width={24}
                                height={24}
                              />
                            ) : (
                              <Image
                                src={whatsapp}
                                alt="whatsapp"
                                width={24}
                                height={24}
                              />
                            )}
                          </Link>
                        )
                      )}
                  </div>
                </div>
              </div>
              <p className="para-md companyName" style={{ marginTop: 24, color: group?.text_color || "#212b36"  }}>
                © Sugarlogger Technologies Pvt. Ltd.
              </p>
            </>
          ) : (
            <>
              {group.components.length > 0 && (
                <div className="data">
                  <GroupType data={group.components[0]} />
                  <GroupType data={group.components[1]} />
                  <GroupType data={group.components[2]} />
                  <GroupType data={group.components[3]} />
                </div>
              )}
              <p className="para-md companyName" style={{ marginTop: 24, color: group?.text_color || "#212b36" }}>
                © Sugarlogger Technologies Pvt. Ltd.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
