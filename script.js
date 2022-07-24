$(document).ready(() => {
    $('.click').click(()=>{
        if($('#hide-sec').is(":visible")){
            alert("Great! A button was clicked!");
        }
        else{
            $('#hide-sec').show();
        }
    })
    $('.hide').click(()=>{
        $('#click-sec').hide();
        $('#hide-sec').hide();
    })
    $('.show').click(()=>{
        $('#click-sec').show();
        $('#hide-sec').show();
    })
    $('.toggle').click(()=>{
        $('#toggle-sec p').toggle();
    })
    $('.sldown').click(()=>{
        $('#slide-down-sec h2').slideDown();
    })
    $('.slup').click(()=>{
        $('#slide-down-sec h2').slideUp();
    })
    $('.sltog').click(()=>{
        $('#slide-tog-sec p').slideToggle();
    })
    $('.fade-in').click(()=>{
        $('#fade-in-sec span').fadeIn();
    })
    $('.fade-out').click(()=>{
        $('#fade-in-sec span').fadeOut();
    })
    $('.add-class').click(()=>{
        $('#add-class-sec p').addClass('bold-orange');
    })
    $('.before').click(()=>{
        $('#before-sec p').before("<p>I am the first paragraph</p>");
    })
    $('.after').click(()=>{
        $('#after-sec p').after("<p>I am the next paragraph</p>");
    })
    $('.append').click(()=>{
        $('#append-sec p').append("I'm appended!");
    })
    $('.html').click(()=>{
        var htmlString = $('#html-sec').html();
        $('#html-sec').append(htmlString);
    })
    $('.attr').click(()=>{
        $('input').change(()=>{
            $('#attr-sec p').append("checkbox is: "+ $("input").attr("checked") + " " + $("input").prop("checked"));
        })
        .change();
    })
    $('.val').click(()=>{
       const display = ()=>{
            var selected = $('#selection').val();

            $('#val-sec').append('Selected is: ' + selected);
        }
        $('#selection').change(display);
        display();
    })
    $('.text').click(()=>{
       var str = $('#text-sec').text();
       $('#text-sec p').after(str);
    })
});