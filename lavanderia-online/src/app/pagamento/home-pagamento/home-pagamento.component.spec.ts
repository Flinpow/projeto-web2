import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagamentoComponent } from './home-pagamento.component';

describe('HomePagamentoComponent', () => {
  let component: HomePagamentoComponent;
  let fixture: ComponentFixture<HomePagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePagamentoComponent]
    });
    fixture = TestBed.createComponent(HomePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
