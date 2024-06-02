import { Porthole } from 'components/listview/Porthole';
import React from 'react';
import { ListViewOl } from './style';

interface Porthole {
  id:number;
  road:string;
  importance:number;
  status:string;
  image_url:string;
}

interface ListViewProps {
  items: Porthole[];
}

export const PortholeListView: React.FC<ListViewProps> = ({ items }) => {

  let listItems = items.map((item) => <li><Porthole porthole={item} /></li>)

  return (
    <ListViewOl>
      {listItems}
    </ListViewOl>
  );
};