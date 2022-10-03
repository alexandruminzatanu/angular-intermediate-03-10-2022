import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCategoryListComponent } from './joke-category-list.component';

describe('JokeCategoryListComponent', () => {
  let component: JokeCategoryListComponent;
  let fixture: ComponentFixture<JokeCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeCategoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
