import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoPixComponent } from './pagamento-pix.component';

describe('PagamentoPixComponent', () => {
  let component: PagamentoPixComponent;
  let fixture: ComponentFixture<PagamentoPixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagamentoPixComponent]
    });
    fixture = TestBed.createComponent(PagamentoPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
