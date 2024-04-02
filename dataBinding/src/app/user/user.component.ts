import { Component, EventEmitter, Output } from "@angular/core";
import { User } from "../interfaces/user-interface";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  users: User[] = [
    {
      name: "نیما",
      cellNumber: "09122222222",
      email: "nima@mail.com",
      isEdited: false,
    },
    {
      name: "شیما",
      cellNumber: "09133333333",
      email: "shima@mail.com",
      isEdited: false,
    },
    {
      name: "سینا",
      cellNumber: "09144444444",
      email: "sina@mail.com",
      isEdited: false,
    },
  ];

  onAddUser(name: string, cellnumber: string, email: string, e: Event) {
    e.preventDefault();
    this.users.push({
      name: name,
      cellNumber: cellnumber,
      email: email,
      isEdited: false,
    });
  }
}
