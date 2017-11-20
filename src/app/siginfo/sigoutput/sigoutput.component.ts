import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sigoutput',
  templateUrl: './sigoutput.component.html',
  styleUrls: ['./sigoutput.component.css']
})
export class SigoutputComponent {

  @Input() fullName: string;
  @Input() jobTitle: string;
  @Input() phoneArea: string;
  @Input() phonePrefix: string;
  @Input() phoneSuffix: string;
  @Input() secondText: string;

}
