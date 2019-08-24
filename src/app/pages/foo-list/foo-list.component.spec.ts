import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooListComponent } from './foo-list.component';

describe('FooListComponent', () => {
  let component: FooListComponent;
  let fixture: ComponentFixture<FooListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
