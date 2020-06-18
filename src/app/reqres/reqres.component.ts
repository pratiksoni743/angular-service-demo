import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqresService } from '../services/reqres.service';
import { User } from '../model/user';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent implements OnInit {
  userId: number = 1;
  selectedUser: any;
  postUser: User;
  userList: Array<User>;

  constructor(private httpClient: HttpClient, private reqresService: ReqresService) { 
    this.postUser = new User();
    this.userList = new Array<User>();
  }

  ngOnInit(): void {
  }

  getData() {
    this.httpClient.get('https://reqres.in/api/users/' + this.userId).subscribe(
      (obj: Object) => {
        this.selectedUser = obj["data"];
      },
      (error: any) => {
        this.selectedUser = "Error Code : " + error["status"]
      },
      () => { }
    );
  }

  postData() {
    this.reqresService.post('https://reqres.in/api/users', this.postUser).subscribe(
      (obj: Object) => {
        this.selectedUser = obj;
      },
      (error: any) => {
        this.selectedUser = "Error Code : " + error["status"]
      },
      () => { }
    );
  }

  getDataByPage(pageNumber: number){
    this.httpClient.get('https://reqres.in/api/users?page=' + pageNumber).subscribe(
      (obj: Object) => {
        this.userList = obj["data"];
      },
      (error: any) => {
        this.userList = null;
      },
      () => { }
    );
  }

}
