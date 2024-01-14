import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface DropdownItem {
  label: string;
  route?: string; 
  subItems?: DropdownItem[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownItems: DropdownItem[] = [
    {
      label: 'Java',
      subItems: [
        {
          label: 'IDE',
          subItems: [
            { label: 'Eclipse', route: '/eclipseIde' },
            { label: 'Spring Suit', route: '/springSuit' },
            { label: 'Intellij', route: '/intellij'}
          ],
        },
        { 
          label: 'Jdk', 
          subItems : [
            {label :'Oracle Jdk', route: '/oracleJdk'},
            {label : 'Open Jdk', route: '/openJdkDownload'}
          ],
        },
      ],
    },
    { label: 'Item 2', route: '/item-2' },
    { label: 'Item 3', route: '/item-3' },
  ];

  anotherDropdownItems: DropdownItem[] = [
    { label: 'Another Item 1' },
    {
      label: 'Another Item 2',
      subItems: [
        { label: 'Another Subitem 2.1' },
        { label: 'Another Subitem 2.2' },
      ],
    },
    { label: 'Another Item 3' },
  ];

  selectedOption: string | undefined;

  constructor(private router: Router) {}

  onSelect(item : DropdownItem): void {
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }
}
