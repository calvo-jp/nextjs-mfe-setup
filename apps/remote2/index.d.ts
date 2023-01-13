/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg" {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module "remote1/*" {
  const Component: any;
  export default Component;
}
