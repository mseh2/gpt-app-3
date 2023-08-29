import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainChatComponent } from '../content/main-chat/main-chat.component';

const routes: Routes = [
  { path: 'main', component : MainChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
