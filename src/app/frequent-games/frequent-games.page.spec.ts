import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrequentGamesPage } from './frequent-games.page';

describe('FrequentGamesPage', () => {
  let component: FrequentGamesPage;
  let fixture: ComponentFixture<FrequentGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentGamesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrequentGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
