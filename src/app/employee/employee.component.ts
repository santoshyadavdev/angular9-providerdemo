import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  values: any;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.values =this.configService.getValue();
  }

}
