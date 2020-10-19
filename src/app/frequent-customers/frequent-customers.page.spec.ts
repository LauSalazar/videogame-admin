import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrequentCustomersPage } from './frequent-customers.page';

describe('FrequentCustomersPage', () => {
  let component: FrequentCustomersPage;
  let fixture: ComponentFixture<FrequentCustomersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentCustomersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrequentCustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
