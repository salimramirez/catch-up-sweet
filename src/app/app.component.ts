import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToolBarComponent } from './public/components/tool-bar/tool-bar.component';
import { University } from './universities/model/university.entity';
import { UniversityListComponent } from './universities/components/university-list/university-list.component';
import { HipolabsApiService } from './universities/services/hipolabs-api.service';
import {FooterContentComponent} from './public/components/footer-content/footer-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ToolBarComponent,
    UniversityListComponent,
    FooterContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  universities: University[] = [];

  title = 'test-pc-v3';
  constructor(private translate: TranslateService, private hipolabsService: HipolabsApiService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.hipolabsService.getUniversities().subscribe({
      next: data => {
        console.log('Datos de universidades:', data); // <-- agrega este log
        this.universities = data;
      },
      error: (error) => {
        console.error('Error getting universities:', error);
      }
    });
  }
}
