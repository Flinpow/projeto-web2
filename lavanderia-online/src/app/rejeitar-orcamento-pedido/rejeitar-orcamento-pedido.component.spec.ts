import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejeitarOrcamentoPedidoComponent } from './rejeitar-orcamento-pedido.component';

describe('RejeitarOrcamentoPedidoComponent', () => {
  let component: RejeitarOrcamentoPedidoComponent;
  let fixture: ComponentFixture<RejeitarOrcamentoPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejeitarOrcamentoPedidoComponent]
    });
    fixture = TestBed.createComponent(RejeitarOrcamentoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
