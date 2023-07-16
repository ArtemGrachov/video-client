import { Injectable } from '@angular/core';
import { SimpleModalService } from '@looorent/ngx-simple-modal';

import { ViewsCommentEditComponent } from '../views-comment-edit.component';

import { IComment } from 'src/app/types/models/comment.interface';

@Injectable()
export class ViewCommentEditModalService {
  constructor(private simpleModalService: SimpleModalService) { }

  public showModal(comment: IComment): void {
    this
      .simpleModalService
      .addModal(
        ViewsCommentEditComponent,
        {
          comment
        },
        {
          closeOnEscape: true,
          closeOnClickOutside: true,
        }
      );
  }
}
