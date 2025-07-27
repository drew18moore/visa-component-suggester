import { elementsMap } from "./elements";

export type GeneratePrefabReturn = {
  code: string;
  components: string[];
};

export const generateGenericForm = (props: string[]): GeneratePrefabReturn => {
  const defaultElement = `
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Input aria-required="true" id={id} name={id} type="text" />
      </InputContainer>
    </Utility>
  `;
  const defaultComponents = [
    "Utility",
    "Label",
    "InputContainer",
    "Input",
    "Button",
  ];
  const code = `
      <form onSubmit={onSubmit}>
        ${props.length === 0 ? defaultElement : ""}
        ${props.join("\n")}
        <Utility vFlex vFlexRow vGap={8} vMarginTop={16}>
          <Button type="submit">Submit</Button>
          <Button colorScheme="secondary" type="reset">
            Reset
          </Button>
        </Utility>
      </form>
    `;
  return { code, components: defaultComponents };
};

export const generateLoginForm = (props: string[]): GeneratePrefabReturn => {
  const defaultElements: string[] = [elementsMap.email, elementsMap.password];
  const filteredProps = props.filter((prop) => !defaultElements.includes(prop));
  const defaultComponents = [
    "Utility",
    "Label",
    "InputContainer",
    "Input",
    "Button",
  ];
  const code = `
      <form>
        ${defaultElements.join("\n")}
        ${filteredProps.join("\n")}
        <Utility vFlex vFlexRow vGap={8} vMarginTop={16}>
          <Button type="submit">Log in</Button>
        </Utility>
      </form>
    `;
  return { code, components: defaultComponents };
};

export const generateSignupForm = (props: string[]): GeneratePrefabReturn => {
  const defaultElements: string[] = [elementsMap.email, elementsMap.password];
  const filteredProps = props.filter((prop) => !defaultElements.includes(prop));
  const defaultComponents = [
    "Utility",
    "Label",
    "InputContainer",
    "Input",
    "Button",
  ];
  const code = `
      <form>
        ${defaultElements.join("\n")}
        ${filteredProps.join("\n")}
        <Utility vFlex vFlexRow vGap={8} vMarginTop={16}>
          <Button type="submit">Sign up</Button>
        </Utility>
      </form>
    `;
  return { code, components: defaultComponents };
};
