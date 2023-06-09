import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LayoutService } from '../layout.service';
import { DialogConfirmService } from 'src/app/shared/dialog-confirm/dialog-confirm.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  open = true
  settingsDrop = false
  constructor(private web: LayoutService, private router: Router, private dialog: DialogConfirmService) { }

  ngOnInit(): void {
    this.web.open$.subscribe(isOpen => this.open = isOpen);

  }

  toggleMenu() {
    this.web.toggleMenu()
  }

  onClickSignOut() {
    this.dialog
      .confirmDialog({
        title: 'Log Out?',
        message: 'Do you want to confirm this action?',
        confirmCaption: 'Confirm',
        cancelCaption: 'Cancel',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          localStorage.clear();
          this.router.navigateByUrl('auth')
        }
      });
  }

}


