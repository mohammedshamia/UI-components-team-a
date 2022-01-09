// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string,
        secondary: string,
    },
    textColor:{
        primary: string,

    },
    common: {
        black: string,
        white: string
    },
}
}