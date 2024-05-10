import { AppTitleContainer } from "./style";

export const AppTtile = () => {
    return (<AppTitleContainer>
         <h1>{process.env.REACT_APP_TITLE}</h1>
    </AppTitleContainer>
    );
}