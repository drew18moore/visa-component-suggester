const elementsMap = {
  emailInput: {
    jsx: `
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor="email">Email</Label>
      <InputContainer>
        <Input aria-required="true" id="email" name="email" type="email" />
      </InputContainer>
    </Utility>
    `,
  },
  usernameInput: {
    jsx: `
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor="username">Username</Label>
      <InputContainer>
        <Input aria-required="true" id="username" name="username" type="text" />
      </InputContainer>
    </Utility>
    `,
  },
  passwordInput: {
    jsx: `
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor="password">Password</Label>
      <InputContainer>
        <Input aria-required="true" id="password" name="password" type="password" />
      </InputContainer>
    </Utility>
    `
  },
  genericInput: {
    jsx: `
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Input aria-required="true" id={id} name={id} type="text" />
      </InputContainer>
    </Utility>
    `
  },
  rememberMe: {
    jsx: `
    <Utility vAlignItems="center" vFlex vGap={2}>
      <Checkbox id={id} />
      <Label htmlFor={id}>Remember me</Label>
    </Utility>
    `
  },
  
};
