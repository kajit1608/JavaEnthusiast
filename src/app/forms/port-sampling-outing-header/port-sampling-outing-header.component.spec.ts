import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortSamplingOutingHeaderComponent } from './port-sampling-outing-header.component';

describe('PortSamplingOutingHeaderComponent', () => {
  let component: PortSamplingOutingHeaderComponent;
  let fixture: ComponentFixture<PortSamplingOutingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortSamplingOutingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortSamplingOutingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
