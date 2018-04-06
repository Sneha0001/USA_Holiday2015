
import { Component } from '@angular/core';
import { PostService } from './post.service';
import { Post, holidayCollection } from './post';
import { Json } from '@angular/core/src/facade/lang';

@Component({
    selector: 'post-list',
    templateUrl: './app/post/holidayList.component.html'



})

export class PostListComponent {
    constructor(private _postDataService: PostService) {
        //should be moved to ngOnInit lifecycle hook
        this.getPosts();

    }

    AssignValue(dataArray) {
        this.holidays = dataArray;
    }

    public holidays: Post[] = [];
    getPosts() {

        var errorMessage: any = '';
        this._postDataService.getData()
            .subscribe(

                function (post) {
                    var dataArray: Post[] = new Array;
                    for (var k in post) {
                        for (var m in post[k]) {

                            var r=post[k][m];
                            dataArray.push(r);
                        }
                     

                    }
                    localStorage.setItem("holidayList", JSON.stringify(dataArray));
                },
                function (error) {
                    this.errorMessage = error;
                }
            );

        this.holidays = JSON.parse(localStorage.getItem("holidayList"));
        console.log(this.holidays);


    }
}