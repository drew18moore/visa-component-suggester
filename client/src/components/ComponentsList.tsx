import { Typography, Utility } from "@visa/nova-react";

const ComponentsList = ({ components }: { components: string[] }) => {
  return (
    <Utility vFlex vFlexCol vGap={5}>
      <Typography variant="headline-2">Components</Typography>
      {components.map((component, i) => (
        <Typography
          key={i}
          style={{
            backgroundColor: "#333",
            fontFamily: "courier, monospace",
            width: "fit-content",
            padding: "0 0.25rem",
            borderRadius: "4px",
          }}
        >
          {component}
        </Typography>
      ))}
    </Utility>
  );
};

export default ComponentsList;
