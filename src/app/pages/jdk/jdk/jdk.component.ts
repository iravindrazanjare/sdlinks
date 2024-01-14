import { Component } from '@angular/core';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-jdk',
  templateUrl: './jdk.component.html',
  styleUrls: ['./jdk.component.css']
})
export class JdkComponent {
  url: string | undefined;

  constructor(private urlService : UrlService) {}

  ngOnInit(): void {
    this.urlService.getJsonData().subscribe(data => {
      this.url = data.urls.jdk.jdk;
    });
  }
}
