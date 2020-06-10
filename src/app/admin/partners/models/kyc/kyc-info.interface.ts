import {KycInfoBase} from './kyc-info-base.interface';
import {KycStatus} from './kyc-status.enum';

export interface KycInfo extends KycInfoBase {
  KycStatus: KycStatus;
}
