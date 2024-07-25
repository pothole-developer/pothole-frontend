import { ButtonContainer, Button, ReportPageContainer, ReportPageContentContainer, InputContainer, Label, Select, DateInput } from './style';
import { Header } from './Header';
import * as XLSX from 'xlsx';
import { DefaultTable } from 'components/table/DefaultTable';
import { useState } from 'react';

export const ReportPage = () => {
  const [showTable, setShowTable] = useState(false); // 테이블 표시 여부 상태
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [period, setPeriod] = useState('자동');
  const [xAxis, setXAxis] = useState('기간');
  const [yAxis, setYAxis] = useState('위험도');

  const data = [
    {
        "period": 202301,
        "dangerous0to20": 108,
        "dangerous20to40": 108,
        "dangerous40to60": 108,
        "dangerous60to80": 108,
        "dangerous80to100": 108
    },
    {
        "period": 202302,
        "dangerous0to20": 80,
        "dangerous20to40": 80,
        "dangerous40to60": 80,
        "dangerous60to80": 80,
        "dangerous80to100": 80
    },
    {
        "period": 202303,
        "dangerous0to20": 83,
        "dangerous20to40": 83,
        "dangerous40to60": 83,
        "dangerous60to80": 83,
        "dangerous80to100": 83
    }
  ];

  const validateDates = (start: string, end: string) => {
    if (!start || !end) {
      alert('시작 날짜와 종료 날짜를 모두 입력해 주세요.');
      return false;
    }
    if (new Date(start) > new Date(end)) {
      alert('종료 날짜는 시작 날짜보다 이후여야 합니다.');
      return false;
    }
    return true;
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Statistics');

    // 현재 날짜와 시간을 포맷팅하여 파일 이름 생성
    const now = new Date();
    const formattedDate = now.toISOString().replace(/T/, '_').replace(/\..+/, '');
    const fileName = `Pothole_Statistics_${formattedDate}.xlsx`;

    XLSX.writeFile(workbook, fileName);
  };

  const loadDataToTable = () => {
    if (validateDates(startDate, endDate)) {
      console.log('조회 조건:');
      console.log('시작 날짜:', startDate);
      console.log('종료 날짜:', endDate);
      console.log('기간:', period);
      console.log('X축:', xAxis);
      console.log('Y축:', yAxis);
      setShowTable(true);
    }
  }

  return (
    <ReportPageContainer>
      <Header />
      <ReportPageContentContainer>
        <InputContainer>
        <Label>시작 날짜:</Label>
        <DateInput type='date' value={startDate} onChange={(e) => {
            if (!endDate) {
              setStartDate(e.target.value);
            }
            else if (validateDates(e.target.value, endDate)) {
              setStartDate(e.target.value);
            }
          }} />
        <Label>종료 날짜:</Label>
        <DateInput type='date' value={endDate} onChange={(e) => {
            if (!startDate) {
              setEndDate(e.target.value);
            }
            else if (validateDates(startDate, e.target.value)) {
              setEndDate(e.target.value);
            }
          }} />
        <Label>기간:</Label>
        <Select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="자동">자동</option>
          <option value="1달">1달</option>
          <option value="1주">1주</option>
          <option value="1일">1일</option>
        </Select>
        <Label>X축:</Label>
        <Select value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
          <option value="기간">기간</option>
          <option value="위험도">위험도</option>
        </Select>
        <Label>Y축:</Label>
        <Select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
          <option value="위험도">위험도</option>
          <option value="공사진행현황">공사진행현황</option>
        </Select>
        </InputContainer>
        <ButtonContainer>
          <Button onClick={exportToExcel} disabled={!showTable}>Export</Button>
          <Button onClick={loadDataToTable}>조회</Button>
        </ButtonContainer>
        {showTable && <DefaultTable data={data} />}
      </ReportPageContentContainer>
    </ReportPageContainer>
  );
};
