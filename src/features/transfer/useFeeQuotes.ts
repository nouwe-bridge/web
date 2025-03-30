import { TokenAmount, WarpCore } from '@hyperlane-xyz/sdk';
import { HexString } from '@hyperlane-xyz/utils';
import { getAccountAddressAndPubKey, useAccounts } from '@hyperlane-xyz/widgets';
import { useQuery } from '@tanstack/react-query';
import { logger } from '../../utils/logger';
import { useMultiProvider } from '../chains/hooks';
import { getTokenByIndex, useWarpCore } from '../tokens/hooks';
import { TransferFormValues } from './types';

export function useFeeQuotes(formValues: TransferFormValues, enabled: boolean) {
  const { origin, destination, tokenIndex } = formValues ?? {};
  const multiProvider = useMultiProvider();
  const warpCore = useWarpCore();

  const { accounts } = useAccounts(multiProvider);
  const { address: sender, publicKey: senderPubKey } = getAccountAddressAndPubKey(
    multiProvider,
    origin,
    accounts,
  );

  const { isLoading, isError, data } = useQuery({
    // The WarpCore class is not serializable, so we can't use it as a key
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['useFeeQuotes', origin, destination, tokenIndex, sender, senderPubKey],
    queryFn: () => fetchFeeQuotes(warpCore, destination, tokenIndex, sender, senderPubKey),
    enabled,
    refetchInterval: false,
  });

  return { isLoading, isError, fees: data };
}

export async function fetchFeeQuotes(
  warpCore: WarpCore,
  destination?: ChainName,
  tokenIndex?: number,
  sender?: Address,
  senderPubKey?: Promise<HexString>,
): Promise<{ interchainQuote: TokenAmount; localQuote: TokenAmount } | null> {
  const originToken = getTokenByIndex(warpCore, tokenIndex);
  if (!destination || !sender || !originToken) return null;
  logger.debug('Fetching fee quotes');
  return warpCore.estimateTransferRemoteFees({
    originToken,
    destination,
    sender,
    senderPubKey: await senderPubKey,
  });
}
