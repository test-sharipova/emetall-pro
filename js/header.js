const menu = document.querySelector('.menu__catalog'),
    menuItem = document.querySelectorAll('.menu__link'),
    menuClose = document.querySelector('.menu__catalog__close'),
    contentClose = document.querySelectorAll('.menu__catalog__content__close'),
    menuContent = document.querySelectorAll('.menu__catalog__content'),
    hamburger = document.querySelector('.hamburger');
    mainMenu = document.querySelector('.main-menu__mobile');
    mainMenuCatalog = document.querySelector('.main-menu__mobile__item-catalog');
    body = document.querySelector('.body__wrap');
    header = document.querySelector('header');

    mainMenuCatalog.addEventListener('click', () => {
        
        menu.classList.toggle('menu__catalog_hide');
    });

    hamburger.addEventListener('click', () => {
      mainMenu.classList.toggle('main-menu__mobile-active');
      hamburger.classList.toggle('hamburger_active');
      body.classList.toggle('overflow');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.toggle('menu__catalog_hide');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        });
    });
    for (let i = 0; i < contentClose.length; i++) {
        contentClose[i].addEventListener('click', function() {
            menuContent[i].classList.remove('menu__catalog__content_active');
        });
      }
    //показать каталог меню
    $('.showCatalog').on('click', function(){
        $('.menu__catalog').toggleClass('menu__catalog_hide');
        $('.btn__burger').toggleClass('btn__burger_active');
        $('.menu__catalog__overlay').toggleClass('menu__catalog__overlay_active');
        // $('body').toggleClass('overflow');
    });
    

    $(function() {
  
        $('ul.menu__catalog__scroll').on('mouseenter', 'li:not(.menu__catalog__link_active)', function() {
          $(this)
            .addClass('menu__catalog__link_active').siblings().removeClass('menu__catalog__link_active')
            .closest('div.menu__catalog__wrap').find('div.menu__catalog__content').removeClass('menu__catalog__content_active').eq($(this).index()).addClass('menu__catalog__content_active');
        });
        
      });

      
     
    
//overlay
function consoleBG() {
    if ($(window).scrollTop() == 160) {
      $('.menu__catalog__overlay').css({
        'top' : '0px',
        
      });
      
    } 
    
  }
  consoleBG();

//dropdown menu - сужение меню при изменении ширины экрана
function responseMenu(){
	$('ul.dropdown-menu li.item').appendTo('ul.menu');
	var items = $('ul.menu li.item');
	var max_width = $('ul.menu').width() - $('ul.menu li.dd_menu').outerWidth();
	var width = 0;
	var hide_from = 0;

	items.css({'width':'auto'});

	items.each(function(index){
		if (width + $(this).outerWidth() > max_width)
		{
			return false;
		}
		else
		{
			hide_from = index;
			width += $(this).outerWidth();
		}
	});
	if (hide_from < items.length - 1) {
		items.eq(hide_from).nextAll('li.item').appendTo('ul.dropdown-menu');
		// items.css({'width':(max_width / (hide_from)) + 'px'});
        items.css({'width':'fit-content'});
		$('ul.menu li.dd_menu').show();
	}
	else
	{
		$('ul.menu li.dd_menu').hide();
	}
}



	$('.top_menu').on('click', '.dropdown-toggle', function () {
		$('.dropdown-menu').toggle();
	});

	$(window).on('resize', function(){
		responseMenu();
	}).trigger('resize');
    $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $( ".dropdown-menu" ); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            $('.dropdown-menu').hide(); // скрываем его
        }
    
    
        
    });