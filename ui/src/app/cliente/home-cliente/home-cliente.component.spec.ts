import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClienteComponent } from './home-cliente.component';

describe('HomeClienteComponent', () => {
  let component: HomeClienteComponent;
  let fixture: ComponentFixture<HomeClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeClienteComponent]
    });
    fixture = TestBed.createComponent(HomeClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
