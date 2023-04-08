import { createContext } from "react";
import { useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [chairColor, setChairColor] = useState("Fabric");
  const [couchColor, setCouchColor] = useState("Beige");
  const [loungeChairColor, setLoungeChairColor] = useState("Speckled");

  return (
    <CustomizationContext.Provider
      value={{
        chairColor,
        setChairColor,
        couchColor,
        setCouchColor,
        loungeChairColor,
        setLoungeChairColor,
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
