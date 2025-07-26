import {
  Link,
  Nav,
  NavAppName,
  Typography,
  Utility,
  UtilityFragment,
  VisaLogo,
} from "@visa/nova-react";

const id = "navbar";

const Navbar = () => {
  return (
    <div>
      <Link skipLink href="#content">
        Skip to content
      </Link>
      <UtilityFragment vJustifyContent="between">
        <Nav id={id} orientation="horizontal" tag="header">
          <UtilityFragment vFlex vGap={16}>
            <Link
              aria-label="Visa Application Name Home"
              href="./horizontal-navigation"
              id={`${id}-home-link`}
              noUnderline
              style={{ backgroundColor: "transparent" }}
            >
              <VisaLogo />
              <NavAppName>
                <Utility
                  vContainerHide="xs"
                  element={
                    <Typography variant="headline-3">
                      Component Suggestion Tool
                    </Typography>
                  }
                />
              </NavAppName>
            </Link>
          </UtilityFragment>
        </Nav>
      </UtilityFragment>
    </div>
  );
};

export default Navbar;
