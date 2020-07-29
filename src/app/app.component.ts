import { Component, OnInit } from '@angular/core';
import {GreetingService} from './greeting.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GreetingService]
})
export class AppComponent implements OnInit {
  tasknr = 4;
  taskdescription = 'FullStack';
  name = new FormControl('');
  greeting = {};
  candidate = {
    firstname: 'Svenja',
    lastname: 'Bussinger',
    skills: ['HTML', 'CSS', 'JavaScript', 'Java']
  }

  constructor (private greetingService: GreetingService) {}

  ngOnInit () {
    this.setGreeting();

    this.name.valueChanges.subscribe(val => {
      this.setGreeting();
    })
  }

  setGreeting(): void {
    this.greetingService.getGreeting(this.name).subscribe(res => {
      this.greeting = res;
    });
  }


}
