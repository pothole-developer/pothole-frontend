import { TitleContainer } from "./style";

export const AppTtile = () => {
    return (<TitleContainer>
         <h1>{process.env.REACT_APP_TITLE}</h1>
    </TitleContainer>
    );
}