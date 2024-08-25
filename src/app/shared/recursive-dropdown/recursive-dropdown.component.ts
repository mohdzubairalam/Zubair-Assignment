import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recursive-dropdown',
  templateUrl: './recursive-dropdown.component.html',
  styleUrls: ['./recursive-dropdown.component.css']
})
export class RecursiveDropdownComponent {
  @Input() data: any[] = [];

  // Function to handle click events on menu items
  onSelect(item: any) {
    
  }
}
