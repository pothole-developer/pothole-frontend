import { Button } from "components/button/Button";
import { colors } from 'styles/theme';
import { useNavigate } from "react-router-dom";
import { ReportButtonContainer } from "./style";

export const ReportButton = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate('/report');
  };

  return (
    <ReportButtonContainer>
      <Button type="button"
              onClick={handleReportClick}
              background={colors.mainBlue} 
              color={colors.mainWhite} 
              width="100px"
              >Report</Button>
    </ReportButtonContainer>
  );
}