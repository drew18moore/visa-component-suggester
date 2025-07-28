import {
  useFocusTrap,
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  Typography,
  Utility,
  DialogCloseButton,
  Link,
} from "@visa/nova-react";
import { useEffect } from "react";

const id = "welcome";
const WelcomeDialog = () => {
  const { onKeyNavigation, ref } = useFocusTrap();

  useEffect(() => {
    const showDialog = localStorage.getItem("show-welcome-dialog");
    if (!showDialog || JSON.parse(showDialog)) {
      ref.current?.showModal();
    }
  }, [ref]);

  const updateLocalStorage = () => {
    localStorage.setItem("show-welcome-dialog", "false");
  };

  return (
    <Dialog
      aria-describedby={`${id}-description`}
      aria-labelledby={`${id}-title`}
      id={id}
      ref={ref}
      onKeyDown={(e) => {
        onKeyNavigation(e, ref.current?.open);
        updateLocalStorage();
      }}
      style={{
        width: "500px",
      }}
    >
      <DialogContent>
        <DialogHeader id={`${id}-title`}>Hello there!</DialogHeader>
        <Utility vFlex vFlexCol vGap={8}>
          <Typography id={`${id}-description`}>
            This tool helps you turn natural language into{" "}
            <code
              style={{
                backgroundColor: "#333",
                fontFamily: "courier, monospace",
                width: "fit-content",
                padding: "0 0.25rem",
                borderRadius: "4px",
              }}
            >
              @visa/nova-react
            </code>{" "}
            components. Describe what you want in plain english and view the
            code and list of used components."
          </Typography>
          <Typography id={`${id}-description`}>
            💡 Follow this format: “A [componentType] with [aListOfElements]”,
            e.g. "An error dialog with a username and password field.""
          </Typography>
          <Typography>
            🛠 To use any of these components, follow the guides in the{" "}
            <Link
              href="https://design.visa.com/developing/react/"
              target="_blank"
            >
              Visa Product Design System documentation
            </Link>
            .
          </Typography>
        </Utility>
        <Utility vPaddingTop={16}>
          <Button
            onClick={() => {
              ref.current?.close();
              updateLocalStorage();
            }}
          >
            Proceed
          </Button>
        </Utility>
      </DialogContent>
      <DialogCloseButton
        onClick={() => {
          ref.current?.close();
          updateLocalStorage();
        }}
      />
    </Dialog>
  );
};

export default WelcomeDialog;
