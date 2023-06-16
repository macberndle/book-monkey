// import { of } from 'rxjs';
// import { AuthService } from './auth.service';
// import { LoggedinOnlyDirective } from './loggedin-only.directive';
// import { TemplateRef, ViewContainerRef } from '@angular/core';
// import { TestBed } from '@angular/core/testing';

// fdescribe('Directive: LoggedinOnlyDirective', () => {
//   let directive: LoggedinOnlyDirective;
//   const mockAuthService: Partial<AuthService> = {
//     isAuthenticated$: of(true)
//   }
//   const mockTemplateRef: Partial<TemplateRef<unknown>> = {}

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         { provide: AuthService, useValue: mockAuthService },
//         { provide: TemplateRef<unknown>, useValue: mockTemplateRef },
//         ViewContainerRef
//       ]
//     });
//     directive = TestBed.createComponent(LoggedinOnlyDirective);
//   });

//   it('should create an instance', () => {
//     expect(directive).toBeTruthy();
//   });
// });
