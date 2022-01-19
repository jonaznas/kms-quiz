import { NgModule } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconAdjustments, IconHome } from 'angular-tabler-icons/icons';

const icons = {
  IconHome,
  IconAdjustments
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
