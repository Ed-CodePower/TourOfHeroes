import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule ],
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the hero', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const app = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as hero 'Dr Nice'`, () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const app = fixture.componentInstance;
    expect(app.heroes[0].name).toEqual('Dr Nice');
  });

  it('should render h2', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('My Heroes');
  });
});