import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';

import { routes } from './routes';

// Main app class
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export default class AppRoutingModule { }
