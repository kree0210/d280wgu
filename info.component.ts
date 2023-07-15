import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  title = 'My World';
    @Input() countryId!: string;
    @Input() countryCapital!: string;
    @Input() countryRegion!: string;
    @Input() countryIncomeLevel!: string;
    @Input() countryLatitude!: string;
    @Input() countryLongitude!: string;
  
    constructor(
      countryId: string,
      countryCapital: string,
      countryRegion: string,
      countryIncomeLevel: string,
      countryLatitude: string,
      countryLongitude: string
    ) {
      this.countryId = countryId;
      this.countryCapital = countryCapital;
      this.countryRegion = countryRegion;
      this.countryIncomeLevel = countryIncomeLevel;
      this.countryLatitude = countryLatitude;
      this.countryLongitude = countryLongitude;
    }
  
    ngOnInit(): void {}
  }
  

