import { Typography } from "@visa/nova-react";

const Greeting = () => {
  return (
    <Typography
      variant="headline-1"
      style={{
        position: "absolute",
        top: "50%",
        translate: "0 -50%",
        width: "100%",
        textAlign: "center",
      }}
      colorScheme="active"
    >
      What can I create for you?
    </Typography>
  );
};

export default Greeting;
