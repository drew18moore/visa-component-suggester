import { elementsMap } from "../lib/elements";
import { prefabMap } from "../lib/prefabMap";


const generateCode = (parsed: {
  componentType: string;
  properties: string[];
}): string => {
  /*
  - Select prefab function from componentType
  - Select code for each property
  - Call prefab function, passing in properties
  TODO: Handle case where property already in prefab template
    - Create array of defaults 
    - Don't render prop if already in defaults
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
