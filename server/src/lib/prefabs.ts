import { elementsMap } from "./elements";

export const generateGenericForm = (props: string[]): string => {
  return `
      <form onSubmit={onSubmit}>
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={id}>Label (required)</Label>
          <InputContainer>
            <Input aria-required="true" id={id} name={id} type="text" />
          </InputContainer>
        </Utility>
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
  return `
      <form>
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={"email"}>Email</Label>
          <InputContainer>
            <Input aria-required="true" id={"email"} name={"email"} type="email" required={true} />
          </InputContainer>
        </Utility>
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={"password"}>Password</Label>
          <InputContainer>
            <Input aria-required="true" id={"password"} name={"password"} type="password" required={true} />
          </InputContainer>
        </Utility>
        ${props.join("\n")}
        <Utility vFlex vFlexRow vGap={8} vMarginTop={16}>
          <Button type="submit">Log in</Button>
        </Utility>
      </form>
    `;
};

export const generateSignupForm = (props: string[]): string => {
  return `
      <form>
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={"email"}>Email</Label>
          <InputContainer>
            <Input aria-required="true" id={"email"} name={"email"} type="email" required={true} />
          </InputContainer>
        </Utility>
        <Utility vFlex vFlexCol vGap={4}>
          <Label htmlFor={"password"}>Password</Label>
          <InputContainer>
            <Input aria-required="true" id={"password"} name={"password"} type="password" required={true} />
          </InputContainer>
        </Utility>
        ${props.join("\n")}
        <Utility vFlex vFlexRow vGap={8} vMarginTop={16}>
          <Button type="submit">sign up</Button>
        </Utility>
      </form>
    `;
};
