import { Component, OnInit, Type } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IAccount } from '@cb/core/interfaces/account.interface';
import { AccountService } from '@cb/core/services/accounts.service';

@Component({
  selector: 'cb-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']

})
export class ConsultaComponent implements OnInit {
  account: IAccount = {} as IAccount;
  grupoAccount: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {
    this.grupoAccount = this.fb.group({
      Id: [0],
      Balance: [0],
      Type: [''],
      Currency: [''],
    });

    // this.grupoAccount.disable();
  }

  ngOnInit(): void {
    this.accountService.getAccount().subscribe((account: IAccount) => {
      this.account = account;
      this.grupoAccount.patchValue(this.account);
    });
  }

}
