import { NgModule } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconReport, IconCamera, IconHome, IconTrash } from 'angular-tabler-icons/icons';

const icons = {
  IconHome,
  IconReport,
  IconCamera,
  IconTrash
};

@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconModule {
}
