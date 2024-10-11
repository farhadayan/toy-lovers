import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const ICONS = [
  {
    name: 'arrow-left',
    url: 'images/icons/arrow-left.svg',
  },
  {
    name: 'arrow-right',
    url: 'images/icons/arrow-right.svg',
  },
  {
    name: 'arrow-down',
    url: 'images/icons/arrow-down.svg',
  },
  {
    name: 'plus',
    url: 'images/icons/plus.svg',
  },
  {
    name: 'dots',
    url: 'images/icons/dots.svg',
  },
  {
    name: 'sort-arrows',
    url: 'images/icons/sort-arrows.svg',
  },
  {
    name: 'setting',
    url: 'images/icons/setting.svg',
  },

  // Native library icons
  {
    name: 'add-new',
    url: 'icons/add-new.svg',
  },
  {
    name: 'add-product-variant',
    url: 'icons/add-product-variant.svg',
  },
  {
    name: 'address',
    url: 'icons/address.svg',
  },
  {
    name: 'alert',
    url: 'icons/alert.svg',
  },
  {
    name: 'approve',
    url: 'icons/approve.svg',
  },
  {
    name: 'archive',
    url: 'icons/archive.svg',
  },
  {
    name: 'attach',
    url: 'icons/attach.svg',
  },
  {
    name: 'cancel',
    url: 'icons/cancel.svg',
  },
  {
    name: 'close',
    url: 'icons/close.svg',
  },
  {
    name: 'color-palet',
    url: 'icons/color-palet.svg',
  },
  {
    name: 'cross',
    url: 'icons/cross.svg',
  },
  {
    name: 'date',
    url: 'icons/date.svg',
  },

  {
    name: 'drag',
    url: 'icons/drag.svg',
  },

  {
    name: 'edit',
    url: 'icons/edit.svg',
  },
  {
    name: 'exclamation-mark',
    url: 'icons/exclamation-mark.svg',
  },
  {
    name: 'extra-element',
    url: 'icons/extra-element.svg',
  },
  {
    name: 'filter',
    url: 'icons/filter.svg',
  },

  {
    name: 'help',
    url: 'icons/help.svg',
  },
  {
    name: 'item',
    url: 'icons/item.svg',
  },
  {
    name: 'list',
    url: 'icons/list.svg',
  },

  {
    name: 'no-preview',
    url: 'icons/no-preview.svg',
  },
  {
    name: 'notifications',
    url: 'icons/notifications.svg',
  },

  {
    name: 'user-interface',
    url: 'icons/user-interface.svg',
  },

  {
    name: 'pdf',
    url: 'icons/pdf.svg',
  },
  {
    name: 'photo',
    url: 'icons/photo.svg',
  },
  {
    name: 'preview',
    url: 'icons/preview.svg',
  },

  {
    name: 'thickness',
    url: 'icons/thickness.svg',
  },

  {
    name: 'upload',
    url: 'icons/upload.svg',
  },
  {
    name: 'users',
    url: 'icons/users.svg',
  },
  {
    name: 'watch',
    url: 'icons/watch.svg',
  },
  {
    name: 'zoom-in',
    url: 'icons/zoom-in.svg',
  },
  {
    name: 'zoom-out',
    url: 'icons/zoom-out.svg',
  },
];

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  init() {
    ICONS.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        `${icon.name}`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/${icon.url}`)
      );
    });
  }
}
