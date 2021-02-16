import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService

  ) { }

  ngOnInit(): void {
  }

  @HostBinding('class.expanded') expanded: boolean = false;

  sair() {
    this.router.navigate(['/home'])
    localStorage.clear()
  }

}
