import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFriendComponent } from './list-friend.component';

describe('ListFriendComponent', () => {
  let component: ListFriendComponent;
  let fixture: ComponentFixture<ListFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFriendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
