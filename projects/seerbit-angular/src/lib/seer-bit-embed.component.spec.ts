import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeerBitEmbedComponent } from './seer-bit-embed.component';

describe('SeerBitEmbedComponent', () => {
  let component: SeerBitEmbedComponent;
  let fixture: ComponentFixture<SeerBitEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeerBitEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeerBitEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
