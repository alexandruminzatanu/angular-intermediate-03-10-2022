import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeTitleComponent } from './joke-title.component';

describe('JokeTitleComponent', () => {
  let component: JokeTitleComponent;
  let fixture: ComponentFixture<JokeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
