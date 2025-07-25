import { elementsMap } from "./elements";

export const generateGenericForm = (props: string[]): string => {
  const defaultElement = `
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Input aria-required="true" id={id} name={id} type="text" />
      </InputContainer>
    </Utility>
  `;
  return `
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
};

export const generateLoginForm = (props: string[]): string => {
  const defaultElements: string[] = [elementsMap.email, elementsMap.password];
  const filteredProps = props.filter((prop) => !defaultElements.includes(prop));
  console.log("FILTERED:", filteredProps);
  return `
      <form>
        ${defaultElements.join("\n")}
        ${filteredProps.join("\n")}
        <Utility vFlex vFlexRow vGap={8} vMarginTop={16}>
          <Button type="submit">Log in</Button>
        </Utility>
      </form>
    `;
};

export const generateSignupForm = (props: string[]): string => {
  const defaultElements: string[] = [elementsMap.email, elementsMap.password];
  const filteredProps = props.filter((prop) => !defaultElements.includes(prop));
  console.log("FILTERED:", filteredProps);
  return `
      <form>
        ${defaultElements.join("\n")}
        ${filteredProps.join("\n")}
        <Utility vFlex vFlexRow vGap={8} vMarginTop={16}>
          <Button type="submit">Sign up</Button>
        </Utility>
      </form>
    `;
};
