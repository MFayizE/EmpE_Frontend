import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LayoutComponent } from '../layout.component';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  submenuIndex = -1;
  menus = [
    { name: "Dashboard", link: "/admin/dash", hasSubmenu: false },
    { name: "Employees", link: "/admin/emp", hasSubmenu: false },
    // { name: "Settings", link: "/", hasSubmenu: false },
  ];
  open = true;
  submenuLeft: number = 0;
  submenuTop: number = 0;
  submenuHeight: number = 0;
  constructor(private web: LayoutService) { }
  @HostListener('window:resize')
  onWindowResize() {
    const isMobile = window.innerWidth >= 768; // 768 is the width of md breakpoint
    this.web.setIsMobile(isMobile);
  }
  ngOnInit(): void {
    this.web.open$.subscribe(isOpen => this.open = isOpen);
  }

  isReportsMenu(menuName: string) {
    return menuName === 'Reports';
  }
  // toggleMenu() {
  //   this.open = !this.open;
  // }


  openSubmenu(index: number, isSubMenu: boolean) {
    if (this.menus[index].hasSubmenu) {
      if (this.submenuIndex === index && !isSubMenu) {
        // submenu is already open and a menu item is clicked, hide it
        this.submenuIndex = -1;
        console.log('Closed submenu at index', index);
      } else if (!isSubMenu) {
        // show submenu if not already open and a menu item is clicked
        this.submenuIndex = index;
        console.log('Opened submenu at index', index);
      }
    }
  }
  isSubmenuOpen(index: number): boolean {
    return this.submenuIndex === index;
  }
}

