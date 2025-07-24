type ParsedToken = {
  componentType: string;
  elements: {
    type: string;
    variant: string;
  }[];
};

type AST_ELEMENT = [
  type: string,
  variant?: string,
  modifiers?: string[],
  properties?: string,
  children?: AST_ELEMENT
]
