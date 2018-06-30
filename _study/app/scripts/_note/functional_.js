Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        subArray.forEach(function(ele) {
            results.push(ele);
        })
    });
    return results;
};
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
    map(function(item) {
        return projectionFunctionThatReturnsArray(item);
    }).
    concatAll();
};
Array.zip = function(left, right, combinerFunction) {
    var counter,
        results = [];
    for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
        results.push(combinerFunction(left[counter], right[counter]));
    }
    return results;
};

$(function() {
    // console.log(test());
})


//mapping multiple array by id
var test3 = function() {
    var lists = [{
            "id": 5434364,
            "name": "New Releases"
        }, {
            "id": 65456475,
            name: "Thrillers"
        }],
        videos = [{
            "listId": 5434364,
            "id": 65432445,
            "title": "The Chamber"
        }, {
            "listId": 5434364,
            "id": 675465,
            "title": "Fracture"
        }, {
            "listId": 65456475,
            "id": 70111470,
            "title": "Die Hard"
        }, {
            "listId": 65456475,
            "id": 654356453,
            "title": "Bad Boys"
        }],
        boxarts = [{
            videoId: 65432445,
            width: 130,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
        }, {
            videoId: 65432445,
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
        }, {
            videoId: 675465,
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
        }, {
            videoId: 675465,
            width: 120,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
        }, {
            videoId: 675465,
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
        }, {
            videoId: 70111470,
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
        }, {
            videoId: 70111470,
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
        }, {
            videoId: 654356453,
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
        }, {
            videoId: 654356453,
            width: 140,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
        }],
        bookmarks = [{
            videoId: 65432445,
            time: 32432
        }, {
            videoId: 675465,
            time: 3534543
        }, {
            videoId: 70111470,
            time: 645243
        }, {
            videoId: 654356453,
            time: 984934
        }];

    return lists.map(function(list) {
        return {
            name: list.name,
            videos: videos.
            filter(function(video) {
                return video.listId === list.id;
            }).
            concatMap(function(video) {
                return Array.zip(
                    bookmarks.filter(function(bookmark) {
                        return bookmark.videoId === video.id;
                    }),
                    boxarts.filter(function(boxart) {
                        return boxart.videoId === video.id;
                    }).reduce(function(acc, curr) {
                        return acc.width * acc.height < curr.width * curr.height ? acc : curr;
                    }),
                    function(bookmark, boxart) {
                        return {
                            id: video.id,
                            title: video.title,
                            time: bookmark.time,
                            boxart: boxart.url
                        };
                    });
            })
        };
    });
    // return lists.map(function(list) {
    //     return {
    //         name: list.name,
    //         videos: videos.filter(function(video) {
    //             return video.listId === list.id;
    //         }).map(function(video) {
    //             return {
    //                 id: video.id,
    //                 title: video.title,
    //                 time: bookmarks.filter(function(bookmark) {
    //                     return bookmark.videoId === video.id;
    //                 })[0].time,
    //                 boxart: boxarts.filter(function(boxarts) {
    //                     return boxarts.videoId === video.id;
    //                 }).reduce(function(small, boxart) {
    //                     if (small.width * small.height < boxart.width * boxart.height) {
    //                         return small;
    //                     } else {
    //                         return boxart;
    //                     }
    //                 })[0].url
    //             }
    //         })
    //     }
    // })
}

//mapping two array by id
var test2 = function() {
    var lists = [{
            "id": 5434364,
            "name": "New Releases"
        }, {
            "id": 65456475,
            "name": "Thrillers"
        }],
        videos = [{
            "listId": 5434364,
            "id": 65432445,
            "title": "The Chamber"
        }, {
            "listId": 5434364,
            "id": 675465,
            "title": "Fracture"
        }, {
            "listId": 65456475,
            "id": 70111470,
            "title": "Die Hard"
        }, {
            "listId": 65456475,
            "id": 654356453,
            "title": "Bad Boys"
        }];

    return lists.map(function(list) {
        return {
            name: list.name,
            videos: videos.filter(function(video) {
                return video.listId === list.id;
            }).map(function(video) {
                return {
                    id: video.id,
                    title: video.title
                }
            })
        }
    })
}

//obj array with two sub array, filter and combine array content
var test1 = function() {
    var movieLists = [{
        name: "New Releases",
        videos: [{
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [{
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
            }, {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
            }],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "interestingMoments": [{
                type: "End",
                time: 213432
            }, {
                type: "Start",
                time: 64534
            }, {
                type: "Middle",
                time: 323133
            }]
        }, {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [{
                    width: 200,
                    height: 200,
                    url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
                }, {
                    width: 140,
                    height: 200,
                    url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
                }

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "interestingMoments": [{
                type: "End",
                time: 54654754
            }, {
                type: "Start",
                time: 43524243
            }, {
                type: "Middle",
                time: 6575665
            }]
        }]
    }, {
        name: "Instant Queue",
        videos: [{
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [{
                width: 130,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
            }, {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
            }],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "interestingMoments": [{
                type: "End",
                time: 132423
            }, {
                type: "Start",
                time: 54637425
            }, {
                type: "Middle",
                time: 3452343
            }]
        }, {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [{
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
            }, {
                width: 120,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
            }, {
                width: 300,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
            }],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "interestingMoments": [{
                type: "End",
                time: 45632456
            }, {
                type: "Start",
                time: 234534
            }, {
                type: "Middle",
                time: 3453434
            }]
        }]
    }];

    return movieLists.
    concatMap(function(movieList) {
        return movieList.videos.map(function(video) {
            return Array.zip(
                middleMoment = video.interestingMoments.filter(function(moment) {
                    return moment.type == "Middle";
                }),
                smallest = video.boxarts.reduce(function(small, boxart) {
                    if (small.width * small.height < boxart.width * boxart.height) {
                        return small;
                    } else {
                        return boxart;
                    };
                }),
                function(interestingMoment, boxart) {
                    return {
                        id: video.id,
                        title: video.title,
                        time: interestingMoment.time,
                        url: boxart.url
                    }
                }
            )
        })
    });
}