import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { Dashboard } from './dashboard/dashboard';
import { FAQ } from './faq/faq';
import { AdminLogin } from './admin-login/admin-login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,About,Contact,Home,Login,Registration,Dashboard,FAQ,AdminLogin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Buzzit');
}
