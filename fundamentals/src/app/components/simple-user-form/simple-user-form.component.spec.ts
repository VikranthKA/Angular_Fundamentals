import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUserFormComponent } from './simple-user-form.component';

describe('SimpleUserFormComponent', () => {
  let component: SimpleUserFormComponent;
  let fixture: ComponentFixture<SimpleUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleUserFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
