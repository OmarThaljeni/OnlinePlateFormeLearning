import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../../models/professor';
import { User } from '../../models/user';
import { AdminService } from '../../services/admin.service';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-addprofessor',
  templateUrl: './addprofessor.component.html',
  styleUrls: ['./addprofessor.component.css']
})
export class AddprofessorComponent implements OnInit {

  user = new User();
  professor = new Professor();
  msg = ' ';
  
  constructor(private _Service : AdminService, private _professorService : ProfessorService, private _router : Router) { }

  ngOnInit(): void {
  }

  addProfessor()
  {
    this._Service.addProfessor(this.professor).subscribe(
      data => {
        console.log("Professor added Successfully !!!");
        this._router.navigate(['/admindashboard']);
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "Professor with "+this.professor.email+" already exists !!!";
      }
    )
  }
  registerUser()
  {

  }

}
