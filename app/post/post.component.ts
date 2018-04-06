/**
 * Created by namita on 7/15/16.
 */
import {Component}  from '@angular/core';
import {PostListComponent} from './post-list.component';
import {PostService} from './post.service';

@Component({
    selector: 'post-parent',
    template: `<post-list></post-list>`,
    directives: <any>[PostListComponent],
    providers: <any>[PostService]
})
export class PostComponent {
}
