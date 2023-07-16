import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { CommentsListDataService } from '../comments-list-data/comments-list-data.service';

import { IGetCommentsQuery, IGetCommentsResponse } from 'src/app/types/api/comments-api.interface';

const DEFAULT_VALUE = {
  page: 1,
};

@Injectable()
export class CommentsListFormService {
  public readonly form = new FormGroup({
    page: new FormControl(1),
  });

  constructor(private commentsListDataService: CommentsListDataService) { }

  public fillForm(value: IGetCommentsQuery): void {
    this.form.patchValue(Object.assign({}, DEFAULT_VALUE, value));
  }

  public update(videoId: number): Observable<IGetCommentsResponse> {
    const formValue = this.form.getRawValue();
    return this.commentsListDataService.getVideoComments(videoId, formValue);
  }
}
