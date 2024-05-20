import { FilterResult } from "./style";

interface FilterProps {
  type:string;
  start:number;
  end:number;
}

export const FilterRangeResult = (props:FilterProps) => {
  let content = props.type + ": " + getResult(props.start, props.end);
  
  return (
  <FilterResult>
    <text>{content}</text>
  </FilterResult>
  );
}
  
let getResult = (start:number, end:number) => {
  return start.toString() + "%" + " ~ " + end.toString() + "%";
}