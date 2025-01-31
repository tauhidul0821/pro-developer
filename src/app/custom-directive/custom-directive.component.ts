import {Component, OnInit} from '@angular/core';
import {HighlighDirective} from './highligh.directive';

@Component({
  selector: 'app-custom-directive',
  imports: [HighlighDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.scss'
})
export class CustomDirectiveComponent {}
