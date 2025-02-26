import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTestingComponent } from './rxjs-testing.component';

describe('RxjsTestingComponent', () => {
  let component: RxjsTestingComponent;
  let fixture: ComponentFixture<RxjsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
