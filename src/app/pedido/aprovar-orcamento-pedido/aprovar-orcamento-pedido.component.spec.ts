import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarOrcamentoPedidoComponent } from './aprovar-orcamento-pedido.component';

describe('AprovarOrcamentoPedidoComponent', () => {
  let component: AprovarOrcamentoPedidoComponent;
  let fixture: ComponentFixture<AprovarOrcamentoPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprovarOrcamentoPedidoComponent]
    });
    fixture = TestBed.createComponent(AprovarOrcamentoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
