import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoHomeComponent } from './pagamento-home.component';

describe('PagamentoHomeComponent', () => {
    let component: PagamentoHomeComponent;
    let fixture: ComponentFixture<PagamentoHomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PagamentoHomeComponent]
        });
        fixture = TestBed.createComponent(PagamentoHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
