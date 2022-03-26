import React from "react";

import DefaultOverlayComponent from "../DefaultOverlayComponent";
import { ModelsWrapper, ModelSection } from "../Models";
import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            modelName="Model One"
            overlayNode={
              <DefaultOverlayComponent
                label="Model One"
                description="Order online for delivery"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
