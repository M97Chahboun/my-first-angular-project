import { Component } from '@angular/core';

@Component({
  selector: 'app-button-disabled',
  templateUrl: './button-disabled.component.html',
  styleUrls: ['./button-disabled.component.css']
})
export class ButtonDisabledComponent {
buttonStatus = false;
serverCreationStatus = "No server created yet";

constructor(){
  setTimeout(() => {
    this.buttonStatus = true;
  }, 2000);
}
onCreateServer(){
  this.serverCreationStatus = "Server Was Created !";
}
}
