import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SeerBitComponent } from './seer-bit.component';

describe('SeerBitComponent', () => {
  let component: SeerBitComponent;
  let fixture: ComponentFixture<SeerBitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeerBitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeerBitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
