/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

declare module "*.json" {
  const value: any;
  export default value;
}
