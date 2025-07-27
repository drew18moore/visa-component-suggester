import * as prefabs from "./prefabs";

export const prefabMap: Record<string, (props: string[]) => prefabs.GeneratePrefabReturn> = {
  login: prefabs.generateLoginForm,
  signup: prefabs.generateSignupForm,
  form: prefabs.generateGenericForm,
  contactform: prefabs.generateContactForm,
  navbar: prefabs.generateTopNav
}