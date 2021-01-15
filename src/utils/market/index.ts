import {
    MARKETS,
} from '@project-serum/serum';

export const markets = MARKETS.filter((item) => !item.deprecated);

export const getMarkets = () => MARKETS.filter((item) => !item.deprecated);
