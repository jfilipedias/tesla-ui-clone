import { useCallback, useContext, useEffect } from "react";

import ModelsContext, { CarModel } from "./ModelsContext";

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } =
    useContext(ModelsContext);

  useEffect(
    () => () => unregisterModel(modelName),
    [modelName, unregisterModel]
  );

  const getModel = useCallback(
    (): CarModel | undefined => getModelByName(modelName),
    [getModelByName, modelName]
  );

  return { registerModel, getModel };
}
