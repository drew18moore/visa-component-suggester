import * as prefabs from "./prefabs";

export const prefabMap: Record<string, (props: string[]) => string> = {
  login: prefabs.generateLoginForm,
  signup: prefabs.generateSignupForm,
  form: prefabs.generateGenericForm,
}