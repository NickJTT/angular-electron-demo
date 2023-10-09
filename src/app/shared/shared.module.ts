import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { StringInputComponent } from './string-input/string-input.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, StringInputComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, StringInputComponent]
})
export class SharedModule {}
