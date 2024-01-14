import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-eclipse-ide',
  templateUrl: './eclipse-ide.component.html',
  styleUrls: ['./eclipse-ide.component.css']
})
export class EclipseIdeComponent implements OnInit{
  url: string | undefined;

  constructor(private urlService : UrlService) {}

  ngOnInit(): void {
    this.urlService.getJsonData().subscribe(data => {
      this.url = data.urls.ide.eclipse;
    });
  }
}
