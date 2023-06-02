import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/book';
import { atLeastOneValue, isbnFormat } from '../shared/validators';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnChanges {
  @Input() book?: Book;
  @Output() submitBook = new EventEmitter<Book>();

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    subtitle: new FormControl('', {nonNullable: true}),
    isbn: new FormControl('', {
      nonNullable:true,
      validators: [
        Validators.required,
        isbnFormat
      ]
    }),
    description: new FormControl('', {nonNullable: true}),
    published: new FormControl('', {nonNullable: true}),
    thumbnailUrl: new FormControl('', {nonNullable: true}),
    authors: this.buildAuthorsArray([''])
  })

  ngOnChanges(): void {
    if(this.book) {
      this.setFormValues(this.book);
      this.setEditMode(true);
    } else {
      this.setEditMode(false);
    }
  }

  get authors() { return this.form.controls.authors; }

  addAuthorControl() {
    this.authors.push(
      new FormControl('', { nonNullable: true})
    )
  }

  submitForm() {
    const formValue = this.form.getRawValue();
    const authors = formValue.authors.filter(author => !!author);
    const newBook: Book = {
      ...formValue,
      authors
    }
    this.submitBook.emit(newBook);
  }

  private buildAuthorsArray(authors: string[]) {
    return new FormArray(
      authors.map(v => new FormControl(v, {nonNullable:true})),
      atLeastOneValue
    )
  }

  private setEditMode(isEditing: boolean): void {
    const isbnControl = this.form.controls.isbn;

    if(isEditing){
      isbnControl.disable();
    } else {
      isbnControl.enable();
    }
  }

  private setFormValues(book: Book) {
    this.form.patchValue(book);
    this.form.setControl(
      'authors',
      this.buildAuthorsArray(book.authors)
    )
  }
}
