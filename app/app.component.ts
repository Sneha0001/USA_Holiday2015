
import {Component} from '@angular/core';
import {PostComponent} from './post/post.component'
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `<post-parent></post-parent>`,
    directives: <any>[PostComponent]
})

export class AppComponent {
}