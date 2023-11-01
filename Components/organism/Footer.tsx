import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

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
    // console.log(response.data.data);
    // return response.data.data;
    setState({ ...response.data.data.navbar.data.attributes });
    setGroup({ ...response.data.data.footer.data.attributes });
  }
  useEffect(() => {
    Object.keys(state).length === 0 && fetchData();
  }, [state]);

  const GroupType = ({ data }: any) => {
    const info = data;
    switch (info.__typename) {
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
                  <span
                    style={{ fontSize: "24px", marginRight: "8px" }}
                    className={`material-icons-${doc.icon_type}`}
                  >
                    {doc.icon}
                  </span>
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
    <div className={`footer`} style={{ backgroundColor: `white` }}>
      {group.components?.length > 0 && sm !== null && (
        <div className="container">
          {group.footer_type === "default" ? (
            <>
              <div className="insideFooter">
                <div className="left">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        width={130}
                        height={60}
                        src={
                          `${process.env.NEXT_PUBLIC_API_URL}${state?.logo?.data?.attributes?.url}` ||
                          ""
                        }
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
                          <p className="para-md">{doc.title}</p>
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
                            <span
                              style={{
                                fontSize: "24px",
                                marginRight: "8px",
                              }}
                              className={`material-icons-${doc.icon_type}`}
                            >
                              {doc.icon}
                            </span>
                          </Link>
                        )
                      )}
                  </div>
                </div>
              </div>
              <p className="para-md" style={{ marginTop: 24 }}>© Sugarlogger Technologies Pvt. Ltd.</p>
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
              <p className="para-md" style={{ marginTop: 24 }}>© Sugarlogger Technologies Pvt. Ltd.</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
