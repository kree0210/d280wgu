import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My World';
  selectedValues = {
    svgId: "",
    capital: "",
    region: "",
    incomeLevel: "",
    latitude: "",
    longitude: ""
  };
  
  onSvgIdSelected(svgId: string) {
    this.selectedValues.svgId = svgId;
  }
  
  onCapitalSelected(capital: string) {
    this.selectedValues.capital = capital;
  }
  
  onRegionSelected(region: string) {
    this.selectedValues.region = region;
  }
  
  onIncomeSelected(income: string) {
    this.selectedValues.incomeLevel = income;
  }
  
  onLatitudeSelected(latitude: string) {
    this.selectedValues.latitude = latitude;
  }
  
  onLongitudeSelected(longitude: string) {
    this.selectedValues.longitude = longitude;
  }
  
}
