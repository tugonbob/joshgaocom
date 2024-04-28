import { ScrollDiv } from "../components/commonComponents";
import {
  RealEstateLinearRegressionCard,
  BackpropagationVisualizationCard,
  CifarKnnImageClassificationCard,
} from "../components/projectComponents";

export function AimlPage() {
  return (
    <ScrollDiv className="fade-in-1">
      <BackpropagationVisualizationCard />
      <RealEstateLinearRegressionCard />
      <CifarKnnImageClassificationCard />
    </ScrollDiv>
  );
}
