import React, { Children } from "react";

import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const ModelsWrapper: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ModelsWrapper;
