import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public readonly videoAcceptableExt = [
    '3g2',
    '3gp',
    'avi',
    'flv',
    'm3u8',
    'ts',
    'm2ts',
    'mts',
    'mov',
    'mkv',
    'mp4',
    'mpeg',
    'mpd',
    'mxf',
    'ogv',
    'webm',
    'wmv',
  ];

  public readonly imageAcceptableExt = [
    'gif',
    'jpg',
    'jpe',
    'jpeg',
    'png',
  ];

  public get videoInputAcceptAttr(): string {
    return this.videoAcceptableExt.map(ext => `video/${ext}`).join(',');
  }

  public get imageInputAcceptAttr(): string {
    return this.videoAcceptableExt.map(ext => `video/${ext}`).join(',');
  }
}
