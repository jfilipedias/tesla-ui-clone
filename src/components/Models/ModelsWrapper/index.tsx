import React, { useCallback, useMemo, useRef, useState } from "react";

import ModelOverlay from "../ModelOverlay";
import ModelsContext, { CarModel } from "../ModelsContext";
import { Container, OverlaysRoot } from "./styles";

interface Props {
  children: React.ReactNode;
}

const ModelsWrapper: React.FC<Props> = ({ children }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel): void => {
    setRegisteredModels(state => [...state, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string): void => {
    setRegisteredModels(state =>
      state.filter(model => model.modelName !== modelName)
    );
  }, []);

  const getModelByName = useCallback(
    (modelName: string): CarModel | undefined => {
      return registeredModels.find(model => model.modelName === modelName);
    },
    []
  );

  const modelsContextValue = useMemo(
    () => ({
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName,
    }),
    []
  );

  return (
    <ModelsContext.Provider value={modelsContextValue}>
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map(model => (
            <ModelOverlay key={model.modelName} model={model}>
              {model.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
