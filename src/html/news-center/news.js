// 切换新闻类型
'use strict';

$(document).on('click', '#news-category li', function () {
  var $this = $(this);

  $this.addClass('active').siblings('.active').removeClass('active');
  $('#news').find('.new-container.active').removeClass('active').end().find('.new-container:eq(' + $this.index() + ')').addClass('active');
});

$('#news-category li.active').click();
// 切换新闻类型 结束

// 新闻切换
(function ($) {
  $(document).on('click', '#news .news-container', function () {

    // 找到当前新闻容器是第几个新闻
    var $parentCol4 = $(this).parents('.col-sm-4'),
        $row = $parentCol4.parent('.row'),
        // 多个新闻类型有不同的 row 和 collection
    $col4Collection = $row.find('.col-sm-4'),
        $col12Collection = $row.find('.col-sm-12'),
        index = $col4Collection.index($parentCol4);

    // 清除已经 active 的新闻容器
    $row.find('.news-container.active').removeClass('active');
    $(this).addClass('active');

    // 清除已经显示的新闻详情
    $col12Collection.hide();

    // 显示对应序号的新闻详情
    $col12Collection.eq(index).show();
  }).on('click', '.close-icon', function () {
    var $container = $(this).parents('.new-container').find('.row:eq(0)');

    $container.find('>.col-sm-12').hide();
    $container.find('>.col-sm-4 .news-container.active').removeClass('active');
  });
})(jQuery);

//# sourceMappingURL=news.js.map