import {
  Link,
  Nav,
  NavAppName,
  Typography,
  Utility,
  UtilityFragment,
  VisaLogo,
} from "@visa/nova-react";
import SidePanel from "./SidePanel";

const id = "navbar";

const Navbar = ({ setCurrentPrompt }: { setCurrentPrompt: React.Dispatch<React.SetStateAction<Prompt | null>> }) => {
  return (
    <div>
      <UtilityFragment vJustifyContent="between">
        <Nav id={id} orientation="horizontal" tag="header" style={{
          position: "relative"
        }}>
          <SidePanel setCurrentPrompt={setCurrentPrompt} />
          <UtilityFragment vFlex vGap={16} style={{
            position: "absolute",
            left: "50%",
            translate: "-50% 0"
          }}>
            <Link
              aria-label="Visa Application Name Home"
              href=""
              id={`${id}-home-link`}
              noUnderline
              style={{ backgroundColor: "transparent" }}
            >
              <VisaLogo />
              <NavAppName>
                <Utility
                  vContainerHide="xs"
                  element={
                    <Typography variant="headline-4">
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
