import { Component } from '@angular/core';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent {
  protected readonly faSearch = faSearch;
  protected readonly faFilter = faFilter;
}
