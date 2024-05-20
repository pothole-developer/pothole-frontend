import { FilterResult } from "./style";

interface FilterProps {
  type:string;
  results:string[];
}

export const FilterSimpleResult = (filterProps:FilterProps) => {
  let content = filterProps.type + ": " + getResult(filterProps.results);

  return (
  <FilterResult>
    <text>{content}</text>
  </FilterResult>
  );
}

let getResult = (results:string[]) => {
  let result = "";
  results.forEach(s => result += s+", ");
  return result.slice(0, -2);
}