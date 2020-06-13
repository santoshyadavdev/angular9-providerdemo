import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  values: any;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.values = this.configService.getValue();
  }


}
