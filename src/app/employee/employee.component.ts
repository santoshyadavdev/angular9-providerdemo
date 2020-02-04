import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    console.log(this.configService.getValue());
  }

}
