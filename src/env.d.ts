/// <reference types="react-scripts" />

interface ImportMetaEnv {
  readonly REACT_APP_EMAILJS_SERVICE_ID: string;
  readonly REACT_APP_EMAILJS_TEMPLATE_ID: string;
  readonly REACT_APP_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
