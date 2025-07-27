import {
  Button,
  Nav,
  Panel,
  Tab,
  Tabs,
  Typography,
  UtilityFragment,
} from "@visa/nova-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { VisaCloseTiny, VisaMenuLow } from "@visa/nova-icons-react";

const id = "side-panel";
const navElAriaLabel = "Side panel";

const SidePanel = ({
  setCurrentPrompt,
}: {
  setCurrentPrompt: React.Dispatch<React.SetStateAction<Prompt | null>>;
}) => {
  const panelRef = useRef<HTMLDialogElement>(null);
  const [recentPrompts, setRecentPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    const store = localStorage.getItem("prompts");
    if (!store) return;
    setRecentPrompts(JSON.parse(store));
  }, []);
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
                inlineSize: "350px",
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
                {recentPrompts.map((tabContent, i) => (
                  <Tab key={`prompt-${i}`}>
                    <UtilityFragment>
                      <Button
                        colorScheme="tertiary"
                        onClick={() => {
                          setCurrentPrompt(tabContent);
                          panelRef.current?.close();
                        }}
                      ><Typography style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden"
                      }}>{tabContent.prompt}</Typography></Button>
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
