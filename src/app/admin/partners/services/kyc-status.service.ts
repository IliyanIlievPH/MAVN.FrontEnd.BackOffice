import {Injectable} from '@angular/core';
import {KycStatusItem} from '../models/kyc/kyc-status-item.interface';
import {KycStatus} from '../models/kyc/kyc-status.enum';

@Injectable({
  providedIn: 'root',
})
export class KycStatusService {
  private readonly kycStatusItems: KycStatusItem[];
  private readonly kycStatusItemsDict: {[key: string]: string};

  getItems() {
    return [...this.kycStatusItems];
  }

  getItemsDict() {
    return this.kycStatusItemsDict;
  }

  constructor() {
    this.kycStatusItems = [
      {Value: KycStatus.Pending, DisplayName: $localize`:@@KycStatus.Pending:Unverified`},
      {Value: KycStatus.InReview, DisplayName: $localize`:@@KycStatus.InReview:In Review`},
      {Value: KycStatus.Rejected, DisplayName: $localize`:@@KycStatus.Rejected:Rejected`},
      {Value: KycStatus.Accepted, DisplayName: $localize`:@@KycStatus.Accepted:Verified`},
      {Value: KycStatus.RequiresData, DisplayName: $localize`:@@KycStatus.RequiresData:Requires Data`},
    ];

    this.kycStatusItemsDict = this.kycStatusItems.reduce((obj, item) => {
      obj[item.Value] = item.DisplayName;
      return obj;
    }, {} as {[key: string]: string});
  }
}
