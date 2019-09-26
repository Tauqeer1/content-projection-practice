import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit {
  @Input() icon: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Output() keyupEvent: EventEmitter<string> = new EventEmitter<string>();
  inputFocus = false;

  constructor() {}

  ngOnInit() {}

  @HostBinding('class.focus')
  get focus() {
    return this.inputFocus;
  }
}
