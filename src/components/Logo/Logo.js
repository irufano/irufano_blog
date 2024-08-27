import React from "react";
import IrufanoDevLogo from "./IrufanoDevLogo";

const Logo = (type = "irufano_dev") => {
  switch (type) {
    case "irufano_dev":
      return <IrufanoDevLogo />;

    default:
      return <IrufanoDevLogo />;
  }
};

export default Logo;
