import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasListagemComponent } from './contas-listagem.component';

describe('ContasListagemComponent', () => {
  let component: ContasListagemComponent;
  let fixture: ComponentFixture<ContasListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
