import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentificacaoComponent } from './indentificacao.component';

describe('IndentificacaoComponent', () => {
  let component: IndentificacaoComponent;
  let fixture: ComponentFixture<IndentificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
