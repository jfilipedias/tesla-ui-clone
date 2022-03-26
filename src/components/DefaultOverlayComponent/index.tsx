import React from "react";

import { Container, Heading, Buttons } from "./styles";

interface Props {
  label: string;
  description: string;
}

const DefaultOverlayComponent: React.FC<Props> = ({
  label,
  description,
}: Props) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button type="button">Custom Order</button>
        <button type="button" className="white">
          Existing Inventory
        </button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayComponent;