// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    dark: boolean;
    colors: {
      primary: string;
      primaryNull: string;
      secondary: string;
      secondaryNull: string;
      bg: string;
      bg950: string;
      bg900: string;
      bg800: string;
      bg700: string;
      bgNull: string;
      antibg: string;
      antibgNull: string;
      text: string;
      antiText: string;
    };
  }
}
