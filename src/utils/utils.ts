/* eslint-disable */

import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';

export function isValidPublicKey(key: any) {
    if (!key) {
        return false;
    }
    try {
        new PublicKey(key);
        return true;
    } catch {
        return false;
    }
}

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const percentFormat = new Intl.NumberFormat(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export function floorToDecimal(
    value: number,
    decimals: number | undefined | null,
) {
    return decimals ? Math.floor(value * 10 ** decimals) / 10 ** decimals : value;
}

export function roundToDecimal(
    value: number,
    decimals: number | undefined | null,
) {
    return decimals ? Math.round(value * 10 ** decimals) / 10 ** decimals : value;
}

export function getDecimalCount(value: any): number {
    if (!isNaN(value) && Math.floor(value) !== value) return value.toString().split('.')[1].length || 0;
    return 0;
}

export function divideBnToNumber(numerator: BN, denominator: BN): number {
    const quotient = numerator.div(denominator).toNumber();
    const rem = numerator.umod(denominator);
    const gcd = rem.gcd(denominator);
    return quotient + rem.div(gcd).toNumber() / denominator.div(gcd).toNumber();
}

export function getTokenMultiplierFromDecimals(decimals: number): BN {
    return new BN(10).pow(new BN(decimals));
}

// const localStorageListeners = {};

export function abbreviateAddress(address: { toBase58: () => any }, size = 4) {
    const base58 = address.toBase58();
    return `${base58.slice(0, size)}…${base58.slice(-size)}`;
}

export function isEqual(obj1: { [x: string]: any }, obj2: { [x: string]: any }, keys: string[]) {
    if (!keys && Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    // eslint-disable-next-line
    keys = keys || Object.keys(obj1);
    // eslint-disable-next-line
    for (const k of keys) {
        if (obj1[k] !== obj2[k]) {
            // shallow comparison
            return false;
        }
    }
    return true;
}
