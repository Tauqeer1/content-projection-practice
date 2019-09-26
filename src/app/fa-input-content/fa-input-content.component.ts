import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ContentChild
} from '@angular/core';
import { InputRefDirective } from '../inputRef/input-ref.directive';

@Component({
  selector: 'app-fa-input-content',
  templateUrl: './fa-input-content.component.html',
  styleUrls: ['./fa-input-content.component.scss']
})
export class FaInputContentComponent implements OnInit {
  @Input() icon: string;
  @ContentChild(InputRefDirective, { read: false, static: false })
  input: InputRefDirective;

  constructor() {}

  ngOnInit() {}

  @HostBinding('class.focus')
  get focus() {
    return this.input ? this.input.focus : false;
  }
}
