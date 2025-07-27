import { elementsMap } from "./elements";

export type GeneratePrefabReturn = {
  code: string;
  components: string[];
};

// FORMS
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
    "<Utility />",
    "<Label />",
    "<InputContainer />",
    "<Input />",
    "<Button />",
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
    "<Utility />",
    "<Label />",
    "<InputContainer />",
    "<Input />",
    "<Button />",
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
    "<Utility />",
    "<Label />",
    "<InputContainer />",
    "<Input />",
    "<Button />",
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

export const generateContactForm = (props: string[]): GeneratePrefabReturn => {
  const defaultElements: string[] = [
    elementsMap.name,
    elementsMap.email,
    elementsMap.password,
  ];
  const filteredProps = props.filter((prop) => !defaultElements.includes(prop));
  const defaultComponents = [
    "<Utility />",
    "<Label />",
    "<InputContainer />",
    "<Input />",
    "<Button />",
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

// NAVIGATION
export const generateTopNav = (props: string[]): GeneratePrefabReturn => {
  const defaultComponents = [
    "<Avatar/>",
    "<Badge/>",
    "<Button/>",
    "<Divider/>",
    "<DropdownButton/>",
    "<DropdownMenu/>",
    "<Input/>",
    "<InputContainer/>",
    "<Link/>",
    "<Listbox/>",
    "<ListboxItem/>",
    "<Nav/>",
    "<NavAppName/>",
    "<Surface/>",
    "<Tab/>",
    "<TabSuffix/>",
    "<Tabs/>",
    "<Typography/>",
    "<Utility/>",
    "<UtilityFragment/>",
    "<VisaLogo/>",
  ];
  const code = `
      <div>
      <Link skipLink href="#content">
        Skip to content
      </Link>
      <UtilityFragment vJustifyContent="between">
        <Nav id={id} orientation="horizontal" tag="header">
          {!expandSearch ? (
            <>
              <UtilityFragment vContainerHide="desktop">
                <DropdownButton
                  aria-controls={id}
                  aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                  aria-label="open menu"
                  aria-describedby={id}
                  buttonSize="large"
                  colorScheme="tertiary"
                  iconButton
                  id={id}
                  onClick={onToggleMobileMenu}
                >
                  {mobileMenuOpen ? (
                    <VisaCloseTiny />
                  ) : (
                    <>
                      <VisaMenuLow />
                      <Badge
                        id={id}
                        aria-label="3 notifications"
                        badgeVariant="number"
                        tag="sup"
                      >
                        3
                      </Badge>
                    </>
                  )}
                </DropdownButton>
              </UtilityFragment>
              <UtilityFragment vFlex vGap={16}>
                <Link
                  aria-label="Visa Application Name Home"
                  href="./horizontal-navigation"
                  id={id}
                  noUnderline
                  style={{ backgroundColor: 'transparent' }}
                >
                  <VisaLogo />
                  <NavAppName>
                    <Utility
                      vContainerHide="xs"
                      element={<Typography variant="headline-3">Application Name</Typography>}
                    />
                  </NavAppName>
                </Link>
              </UtilityFragment>
              <UtilityFragment vFlex vJustifyContent="end" vFlexGrow vMarginLeft="auto" vContainerHide="mobile">
                <nav aria-label="Label for horizontal default example">
                  <UtilityFragment vGap={4}>
                    <Tabs>
                      <Tab>
                        <Button
                          buttonSize="large"
                          colorScheme="tertiary"
                          element={<a href="./horizontal-navigation">L1 label 1</a>}
                        />
                      </Tab>
                      <Tab>
                        <Button
                          buttonSize="large"
                          colorScheme="tertiary"
                          element={<a href="./horizontal-navigation">L1 label 2</a>}
                        />
                      </Tab>
                      <Tab>
                        <DropdownButton
                          aria-expanded={label3Open}
                          aria-controls={label3Open ? id : undefined}
                          id={id}
                          buttonSize="large"
                          colorScheme="tertiary"
                          ref={label3FloatingRefs.setReference}
                          {...getLabel3ReferenceProps()}
                        >
                          L1 label 3<TabSuffix element={label3Open ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
                        </DropdownButton>

                        {label3Open && (
                          <FloatingFocusManager
                            context={label3FloatingContext}
                            modal={false}
                            initialFocus={-1}
                            restoreFocus={true}
                          >
                            <DropdownMenu
                              id={id}
                              aria-hidden={!label3Open}
                              style={
                                {
                                  inlineSize: '180px',
                                  position: 'absolute',
                                  ...label3FloatingStyles,
                                  zIndex: 1,
                                } as CSSProperties
                              }
                              ref={label3FloatingRefs.setFloating}
                              {...getLabel3FloatingProps()}
                            >
                              <Listbox>
                                {label3SubItems.map(label3SubItem => (
                                  <li key={label3SubItem.id}>
                                    <UtilityFragment vPaddingVertical={4} vPaddingHorizontal={8}>
                                      <ListboxItem href={label3SubItem.href} tag="a">
                                        {label3SubItem.tabLabel}
                                      </ListboxItem>
                                    </UtilityFragment>
                                  </li>
                                ))}
                              </Listbox>
                            </DropdownMenu>
                          </FloatingFocusManager>
                        )}
                      </Tab>
                    </Tabs>
                  </UtilityFragment>
                </nav>
              </UtilityFragment>
              <Utility vFlex vGap={8} vMarginLeft={8}>
                <Button
                  aria-label="search site"
                  buttonSize="large"
                  ref={searchButtonRef}
                  colorScheme="tertiary"
                  iconButton
                  onClick={() => { setExpandSearch(true); searchInitiallyActivated.current = true; }}

                >
                  <VisaSearchLow />
                </Button>
                <UtilityFragment vContainerHide="mobile">
                  <Button
                    aria-label="notifications"
                    aria-describedby={id}
                    buttonSize="large"
                    colorScheme="tertiary"
                    iconButton
                  >
                    <VisaNotificationsLow />

                    <Badge id={id} badgeVariant="number" tag="sup">
                      3
                    </Badge>
                  </Button>
                </UtilityFragment>
                <UtilityFragment vContainerHide="mobile">
                  <Tab tag="div">
                    <DropdownButton
                      aria-expanded={accountMenuOpen}
                      aria-controls={accountMenuOpen ? id : undefined}
                      aria-label="Alex Miller"
                      buttonSize="large"
                      colorScheme="tertiary"
                      element={<Avatar tag="button" />}
                      ref={accountFloatingRefs.setReference}
                      {...getAccountReferenceProps()}
                    >
                      <VisaAccountLow />
                      <TabSuffix element={accountMenuOpen ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
                    </DropdownButton>
                    {accountMenuOpen && (
                      <FloatingFocusManager
                        context={accountFloatingContext}
                        modal={false}
                        initialFocus={-1}
                        restoreFocus={true}
                      >
                        <DropdownMenu
                          id={id}
                          aria-hidden={!accountMenuOpen}
                          style={
                            {
                              inlineSize: '180px',
                              position: 'absolute',
                              ...accountFloatingStyles,
                              zIndex: 1,
                            } as CSSProperties
                          }
                          ref={accountFloatingRefs.setFloating}
                          {...getAccountFloatingProps()}
                        >
                          <Listbox>
                            {accountSubItems.map(accountSubItem => (
                              <UtilityFragment key={accountSubItem.id}>
                                <li>
                                  <UtilityFragment vPaddingVertical={4} vPaddingHorizontal={8}>
                                    <ListboxItem href={accountSubItem.href} tag="a">
                                      {accountSubItem.tabLabel}
                                    </ListboxItem>
                                  </UtilityFragment>
                                </li>
                              </UtilityFragment>
                            ))}
                          </Listbox>
                        </DropdownMenu>
                      </FloatingFocusManager>
                    )}
                  </Tab>
                </UtilityFragment>
              </Utility>
            </>
          ) : (
            <UtilityFragment vFlex>
              <Surface
                style={
                  {
                    '--v-surface-background': 'var(--palette-default-surface-3)',
                    '--v-surface-border-radius': 'var(--size-rounded-medium)',
                    '--v-surface-padding-inline': 'var(--size-scalable-8)',
                  } as CSSProperties
                }
              >
                <InputContainer>
                  <VisaSearchLow />
                  <Input
                    id={id}
                    name={id}
                    ref={searchInputRef}
                    required
                    type="search"
                    aria-label="Search"
                    placeholder="Search"
                  />
                </InputContainer>
                <Button
                  aria-label="close search"
                  buttonSize="large"
                  colorScheme="tertiary"
                  iconButton
                  onClick={() => setExpandSearch(false)}
                >
                  <VisaCloseLow />
                </Button>
              </Surface>
            </UtilityFragment>
          )}
        </Nav>
      </UtilityFragment>
      <UtilityFragment vContainerHide="desktop" vHide={!mobileMenuOpen}>
        <Nav
          aria-label="Label for horizontal default example"
          aria-hidden={!mobileMenuOpen}
          id={id}
          orientation="vertical"
        >
          <Tabs orientation="vertical">
            <Tab>
              <Button
                buttonSize="large"
                colorScheme="tertiary"
                element={<a href="./horizontal-navigation">L1 label 1</a>}
              />
            </Tab>
            <Tab>
              <Button
                buttonSize="large"
                colorScheme="tertiary"
                element={<a href="./horizontal-navigation">L1 label 2</a>}
              />
            </Tab>
            <Tab>
              <Button
                aria-expanded={mobileLabel3MenuOpen}
                aria-controls={mobileLabel3MenuOpen ? id : 'undefined'}
                id={id}
                buttonSize="large"
                colorScheme="tertiary"
                onClick={() => setMobileLabel3MenuOpen(!mobileLabel3MenuOpen)}
              >
                L1 Label 3
                <TabSuffix element={mobileLabel3MenuOpen ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
              </Button>

              {mobileLabel3MenuOpen && (
                <Tabs orientation="vertical" id={id}>
                  {label3SubItems.map(label3SubItem => (
                    <Tab key={label3SubItem.id} id={label3SubItem.id}>
                      <Button
                        colorScheme="tertiary"
                        element={<a href={label3SubItem.href}>{label3SubItem.tabLabel}</a>}
                      />
                    </Tab>
                  ))}
                </Tabs>
              )}
            </Tab>
            <Tab>
              <Button
                buttonSize="large"
                colorScheme="tertiary"
                style={{ wordBreak: 'break-word', blockSize: 'max-content' } as CSSProperties}
              >
                Notifications
                <Badge badgeVariant="number" style={{ position: 'relative' }} tag="sup">
                  3
                </Badge>
              </Button>
            </Tab>
            <Divider dividerType="decorative"></Divider>
            <Tab tag="div">
              <Button
                aria-expanded={mobileAccountMenuOpen}
                aria-controls={id}
                aria-label="Alex Miller"
                buttonSize="large"
                colorScheme="tertiary"
                onClick={() => setMobileAccountMenuOpen(!mobileAccountMenuOpen)}
              >
                <VisaAccountLow />
                Alex Miller
                <TabSuffix element={mobileAccountMenuOpen ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
              </Button>
              {mobileAccountMenuOpen && (
                <Tabs orientation="vertical" id={id}>
                  {accountSubItems.map(accountSubItem => (
                    <Tab key={accountSubItem.id} id={accountSubItem.id}>
                      <Button
                        colorScheme="tertiary"
                        element={<a href={accountSubItem.href}>{accountSubItem.tabLabel}</a>}
                      />
                    </Tab>
                  ))}
                </Tabs>
              )}
            </Tab>
          </Tabs>
        </Nav>
      </UtilityFragment>
    </div>
    `;
  return { code, components: defaultComponents };
};

// DIALOGS
export const generateGenericDialog = (
  props: string[]
): GeneratePrefabReturn => {
  const defaultComponents = [
    "<Button />",
    "<Dialog />",
    "<DialogCloseButton />",
    "<DialogContent />",
    "<DialogHeader />",
    "<Typography />",
    "<useFocusTrap />",
    "<Utility />",
  ];
  const code = `
    <>
      <Button onClick={() => ref.current?.showModal()}>Open default dialog</Button>
      <Dialog
        aria-describedby={description}
        aria-labelledby={title}
        id={id}
        ref={ref}
        onKeyDown={e => onKeyNavigation(e, ref.current?.open)}
      >
        <DialogContent>
          <DialogHeader id={title}>Default title</DialogHeader>
          <Typography id={description}>
            This is required text that describes the dialog title in more detail.
          </Typography>
          ${props.join("\n")}
          <Utility vAlignItems="center" vFlex vFlexWrap vGap={8} vPaddingTop={16}>
            <Button>Primary action</Button>
            <Button colorScheme="secondary">Secondary action</Button>
          </Utility>
        </DialogContent>
        <DialogCloseButton onClick={() => ref.current?.close()} />
      </Dialog>
    </>
  `;
  return { code, components: defaultComponents };
};

export const generateErrorDialog = (props: string[]): GeneratePrefabReturn => {
  const defaultComponents = [
    "<Button />",
    "<Dialog />",
    "<DialogCloseButton />",
    "<DialogContent />",
    "<DialogHeader />",
    "<Typography />",
    "<useFocusTrap />",
    "<Utility />",
  ];
  const code = `
    <>
      <Button onClick={() => ref.current?.showModal()}>Open error dialog</Button>
      <Dialog
        aria-describedby={description}
        aria-labelledby={title}
        id={id}
        messageType="error"
        onKeyDown={e => onKeyNavigation(e, ref.current?.open)}
        ref={ref}
      >
        <DialogContent>
          <DialogHeader id={title}>
            <DialogIcon />
            Error title
          </DialogHeader>
          <Typography id={description}>
            This is required text that describes the dialog title in more detail.
          </Typography>
          ${props.join("\n")}
          <Utility vAlignItems="center" vFlex vFlexWrap vGap={8} vPaddingTop={16}>
            <Button>Primary action</Button>
          </Utility>
        </DialogContent>
        <DialogCloseButton onClick={() => ref.current?.close()} />
      </Dialog>
    </>
  `;
  return { code, components: defaultComponents };
};

export const generateWarningDialog = (
  props: string[]
): GeneratePrefabReturn => {
  const defaultComponents = [
    "<Button />",
    "<Dialog />",
    "<DialogCloseButton />",
    "<DialogContent />",
    "<DialogHeader />",
    "<Typography />",
    "<useFocusTrap />",
    "<Utility />",
  ];
  const code = `
    <>
      <Button onClick={() => ref.current?.showModal()}>Open warning dialog</Button>
      <Dialog
        aria-describedby={description}
        aria-labelledby={title}
        ref={ref}
        id={id}
        messageType="warning"
        onKeyDown={e => onKeyNavigation(e, ref.current?.open)}
      >
        <DialogContent>
          <DialogHeader id={title}>
            <DialogIcon />
            Warning title
          </DialogHeader>
          <Typography id={description}>
            This is required text that describes the dialog title in more detail.
          </Typography>
          ${props.join("\n")}
          <Utility vAlignItems="center" vFlex vFlexWrap vGap={8} vPaddingTop={16}>
            <Button>Primary action</Button>
          </Utility>
        </DialogContent>
        <DialogCloseButton onClick={() => ref.current?.close()} />
      </Dialog>
    </>
  `;
  return { code, components: defaultComponents };
};
