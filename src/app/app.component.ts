import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fullName = 'Firstname Lastname';
  jobTitle = 'Job Title';
  phoneArea = '123';
  phonePrefix = '456';
  phoneSuffix = '7890';
  secondText = 'secondary message';


  onUpdateFullName(event: Event) {
    this.fullName = <HTMLInputElement>event.target.value;
  }
  onUpdateJobTitle(event: Event) {
    this.jobTitle = <HTMLInputElement>event.target.value;
  }
  onUpdatePhoneArea(event: Event) {
    this.phoneArea = <HTMLInputElement>event.target.value;
  }
  onUpdatePhonePrefix(event: Event) {
    this.phonePrefix = <HTMLInputElement>event.target.value;
  }
  onUpdatePhoneSuffix(event: Event) {
    this.phoneSuffix = <HTMLInputElement>event.target.value;
  }
  onUpdateSecondText(event: Event) {
    this.secondText = <HTMLInputElement>event.target.value;
  }
}