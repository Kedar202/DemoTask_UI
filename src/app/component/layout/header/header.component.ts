import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Menu {
  name: string,
  path: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: string;
  menus: Menu[] = [
    {
      name: "Transaction Form",
      path: "/newTransaction"
    },
    {
      name: "Transaction List",
      path: "/transactionList"
    },
    {
      name: "Multi Value Form",
      path: "/multiValueForm"
    },
    {
      name: "User Profile",
      path: "/profile"
    }
  ]
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }

  handleLogout(): void {
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  isActive(path: string) {
    if(path === location.pathname) {
      return "active";
    }
  }
}
