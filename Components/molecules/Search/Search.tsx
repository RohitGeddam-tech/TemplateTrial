import React, { useState } from "react";
import { InputProps } from "../Input/Utils";
import Input from "../Input/Input";

interface searchProps {
  inputData?: InputProps;
  type?: "withDropDown" | "withoutDropDown";
  listData?: Array<any>;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  leading?: string;
  trailing?: string;
}

export const Search = ({
  type = "withoutDropDown",
  listData = [],
  leadingIcon,
  trailingIcon,
  leading="search",
  trailing='cancel',
}: searchProps) => {
  const [search, setSearch] = useState("");
  const [drop, setDrop] = useState(false);
  const [data, setData] = useState(listData);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    if (e.target.value !== "") {
      setDrop(true);
      const val = listData.filter((doc) => doc.title.includes(e.target.value));
      setData(val);
    } else {
      setDrop(false);
      setData(listData);
    }
  };

  const handleClear = () => {
    setSearch("");
    setDrop(false);
  };

  return (
    <div className={`search ${type}`}>
      <div className="content">
        <Input
          label="Search"
          value={search}
          handleChange={handleChange}
          handleClear={handleClear}
          trailingIcon={trailingIcon}
          trailing={trailing}
          leadingIcon={leadingIcon}
          leading={leading}
          // characterValue={search.length}
          // characterCounter={true}
          // characterTotal={100}
        />
        {type === "withDropDown" && drop && (
          <>
            {data?.length > 0 && (
              <div className="dropdown">
                {data?.map((doc, ind) => (
                  <div key={ind} className="dropdownItem">
                    <p className="para-md">{doc.title}</p>
                    <p className="caption">{doc.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
