import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { TabsComponent } from './main-panel/tabs/tabs.component';
import { FiltersComponent } from './main-panel/filters/filters.component';
import { SelectComponent } from './main-panel/filters/select/select.component';
import { FooterComponent } from './main-panel/filters/footer/footer.component';
import { ListComponent } from './main-panel/list/list.component';
import { ListItemComponent } from './main-panel/list/list-item/list-item.component';
import { ContextModalComponent } from './main-panel/list/context-modal/context-modal.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StoreModule } from '@ngrx/store'
import { SideBarHeaderComponent } from './side-bar/side-bar-header/side-bar-header.component';
import { SideBarBodyComponent } from './side-bar/side-bar-body/side-bar-body.component';
import { EventComponent } from './side-bar/side-bar-body/event/event.component'
import { ClickStopPropagation } from './directives/StopPropagation';
import { DatePickerComponent } from './date-picker/date-picker.component'
import { FormsModule } from '@angular/forms';
import { TrainerListComponent } from './side-bar/side-bar-body/event/trainer-list/trainer-list.component'
import { trainersReducer } from './store/reducers/trainers.reducer'
import { sideBarReducer } from './store/reducers/toggle-side-bar.reducer';
import { GroupComponent } from './main-panel/group/group.component';
import { IndividualComponent } from './main-panel/individual/individual.component';
import { SideBarParticipantsComponent } from './side-bar/side-bar-participants/side-bar-participants.component';
import { AvailableParticipantsComponent } from './side-bar/side-bar-participants/available-participants/available-participants.component';
import { DropDownComponent } from './main-panel/filters/select/drop-down/drop-down.component';
import { UserComponent } from './side-bar/side-bar-participants/user/user.component';
import { usersReducer } from './store/reducers/users.reducer';
import { CurrentParticipantsComponent } from './side-bar/side-bar-participants/current-participants/current-participants.component'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { eventsReducer } from './store/reducers/events.reducer'
import { editableEventReducer } from './store/reducers/editableEvents.reducer';
import { EditFilterComponent } from './main-panel/edit-filter/edit-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPanelComponent,
    TabsComponent,
    FiltersComponent,
    SelectComponent,
    FooterComponent,
    ListComponent,
    ListItemComponent,
    ContextModalComponent,
    SideBarComponent,
    SideBarHeaderComponent,
    SideBarBodyComponent,
    EventComponent,
    ClickStopPropagation,
    DatePickerComponent,
    TrainerListComponent,
    GroupComponent,
    IndividualComponent,
    SideBarParticipantsComponent,
    AvailableParticipantsComponent,
    DropDownComponent,
    UserComponent,
    CurrentParticipantsComponent,
    EditFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      sideBar: sideBarReducer,
      trainers: trainersReducer,
      users: usersReducer,
      events: eventsReducer,
      editableEvent: editableEventReducer
    }),
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
