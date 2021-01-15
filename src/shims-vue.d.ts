declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare type BN = any;
type Wallet = any;

declare module 'bs58';
declare module 'immutable-tuple';
declare module 'bn.js';
declare module '@project-serum/sol-wallet-adapter';
