import {
  Button,
  Nav,
  Panel,
  Tab,
  Tabs,
  Typography,
  UtilityFragment,
} from "@visa/nova-react";
import { useRef, type CSSProperties } from "react";
import { VisaCloseTiny, VisaMenuLow } from "@visa/nova-icons-react";

const id = "side-panel";
const navElAriaLabel = "Side panel";
const tabsContent = [
  {
    prompt: "L1 label 1",
    code: "",
  },
  {
    prompt: "L1 label 2",
    code: "",
  },
  {
    prompt: "L1 label 3",
    code: "",
  },
  {
    prompt: "L1 label 4",
    code: "",
  },
  {
    prompt: "L1 label 5",
    code: "",
  },
];

const SidePanel = () => {
  const panelRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <UtilityFragment vMargin={10}>
        <Button
          onClick={() => panelRef.current?.showModal()}
          buttonSize="large"
          colorScheme="tertiary"
          iconButton
        >
          <VisaMenuLow />
        </Button>
      </UtilityFragment>

      <UtilityFragment vMarginHorizontal={0}>
        <Panel
          aria-modal="true"
          ref={panelRef}
          id={id}
          tag="dialog"
          style={
            {
              "--v-panel-inline-size": "initial",
            } as CSSProperties
          }
        >
          <Nav
            drawer
            orientation="vertical"
            tag="div"
            style={
              {
                inlineSize: "242px",
              } as CSSProperties
            }
          >
            <UtilityFragment vMarginRight={4} vMarginLeft="auto">
              <Button
                aria-label="Close"
                buttonSize="small"
                colorScheme="tertiary"
                iconButton
                onClick={() => panelRef.current?.close()}
                subtle
              >
                <VisaCloseTiny />
              </Button>
            </UtilityFragment>
            <UtilityFragment
              vMarginTop={4}
              vMarginRight={16}
              vMarginBottom={4}
              vMarginLeft={24}
            >
              <Typography>Recent prompts</Typography>
            </UtilityFragment>
            <nav aria-label={navElAriaLabel}>
              <Tabs orientation="vertical">
                {tabsContent.map((tabContent, i) => (
                  <Tab key={`prompt-${i}`}>
                    <UtilityFragment vMarginLeft={14}>
                      <Button
                        colorScheme="tertiary"
                        element={
                          <Typography>{tabContent.prompt}</Typography>
                        }
                      />
                    </UtilityFragment>
                  </Tab>
                ))}
              </Tabs>
            </nav>
          </Nav>
        </Panel>
      </UtilityFragment>
    </>
  );
};

export default SidePanel;
