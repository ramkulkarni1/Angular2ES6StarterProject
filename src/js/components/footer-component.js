import { Component } from '@angular/core';
import template from '../../html/templates/footer-template.html';

@Component({
  selector: 'footer-component',
  template,
  styles: [ require('!raw!less!../../css/footer.less') ],
})
export default class FooterComponent {
}
