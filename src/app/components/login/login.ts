import { Component, inject, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from '../../service/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  constructor(
    private userService: UserService, private router: Router) { }

  private readonly oidcSecurityService = inject(OidcSecurityService);
  configuration$ = this.oidcSecurityService.getConfiguration();

  userData$ = this.oidcSecurityService.userData$;

  isAuthenticated = false;
  ngOnInit(): void {
    
      this.checkAuth();
    
    this.oidcSecurityService.userData$.subscribe((userData) => {
      if (userData) {
        console.log('Dados do usuário:', userData);
        this.userService.setUserData(userData);
      }
    });

    // Monitorar autenticação
    this.oidcSecurityService.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      console.log('Está autenticado?', isAuthenticated);
    });

    this.oidcSecurityService.isAuthenticated$.subscribe(
      ({ isAuthenticated }) => {
        this.isAuthenticated = isAuthenticated;

        console.warn('authenticated: ', isAuthenticated);
      }
    );
  }
  login(): void {
    this.oidcSecurityService.authorize();
  }
  logout() {
    const clientId = '3g9ifoegsd2u8dk9tn9m956ggh';
    const logoutUri = encodeURIComponent(window.location.origin + '/login');

    window.location.href =
      `https://us-east-12wzrtjjhg.auth.us-east-1.amazoncognito.com/logout?client_id=${clientId}&logout_uri=${logoutUri}`;


  }
  checkAuth() {
    this.oidcSecurityService.checkAuth().subscribe((auth) => {
      if (auth.isAuthenticated) {
        this.router.navigate(['/atividades']);
      }
    });
  }
}
