import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterOptionsComponent } from './character-options.component';

describe('CharacterOptionsComponent', () => {
  let component: CharacterOptionsComponent;
  let fixture: ComponentFixture<CharacterOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
