/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRING: string;
  readonly VITE_BACKEND_URL: string;
  // その他の環境変数...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
