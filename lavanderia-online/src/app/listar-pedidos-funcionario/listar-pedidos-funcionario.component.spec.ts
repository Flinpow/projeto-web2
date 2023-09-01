import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidosFuncionarioComponent } from './listar-pedidos-funcionario.component';

describe('ListarPedidosFuncionarioComponent', () => {
  let component: ListarPedidosFuncionarioComponent;
  let fixture: ComponentFixture<ListarPedidosFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPedidosFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ListarPedidosFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
