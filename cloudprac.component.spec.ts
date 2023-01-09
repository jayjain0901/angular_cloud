import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudpracComponent } from './cloudprac.component';

describe('CloudpracComponent', () => {
  let component: CloudpracComponent;
  let fixture: ComponentFixture<CloudpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudpracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
