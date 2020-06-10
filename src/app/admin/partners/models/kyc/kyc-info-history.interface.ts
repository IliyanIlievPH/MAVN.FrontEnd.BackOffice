import {KycInfoBase} from './kyc-info-base.interface';
import {KycStatus} from './kyc-status.enum';

export interface KycInfoHistory extends KycInfoBase {
  OldKycStatus: KycStatus;
  NewKycStatus: KycStatus;
}
