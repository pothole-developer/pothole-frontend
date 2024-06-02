import { ResultContainer, ResultTitle } from "./style";

interface Porthole {
  id:number;
  road:string;
  importance:number;
  status:string;
  image_url:string;
}


export const PortholeResult = ({portholes}: {portholes:Porthole[];}) => {
  

  console.log(portholes);

  return (
    <ResultContainer>
      <ResultTitle >포트홀 갯수 : {123}개</ResultTitle>
    </ResultContainer>
  );
}