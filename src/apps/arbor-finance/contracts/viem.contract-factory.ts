import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Network } from '~types/network.interface';

import { ArborFinanceBondToken__factory } from './viem';

type ContractOpts = { address: string; network: Network };

@Injectable()
export class ArborFinanceViemContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {}

  arborFinanceBondToken({ address, network }: ContractOpts) {
    return ArborFinanceBondToken__factory.connect(address, this.appToolkit.getViemNetworkProvider(network));
  }
}
