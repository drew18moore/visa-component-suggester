const COMPONENT_ALIASES: Record<string, string[]> = {
  login: ["log in", "sign in", "signin", "log-in", "sign-in"],
  signup: ["sign up", "register", "create account", "sign-up", "registration"],

  modal: ["dialog", "popup", "pop-up", "overlay"],
  card: ["info card", "content box", "panel"],

  navbar: ["navigation", "menu", "top bar", "nav"],
  sidebar: ["drawer", "navigation panel", "side nav"],

  form: ["input form", "form group"],
  contactform: ["contact form", "get in touch", "contact us"],
  searchform: ["search bar", "search input", "search box"],

  button: ["cta", "call to action", "clickable button"],
  toggle: ["switch", "toggle switch", "on off switch"],

  input: ["text input", "text field"],
  textarea: ["multi-line input", "text area"],
  checkbox: ["check box", "tick box"],
  radio: ["radio button", "radio group"],
  select: ["dropdown", "select menu", "drop-down"],
  slider: ["range slider", "progress slider"],
  fileupload: ["file input", "upload field", "file picker"],

  alert: ["notification", "warning message", "info box", "error message"],
  toast: ["toast notification", "snackbar", "popup message"],
  tooltip: ["hover tip", "info tooltip"],
  progressbar: ["loading bar", "progress indicator"],
  spinner: ["loader", "loading spinner", "loading animation"],

  grid: ["grid layout", "card grid"],
  list: ["item list", "list view"],
  table: ["data table", "table view"],
  container: ["wrapper", "layout box"],

  image: ["picture", "img tag"],
  video: ["video player", "media player"],

  avatar: ["profile picture", "user icon"],
  badge: ["label", "status indicator"],
  tag: ["pill", "label tag"],
  chip: ["tag chip", "chip label"],
  timeline: ["activity timeline", "event timeline"],
  calendar: ["date picker", "schedule view"],
};

const PROPERTY_ALIASES: Record<string, string[]> = {
  rememberme: ["remember me", "keep me signed in", "stay signed in"],
  "terms-and-conditions": ["terms and conditions", "accept terms", "agree to terms"],
  username: ["username", "user name", "login id"],
  password: ["password", "passcode"],
  email: ["email", "email address"],
  submit: ["submit button", "submit", "send"],
  checkbox: ["checkbox", "tick box"],
  captcha: ["captcha", "robot check", "i am not a robot"],
  forgotpassword: ["forgot password", "reset password"],
}

const getAliases = (_aliases: Record<string, string[]>): Record<string, string> => {
  const flattenedAliases: Record<string, string> = {};
  for (const [canonical, aliases] of Object.entries(_aliases)) {
    flattenedAliases[canonical] = canonical;
    for (const alias of aliases) {
      flattenedAliases[alias.toLowerCase()] = canonical;
    }
  }
  return flattenedAliases;
};

export const getComponentAliases = () => {
  return getAliases(COMPONENT_ALIASES)
}

export const getPropertyAliases = () => {
  return getAliases(PROPERTY_ALIASES)
}