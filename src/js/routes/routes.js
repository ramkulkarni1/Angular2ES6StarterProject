import LoginComponent from '../components/login-component';
import HomeComponent from '../components/home-component';

export const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];
