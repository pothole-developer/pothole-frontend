import { ButtonContainer, Button, ReportPageContainer, ReportPageContentContainer, InputContainer, Label, Select, DateInput } from './style';
import { Header } from './Header';
import * as XLSX from 'xlsx';
import { DefaultTable } from 'components/table/DefaultTable';
import { useState } from 'react';
import { fetchReport, ReportRequest } from 'services/report';

type Period = 'auto' | 'monthly' | 'weekly' | 'daily';

export const ReportPage = () => {
  const [showTable, setShowTable] = useState(false); // 테이블 표시 여부 상태
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportPeriod, setReportPeriod] = useState<Period>('auto');
  const [xAxis, setXAxis] = useState('기간');
  const [yAxis, setYAxis] = useState('위험도');
  const [data, setData] = useState<any[]>([]);

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
      console.log('기간:', reportPeriod);
      console.log('X축:', xAxis);
      console.log('Y축:', yAxis);
      setShowTable(true);

      const request:ReportRequest = {
        startDate: startDate,
        endDate: endDate,
        reportPeriod: reportPeriod
      };
      fetchReport(request).then(result => {
        console.log(result);
        if (result != null) {
          setData(result);
        }
        setShowTable(true);
      })
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
        <Select value={reportPeriod} onChange={(e) => setReportPeriod(e.target.value as Period)}>
          <option value="auto">자동</option>
          <option value="monthly">1달</option>
          <option value="weekly">1주</option>
          <option value="daily">1일</option>
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
