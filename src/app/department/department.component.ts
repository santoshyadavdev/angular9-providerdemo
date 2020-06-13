import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  values: any;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.values = this.configService.getValue();
  }
}
