import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainChatComponent } from './main-chat/main-chat.component';
import { MaterialModule } from '../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    HeaderComponent,
    MainChatComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent, 
    MainChatComponent
  ],
})
export class ContentModule {}
