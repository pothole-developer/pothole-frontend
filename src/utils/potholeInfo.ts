interface Pothole {
  lat: number;
  lon: number;
  roadName: string;
}

export const getPotholeInfoContent = (pothole: Pothole) => {
  const content = [
    `<div>
        <h3>${pothole.roadName}</h3>
        <h4> latitude : ${pothole.lat} </h4>
        <h4> longitude : ${pothole.lon} </h4>
    <div>`,
  ].join();

  return content;
};
