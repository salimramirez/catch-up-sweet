import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-tool-bar',
  imports: [
    MatToolbarModule,
    LanguageSwitcherComponent
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {

  constructor() {}

}
