import React from 'react'

interface PotholeInfoProps {
    lat: number;
    lng: number;
}

export const PotholeInfo = ({lat, lng} : PotholeInfoProps) => {
    return (
        <>
            <div>
                <h3>서울특별시청</h3>'
                <p>{"서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청"}</p>
                <h4>{"latitude : " + lat}</h4>
                <h4>{"longtitue : " + lng}</h4>
            </div>
        </>
    );
}