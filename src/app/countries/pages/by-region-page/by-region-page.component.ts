import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public region: Country[] = []

  constructor( private countriesService: CountriesService){}

  searchbyRegion( query: string): void{
    this.countriesService.searchRegion( query )
      .subscribe( region => {
        this.region = region
      });
  }
}
