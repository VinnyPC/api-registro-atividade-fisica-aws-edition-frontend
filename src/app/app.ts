import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from './service/user-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('api-registro-atividade-fisica-aws-edition-frontend');
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData }) => {
      console.log('Auth inicializado. Logado?', isAuthenticated, 'Dados:', userData);

      if (isAuthenticated) {
        this.userService.setUserData(userData);
      }
    });
  }

}
