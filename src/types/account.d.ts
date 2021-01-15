import { AccountInfo, PublicKey } from '@solana/web3.js';

interface SelectedTokenAccounts {
    [tokenMint: string]: string;
}

interface TokenAccount {
    pubkey: PublicKey;
    account: AccountInfo<Buffer> | null;
    effectiveMint: PublicKey;
}
