import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacaoComponent } from './identificacao.component';

describe('IndentificacaoComponent', () => {
  let component: IdentificacaoComponent;
  let fixture: ComponentFixture<IdentificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
