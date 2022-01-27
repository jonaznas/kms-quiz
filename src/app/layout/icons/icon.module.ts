import { NgModule } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconAdjustments, IconCamera, IconHome, IconTrash } from 'angular-tabler-icons/icons';

const icons = {
  IconHome,
  IconAdjustments,
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
