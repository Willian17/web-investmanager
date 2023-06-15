import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChartLine,
  faClipboardQuestion,
  faCrosshairs,
  faMoneyBillTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  currentUrl = '';

  hideMenuUrls = ['/signin', '/signup'];

  username = '';

  menuItemsPrincipal = [
    {
      label: 'Ativos',
      icon: faChartLine,
      url: '/actives',
    },
    {
      label: 'Novo aporte',
      icon: faMoneyBillTrendUp,
      url: '/actives/new-contribution',
    },
  ];

  menuItemsConfig = [
    {
      label: 'Metas',
      icon: faCrosshairs,
      url: '/marks',
    },
    {
      label: 'Critérios',
      icon: faClipboardQuestion,
      url: '/questions',
    },
  ];

  constructor(private router: Router, private userService: UserService) {
    this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationEnd') {
        this.currentUrl = (event as any).url;
      }
    });
  }

  ngOnInit(): void {
    this.username = this.userService.getUserName();
  }

  handleLogout() {
    this.userService.logout();
    this.router.navigate(['signin']);
  }
}
