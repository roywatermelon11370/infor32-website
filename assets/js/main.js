$(document).ready(function () {

    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        $('#header').removeClass('bg-fixed');
    }

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('#navbar').removeClass('alt');
        }
        else {
            $('#navbar').addClass('alt');
        }
    })

    $('#BackToTop').click(function () {
        let target = $(this).attr('href');
        let position = $(target).offset().top;
        $('html,body').animate({
            scrollTop: position
        }, 500, 'swing');
    });

    try {
        fetch("/courses", { method: "get", mode: "cors" }).then(function (response) {
            return response.json();
        }).catch(function (err) {
            throw err;
        }).then(function (json) {
            json.courses.forEach(element => {
                console.log(element)
                $("#lesson_lists").append(
                    `<div class="lesson-card bg-secondary text-left">
                        <i class="${element.iconCLASS} ${element.colorCLASS}"></i>
                        <div class="lesson-card-text">
                            <h5>${element.title}</h5>
                            <p>上課時間：${element.time}</p>
                        </div>
                        <button type="button" class="btn btn-outline ${element.colorCLASS} lesson-btn" data-toggle="modal"
                            data-target="#lesson${element.id}">了解更多</button>
                    </div>`
                );
                $("#modals").append(
                    `<div class="modal fade" id="lesson${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <!-- 視窗標題 -->
                        <h5 class="modal-title text-dark" id="">${element.title}</h5>
                        </div>
                        <div class="modal-body">
                        <!-- 視窗內容 -->
                        <img src="${element.img}" alt="${element.title}" class="modal-img">
                        <p class="text-dark pt-3">${element.description}</p>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">關 閉</button>
                        </div>
                    </div>
                    </div>`
                )
            });
        });
    } catch (e) {
        console.log(e);
        var course = {
            "title": "規劃中",
            "iconCLASS": "mdi mdi-flag-outline icon text-center text-info",
            "time": "待公告",
            "img": "",
            "colorCLASS": "text-info",
            "id": "0",
            "description": "敬請期帶"
        }
        $("#lesson_lists").append(
            `<div class="lesson-card bg-secondary text-left">
                    <i class="${course.iconCLASS} ${course.colorCLASS}"></i>
                    <div class="lesson-card-text">
                        <h5>${course.title}</h5>
                        <p>上課時間：${course.time}</p>
                    </div>
                    <button type="button" class="btn btn-outline-info lesson-btn" data-toggle="modal"
                        data-target="#lesson${course.id}">了解更多</button>
                </div>`
        );
        $("#modals").append(
            `<div class="modal fade" id="lesson${course.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <!-- 視窗標題 -->
                    <h5 class="modal-title text-dark" id="">${course.title}</h5>
                    </div>
                    <div class="modal-body">
                    <!-- 視窗內容 -->
                    <img src="${course.img}" alt="${course.title}" class="modal-img">
                    <p class="text-dark pt-3">${course.description}</p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">關 閉</button>
                    </div>
                </div>
                </div>`
        )
    }
});
