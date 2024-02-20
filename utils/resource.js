import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ConfigData = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [font, setFont] = useState("Roboto");
  const [theme, setTheme] = useState("theme1");
  const [number,setNumber]=useState();
  async function fetchData() {
    const data = {
      query: `
            query {
                configs{
                    data{
                      attributes{
                        name
                        value
                      }
                    }
                  }
            }
            `,
    };
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, data)
      .then((response) => {
        if (response?.status === 200) {
          setLoad(true);
          setData([...response.data.data.configs?.data]);
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    !load && fetchData();
  }, [load]);

  useEffect(() => {
    if (data?.length > 0) {
      // console.log(data?.filter((el) => el.attributes.name === "theme")[0].attributes.value);
      // const fontValue = data?.filter((el) => el.attributes.name === "font")[0].attributes.value;
      const themeValue = data?.filter((el) => el.attributes.name === "theme")[0].attributes.value;

      const whatsappAttribute = data.find(item => item.attributes.name === "whatsapp");
      const whatsApp_number =whatsappAttribute ? whatsappAttribute.attributes.value :null;
      setNumber(whatsApp_number)

      // fontValue && setFont(fontValue);
      setFont("Roboto");
      themeValue && setTheme(themeValue);
    }
  }, [data]);

  return [font, theme , number];
};

export { ConfigData };
