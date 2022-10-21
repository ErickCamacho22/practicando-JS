$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            resposive: true,
            pager: true
        });
    }

      //Post
    if(window.location.href.indexOf('index') > -1){
        var posts =[
            {
                title: 'Prueba de titulo 1',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque animi reiciendis sunt ex eos, nihil qui perspiciatis quaerat dolor dolorem ut illo praesentium ipsam voluptates rerum optio eligendi esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus ipsam maiores illum aperiam laborum modi doloribus ab voluptatum dignissimos assumenda minima, repellendus consectetur non. Dolorum error voluptates ratione repellat?'
            },
            {
                title: 'Prueba de titulo 2',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque animi reiciendis sunt ex eos, nihil qui perspiciatis quaerat dolor dolorem ut illo praesentium ipsam voluptates rerum optio eligendi esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus ipsam maiores illum aperiam laborum modi doloribus ab voluptatum dignissimos assumenda minima, repellendus consectetur non. Dolorum error voluptates ratione repellat?'
            },
            {
                title: 'Prueba de titulo 3',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque animi reiciendis sunt ex eos, nihil qui perspiciatis quaerat dolor dolorem ut illo praesentium ipsam voluptates rerum optio eligendi esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus ipsam maiores illum aperiam laborum modi doloribus ab voluptatum dignissimos assumenda minima, repellendus consectetur non. Dolorum error voluptates ratione repellat?'
            },
            {
                title: 'Prueba de titulo 4',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque animi reiciendis sunt ex eos, nihil qui perspiciatis quaerat dolor dolorem ut illo praesentium ipsam voluptates rerum optio eligendi esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus ipsam maiores illum aperiam laborum modi doloribus ab voluptatum dignissimos assumenda minima, repellendus consectetur non. Dolorum error voluptates ratione repellat?'
            },
            {
                title: 'Prueba de titulo 5',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque animi reiciendis sunt ex eos, nihil qui perspiciatis quaerat dolor dolorem ut illo praesentium ipsam voluptates rerum optio eligendi esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus ipsam maiores illum aperiam laborum modi doloribus ab voluptatum dignissimos assumenda minima, repellendus consectetur non. Dolorum error voluptates ratione repellat?'
            }        
        ];

        posts.forEach((item, index) => {
            var post =`
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
            `;
        $("#post").append(post);
        });
    }
    //Selector de temas
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    });

    //Scroll arriba de la web

    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });


    //Login Falso

    $('#login form').submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<div class='clearfix'></div><a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();


        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }
    
    //reloj

    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            
            $('#reloj').html(reloj); 
        }, 1000);
    }

    //validacion de form

    if(window.location.href.indexOf('contact') > -1){
        $.validate({
            lang: 'es'
        });
    }
   

});