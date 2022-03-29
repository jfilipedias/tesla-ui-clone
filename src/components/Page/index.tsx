import React from "react";

import DefaultOverlayComponent from "../DefaultOverlayComponent";
import { ModelsWrapper, ModelSection } from "../Models";
import UniqueOverlay from "../UniqueOverlay";
import { Container } from "./styles";

interface Model {
  name: string;
  description: string;
}

const models: Model[] = [
  {
    name: "Model One",
    description: "Order online for delivery",
  },
  {
    name: "Model Two",
    description: "Order online for delivery",
  },
  {
    name: "Model Three",
    description: "Order online for delivery",
  },
  {
    name: "Model Four",
    description: "Order online for delivery",
  },
  {
    name: "Model Five",
    description: "Order online for delivery",
  },
  {
    name: "Model Six",
    description: "Order online for delivery",
  },
  {
    name: "Model Seven",
    description: "Order online for delivery",
  },
];

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map(model => (
            <ModelSection
              key={model.name}
              className="colored"
              modelName={model.name}
              overlayNode={
                <DefaultOverlayComponent
                  label={model.name}
                  description={model.description}
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
