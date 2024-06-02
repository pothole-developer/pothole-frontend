import styled from 'styled-components';

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ResultTitle = styled.text`
  font-size: larger;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;

// Porthole
export const PortholeContainer = styled.div`
  display:flex;
  background-color: lightgray;
  border: 2px solid groove;
  margin: 5px 10px 5px 10px;
`;

export const PortholeComponent = styled.div`
  display:flex;
  margin-bottom: 5px;
  width: -webkit-fill-available;
`;

export const PortholeContentComponent = styled.div`
  display:flex;
  flex-direction: column;
  margin: 5px 0px 5px 10px;
  width: -webkit-fill-available;
`;

export const ImageContainer = styled.div`
  padding: 5px 5px 0px 5px;
`;
export const PortholeImage = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid groove;
`;

export const ImportanceText = styled.div`
  display: flex;
`;

export const DetailButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  justify-content: end;
`;

export const DetailButton = styled.button`
  margin: 0px 10px 0px 0px;
  height: min-content;
  width: -webkit-fill-available;
  border-radius: 15px;
  background-color: #3A3E4D;
  color: white;
`

