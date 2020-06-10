import {Component, OnInit, Input} from '@angular/core';
import {KycStatus} from '../models/kyc/kyc-status.enum';
import {KycStatusService} from '../services/kyc-status.service';

@Component({
  selector: 'app-kyc-status-badge',
  templateUrl: './kyc-status-badge.component.html',
  styleUrls: ['./kyc-status-badge.component.scss'],
})
export class KycStatusBadgeComponent implements OnInit {
  @Input()
  kycStatus: KycStatus;
  @Input()
  isLabel = false;
  KycStatus = KycStatus;
  kycStatusItemsDict: {[key: string]: string};

  constructor(
    // services
    private kycStatusService: KycStatusService
  ) {
    this.kycStatusItemsDict = this.kycStatusService.getItemsDict();
  }

  ngOnInit(): void {}
}
