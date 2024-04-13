interface Pothole {
    latitude: number;
    longitude: number;
}

export const getPotholeInfoContent = (pothole:Pothole) => {
    const content = [
        '<div>',
        '    <h3>서울특별시청</h3>',
        '    <p>{"서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청"}</p>',
        '<h4> latitude :  ', pothole.latitude,'</h4>',
        '<h4> longtitue : ', pothole.longitude,'}</h4>',
        '</div>'
    ].join('');

    return content;
};