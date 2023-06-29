import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { IsbnPipe } from './shared/isbn.pipe';
import { ConfirmDirective } from './shared/confirm.directive';
import { LoggedinOnlyDirective } from './shared/loggedin-only.directive';
import * as fromBook from './store/book.reducer';
import { BookEffects } from './store/book.effects';

@NgModule({
  declarations: [
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    IsbnPipe,
    ConfirmDirective,
    LoggedinOnlyDirective,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])],
})
export class BooksModule {}
