import { Outlet } from "react-router-dom";
import { ContentDashboardContainer } from "./ContentDashbardContainer";
import { DashboardContainer } from "./DashboardContainer";
interface Props {}

const LayoutDashboard = ({ ...rest }: Props) => {
  return (
    <DashboardContainer>
      <ContentDashboardContainer>
        <Outlet />
      </ContentDashboardContainer>
    </DashboardContainer>
  );
};

export default LayoutDashboard;
