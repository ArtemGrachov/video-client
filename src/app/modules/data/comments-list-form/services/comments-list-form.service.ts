import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { CommentsListDataService } from '../../comments-list-data/services/comments-list-data.service';

import { IGetCommentsQuery, IGetCommentsResponse } from 'src/app/types/api/comments-api.interface';

@Injectable()
export class CommentsListFormService {
  public readonly form = new FormGroup({
    page: new FormControl(1),
  });

  constructor(private commentsListDataService: CommentsListDataService) { }

  public setValue(value: IGetCommentsQuery): void {
    this.form.patchValue(value);
  }

  public update(videoId: number): Observable<IGetCommentsResponse> {
    const formValue = this.form.getRawValue();
    return this.commentsListDataService.getVideoComments(videoId, formValue);
  }
}
