$(document).ready(function(){ 
    console.log('7122');
	$(window).resize(function() {
		if($(window).width()<=576) {
			$('#navbar').removeClass('alt');
		}
		else if($(window).width()>576) {
			$(window).on('scroll', function() {
				if($(window).scrollTop()) {
					$('#navbar').removeClass('alt');
				}
				else {
					$('#navbar').addClass('alt');
				}
			})
		}
	});
    
    fetch("/courses").then(function(response) {
        return response.json();
    }).catch(function(err){
        throw err;
    }).then(function(json){
        // console.log(json);
        json.courses.forEach(element => {
            console.log(element)
            $("#lesson_lists").append(
                `<div class="lesson-card text-left">
                    <i class="${element.iconCLASS}"></i>
                    <div class="lesson-card-text">
                        <h5>${element.title}</h5>
                        <p>上課時間: ${element.time}</p>
                    </div>
                    
                    <button type="button" class="btn btn-outline-info lesson-btn" data-toggle="modal" data-target="#lesson${element.id}">了解更多</button>
        
                    <!-- modal -->
                    <div class="modal fade" id="lesson${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-dark" id="exampleModalCenterTitle">${element.title}</h5>
                            </div>
                            <div class="modal-body">
                                <img src="${element.img}" class="modal-img">
                                <p class="text-dark pt-3">${element.description}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關 閉</button>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>`
            )
        });
    });
});
