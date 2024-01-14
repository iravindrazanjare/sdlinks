import { Component } from '@angular/core';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-intelli-j',
  templateUrl: './intelli-j.component.html',
  styleUrls: ['./intelli-j.component.css']
})
export class IntelliJComponent {
  url: string | undefined;

  constructor(private urlService : UrlService) {}

  ngOnInit(): void {
    this.urlService.getJsonData().subscribe(data => {
      this.url = data.urls.ide.intellij;
    });
  }
}
