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

  constructor(private router: Router) {}

  navigateToHome(){
    this.router.navigate(['/']);
  }

  dropdownItems: DropdownItem[] = [
    { 
      label: 'Framework',
        subItems : [
          {label: 'Struts', route: '/struts' },
          {label: 'Spring Boot', route: '/springboot' },
          {label: 'Hibernate', route: '/hibernate'},
          {label: 'Angular', route: '/angular'},
          {label: 'Django', route: '/django'},
          {label: 'Bootstrap', route: '/bootstrap'},
          {label: 'Asp.Net', route: '/aspnet'}
        ],
    },
    { 
      label: 'IDE',
        subItems: [
          {label: 'Eclipse', route: '/eclipse'},
          {label: 'MyEclipse', route: '/myeclipse'},
          {label: 'Spring Suit', route: '/springsuit'},
          {label: 'Intellij', route: '/intellij'},
          {label: 'PyCharm', route: '/pycharm'},
          {label: 'Visual Studio', route: '/visualstudio'},
          {label: 'NetBeans', route: '/netbeans'},
        ],
      },
    { 
      label: 'Database',
        subItems : [
          {label: 'Postgresql', route: '/postgresql' },
          {label: 'Ms Sql Server', route: '/sqlserver' },
          {label: 'MySQL', route: '/mysql'},
          {label: 'MongoDb', route: '/mongodb'},
          {label: 'Oracle SQL', route: '/oraclesql'},
          {label: 'NoSQL', route: '/nosql'}
        ],
    },
    {
      label: 'Java',
      subItems: [
        { 
          label: 'Jdk', 
          subItems : [
            {label :'Oracle Jdk', route: '/oraclejdk'},
            {label : 'Open Jdk', route: '/openjdkdownload'}
          ],
        },
      ],
    },
  ];

  anotherDropdownItems: DropdownItem[] = [
    { 
      label: 'Another Item 1' },
      {
        label: 'Another Item 2',
          subItems: [
            {label: 'Another Subitem 2.1' },
            {label: 'Another Subitem 2.2' },
        ],
      },
    {label: 'Another Item 3' },
  ];

  onSelect(item : DropdownItem): void {
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }
}
