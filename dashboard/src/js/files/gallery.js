
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/

// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение базового набора функционала
import lightGallery from 'lightgallery';

/*
Плагины
lgAutoplay, lgComment, lgFullscreen, lgHash, lgMediumZoom, lgPager, lgRelativeCaption, lgRotate, lgShare, lgThumbnail, lgVideo, lgVimeoThumbnail, lgZoom
*/
import lgAutoplay from 'lightgallery/plugins/autoplay/lg-autoplay.min.js';
// import lgComment from 'lightgallery/plugins/comment/lg-comment.min.js';
import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.min.js';
// import lgHash from 'lightgallery/plugins/hash/lg-hash.min.js';
// import lgMediumZoom from 'lightgallery/plugins/mediumZoom/lg-medium-zoom.min.js';
// import lgPager from 'lightgallery/plugins/pager/lg-pager.min.js';
// import lgRelativeCaption from 'lightgallery/plugins/relativeCaption/lg-relative-caption.min.js';
// import lgRotate from 'lightgallery/plugins/rotate/lg-rotate.min.js';
// import lgShare from 'lightgallery/plugins/share/lg-share.min.js';
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js';
// import lgVideo from 'lightgallery/plugins/video/lg-video.min.js';
// import lgVimeoThumbnail from 'lightgallery/plugins/vimeoThumbnail/lg-vimeo-thumbnail.min.js';
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js';

/* Базовые стили */
// import 'lightgallery/scss/lightgallery.scss';
/* Стили дополнений */
// import 'lightgallery/scss/lg-autoplay.scss';
// import 'lightgallery/scss/lg-comments.scss';s
// import 'lightgallery/scss/lg-fullscreen.scss';
// import 'lightgallery/scss/lg-medium-zoom.scss';
// import 'lightgallery/scss/lg-pager.scss';
// import 'lightgallery/scss/lg-relative-caption.scss';
// import 'lightgallery/scss/lg-rotate.scss';
// import 'lightgallery/scss/lg-share.scss';
// import 'lightgallery/scss/lg-thumbnail.scss';
// import 'lightgallery/scss/lg-video.scss';
// import 'lightgallery/scss/lg-zoom.scss';

/* Все стили */
// import 'lightgallery/scss/lightgallery-bundle.scss';

// Запуск
const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
	let galleyItems = [];
	galleries.forEach(gallery => {
		galleyItems.push({
			gallery,
			galleryClass: lightGallery(gallery, {
				plugins: [lgAutoplay, lgFullscreen, lgThumbnail, lgZoom],
				licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
				speed: 500,
				allowMediaOverlap: true,
				toggleThumb: true,
				thumbWidth: 80,
				thumbHeight: "80px",
			})
		})
	});
	// Добавляем в объект модулей
	flsModules.gallery = galleyItems;
}