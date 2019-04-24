import { InjectionToken } from '@angular/core';

export class InformationConstant {
  public static HEADING_1 = 'heading-1';
  public static PARAGRAPH = 'paragraph';
}

export const CONTENT_MAPPINGS = new InjectionToken<any>(`CONTENT_MAPPINGS`);