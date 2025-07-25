export const elementsMap: Record<string, string> = {
  email: `
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor="email">Email</Label>
      <InputContainer>
        <Input aria-required="true" id="email" name="email" type="email" />
      </InputContainer>
    </Utility>
    `,
  username: `
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor="username">Username</Label>
      <InputContainer>
        <Input aria-required="true" id="username" name="username" type="text" />
      </InputContainer>
    </Utility>
    `,
  password: `
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor="password">Password</Label>
      <InputContainer>
        <Input aria-required="true" id="password" name="password" type="password" />
      </InputContainer>
    </Utility>
    `,
  rememberme: `
    <Utility vAlignItems="center" vFlex vGap={2}>
      <Checkbox id={id} />
      <Label htmlFor={id}>Remember me</Label>
    </Utility>
    `,
};
