import { Component } from '@angular/core';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-spring-suit',
  templateUrl: './spring-suit.component.html',
  styleUrls: ['./spring-suit.component.css']
})
export class SpringSuitComponent {
  url: string | undefined;

  constructor(private urlService : UrlService) {}

  ngOnInit(): void {
    this.urlService.getJsonData().subscribe(data => {
      this.url = data.urls.ide.springsuit;
    });
  }
}
