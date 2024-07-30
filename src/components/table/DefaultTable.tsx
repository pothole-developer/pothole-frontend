import React from 'react';
import {TableContainer, Table, Th, Td} from './style';

interface DefaultTableProps {
  data: Array<{ [key: string]: any }>;
}

export const DefaultTable: React.FC<DefaultTableProps> = ({ data }) => {
  let keys: any[] = [];
  if (data.length != 0) {
    keys = Object.keys(data[0]);
  }
  
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {keys.map((key) => (
              <Th key={key}>{key}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {keys.map((key) => (
                <Td key={key}>{item[key]}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};