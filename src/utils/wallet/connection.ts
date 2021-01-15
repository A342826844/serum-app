// import {
//     Account, AccountInfo, Connection, PublicKey,
// } from '@solana/web3.js';
// import tuple from 'immutable-tuple';

// const accountListenerCount = new Map();

// export async function useAccountInfo(
//     publicKey: PublicKey | undefined | null,
//     connection: Connection,
// ) {
// //   ): [AccountInfo<Buffer> | null | undefined, boolean] {
//     const cacheKey = tuple(connection, publicKey?.toBase58());
//     if (publicKey) {
//         // const [accountInfo, loaded] = await connection.getAccountInfo(publicKey);
//     }
//     if (!publicKey) {
//         return;
//     }
//     if (accountListenerCount.has(cacheKey)) {
//         const currentItem = accountListenerCount.get(cacheKey);
//         ++currentItem.count;
//     } else {
//         let previousData: Buffer | null = null;
//         const subscriptionId = connection.onAccountChange(publicKey, (e) => {
//             if (e.data) {
//                 if (!previousData || !previousData.equals(e.data)) {
//                 // setCache(cacheKey, e);
//                 } else {
//                 }
//                 previousData = e.data;
//             }
//         });
//         accountListenerCount.set(cacheKey, { count: 1, subscriptionId });
//     }
//     return () => {
//         const currentItem = accountListenerCount.get(cacheKey);
//         const nextCount = currentItem.count - 1;
//         if (nextCount <= 0) {
//             connection.removeAccountChangeListener(currentItem.subscriptionId);
//             accountListenerCount.delete(cacheKey);
//         } else {
//             // eslint-disable-next-line
//             --currentItem.count;
//         }
//     };
//     // return [accountInfo, loaded];
// }
