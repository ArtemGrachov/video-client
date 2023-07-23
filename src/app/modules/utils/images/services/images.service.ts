import { Injectable } from '@angular/core';
import { compress } from 'jpegasus';

@Injectable()
export class ImagesService {
  public async compress(
    imageFile: File,
    maxWidth: number,
    maxHeight: number,
    quality: number = 0.75,
  ): Promise<File | Blob> {
    const result = await compress(imageFile, { maxWidth, maxHeight, quality });

    return result;
  }
}
