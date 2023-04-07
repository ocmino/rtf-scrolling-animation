import { createContext } from "react";
import { useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [chairColor, setChairColor] = useState("Beige");
  const [couchColor, setCouchColor] = useState("Beige");

  return (
    <CustomizationContext.Provider
      value={{
        chairColor,
        setChairColor,
        couchColor,
        setCouchColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
