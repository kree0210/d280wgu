import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { SvgApiService } from '../svg-api.service';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Output() svgIdSelected = new EventEmitter<string>();
  @Output() capitalSelected = new EventEmitter<string>();
  @Output() regionSelected = new EventEmitter<string>();
  @Output() incomeLevelSelected = new EventEmitter<string>();
  @Output() latitudeSelected = new EventEmitter<string>();
  @Output() longitudeSelected = new EventEmitter<string>();
  @ViewChild(InfoComponent)
  private infoComponent!: InfoComponent;

  constructor(
    private elementRef: ElementRef,
    private svgApiService: SvgApiService
  ) {}

  ngAfterViewInit(): void {
    const svgElement = this.elementRef.nativeElement.querySelector("svg");
    const pathElements = svgElement.querySelectorAll("path");

    pathElements.forEach((path: SVGPathElement) => {
      path.addEventListener("click", this.handleClick.bind(this));
    });
  }

  handleClick(event: MouseEvent): void {
    const path = event.target as SVGPathElement;
    const countryId = path.id;

    this.svgApiService.getCountryData(countryId).subscribe((data: any) => {
      const name = data[1][0].name;
      const capitalCity = data[1][0].capitalCity;
      const region = data[1][0].region.value;
      const income = data[1][0].incomeLevel.value;
      const latitude = data[1][0].latitude;
      const longitude = data[1][0].longitude;

      this.svgIdSelected.emit(name);
      this.capitalSelected.emit(capitalCity);
      this.regionSelected.emit(region);
      this.incomeLevelSelected.emit(income);
      this.latitudeSelected.emit(latitude);
      this.longitudeSelected.emit(longitude);
    });
  }
}








