import { elementsMap } from "../lib/elements";
import { prefabMap } from "../lib/prefabMap";
import { GeneratePrefabReturn } from "../lib/prefabs";


const generateCode = (parsed: {
  componentType: string;
  properties: string[];
}): GeneratePrefabReturn => {
  /*
  - Select prefab function from componentType
  - Select code for each property
  - Call prefab function, passing in properties
  */

  const prefabFunction = prefabMap[parsed.componentType];
  const elements: string[] = []
  for (let prop of parsed.properties) {
    console.log(prop);
    elements.push(elementsMap[prop]);
  }
  console.log(elements);
  return prefabFunction(elements);
};

export default generateCode;
