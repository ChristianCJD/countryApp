import { Component } from '@angular/core';


import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = []

  constructor( private countriesService: CountriesService ) {}

  searchByCapital( query: string ): void {
    this.countriesService.searchCapital( query )
      .subscribe( countries => {
        this.countries = countries
      });
  }

}
