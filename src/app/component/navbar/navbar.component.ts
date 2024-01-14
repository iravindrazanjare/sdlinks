import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface DropdownItem {
  label: string;
  link?: string;
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
            { label: 'Eclipse', link: '/eclipse' },
            { label: 'Spring Suit', link: '/springsuit' },
            { label: 'Intellij', link: '/intellij'}
          ],
        },
        { label: 'Jdk', subItems : [{label :'Oracle Jdk', link: '/jdk'},{label : 'Open Jdk', link: '/openJdk'}],},
      ],
    },
    { label: 'Item 2', link: '/item-2' },
    { label: 'Item 3', link: '/item-3' },
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

  onSelect(option: string, link?: string): void {
    this.selectedOption = option;
    if (link) {
      this.router.navigate([link]);
    }
  }
}
