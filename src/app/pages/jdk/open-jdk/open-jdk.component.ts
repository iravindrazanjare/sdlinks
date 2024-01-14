import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-open-jdk',
  templateUrl: './open-jdk.component.html',
  styleUrls: ['./open-jdk.component.css']
})
export class OpenJdkComponent implements OnInit{
  url: string | undefined;

  constructor(private urlService : UrlService) {}

  ngOnInit(): void {
    this.urlService.getJsonData().subscribe(data => {
      this.url = data.urls.jdk.openjdk;
      console.log(this.url);
    });
  }
}
