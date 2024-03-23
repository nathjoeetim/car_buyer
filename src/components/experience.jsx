import styled from "styled-components";
import { Card } from "./ui/card";
function ExperienceComponent() {
  return (
    <ExpereienceContainer>
      <Card className="flex flex-col items-center justify-center gap-2 p-6">
        <span className="text-slate-600 font-bold text-3xl">10+</span>
        <h4 className="text-slate-500">Years of Experience</h4>
      </Card>
      <Card className="flex flex-col items-center justify-center gap-2 p-6">
        <span className="text-slate-600 font-bold text-3xl">5K</span>
        <h4 className="text-slate-500">Happy Customers</h4>
      </Card>
      <Card className="flex flex-col items-center justify-center gap-2 p-6">
        <span className="text-slate-600 font-bold text-3xl">100+</span>
        <h4 className="text-slate-500">Junk Cars Purchased</h4>
      </Card>
      <Card className="flex flex-col items-center justify-center gap-2 p-6">
        <span className="text-slate-600 font-bold text-3xl">1</span>
        <h4 className="text-slate-500">Avaliable Location</h4>
      </Card>
    </ExpereienceContainer>
  );
}

export default ExperienceComponent;

const ExpereienceContainer = styled.div`
  /* display: flex; */
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  grid-template: auto;
  place-items: center;
  place-self: center;
  @media screen and (max-width: 318px) {
    grid-template-columns: repeat(auto-fill, minmax(100, 1fr));
  }
`;
