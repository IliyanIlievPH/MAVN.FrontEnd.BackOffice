import {Component, OnInit, ViewChild, TemplateRef, ElementRef} from '@angular/core';
import {PartnersService} from '../partners.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {PartnerInfo} from '../models/partner-info.interface';
import {HeaderMenuService} from 'src/app/shared/services/header-menu.service';
import {PaymentProvidersService} from '../services/payment-providers.service';
import {Provider} from '../models/provider.interface';
import {AuthenticationService} from 'src/app/authentication/authentication.service';
import {TranslateService} from 'src/app/shared/services/translate.service';

@Component({
  selector: 'app-partner-add',
  templateUrl: './partner-add.component.html',
  styleUrls: ['./partner-add.component.scss'],
})
export class PartnerAddComponent implements OnInit {
  @ViewChild('subHeaderTemplate', {static: true}) private subHeaderTemplate: TemplateRef<any>;
  isFormDisabled = false;
  loading = false;
  provider: Provider;
  partnerId: string;

  isPartnerAdmin = false;

  // Translates
  @ViewChild('headerTitle', {static: true})
  headerTitle: ElementRef<HTMLElement>;
  @ViewChild('headerTitleForPartner', {static: true})
  headerTitleForPartner: ElementRef<HTMLElement>;
  @ViewChild('successMessage', {static: true})
  successMessage: ElementRef<HTMLElement>;
  private translates = {
    headerTitle: '',
    successMessage: '',
  };

  constructor(
    private authenticationService: AuthenticationService,
    private partnersService: PartnersService,
    private paymentProvidersService: PaymentProvidersService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService,
    private router: Router,
    private headerMenuService: HeaderMenuService
  ) {
    this.isPartnerAdmin = this.authenticationService.isPartnerAdmin();
  }

  ngOnInit() {
    this.translates.headerTitle = this.isPartnerAdmin
      ? this.headerTitle.nativeElement.innerText
      : this.headerTitleForPartner.nativeElement.innerText;

    this.headerMenuService.headerMenuContent = {
      title: this.translates.headerTitle,
      subHeaderContent: this.subHeaderTemplate,
    };

    this.translates.successMessage = this.successMessage.nativeElement.innerText;
  }

  onFormSubmit(partner: PartnerInfo) {
    const {partnerDetails, partnerProviderDetails} = partner;
    this.isFormDisabled = true;
    this.loading = true;
    this.partnersService.add(partnerDetails).subscribe((result: any) => {
      partnerProviderDetails.PartnerId = result.PartnerId;
      this.paymentProvidersService.create(partnerProviderDetails).subscribe(
        () => {
          this.snackBar.open(this.translates.successMessage, this.translateService.translates.CloseSnackbarBtnText, {
            duration: 5000,
          });
          this.router.navigate(['/admin/platform/partners']);
        },
        () => {
          this.loading = false;
          this.isFormDisabled = false;
          this.snackBar.open(this.translateService.translates.ErrorMessage, this.translateService.translates.CloseSnackbarBtnText, {
            duration: 5000,
          });
        }
      );
    });
  }
}
