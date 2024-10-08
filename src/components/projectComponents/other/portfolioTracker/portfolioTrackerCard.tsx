import stockBackground from "../../../../assets/projects/other/PortfolioTracker/piechart.jpg";
import { TitleCard } from "../../../customComponents/titleCard";

export function PortfolioTrackerCard({
  toFullscreen = false,
}: {
  toFullscreen?: boolean;
}) {
  return (
    <TitleCard
      backgroundImage={stockBackground}
      textPosition={["bottom", "left"]}
      to="/other/PortfolioTracker"
      toFullscreen={toFullscreen}
    >
      <h1 className="primary">Portolio Tracker</h1>
      <h2 className="primary">
        A personal stock portfolio built with Google Sheets
      </h2>
    </TitleCard>
  );
}
