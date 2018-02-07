const projectsFunc = function () {
  $('.post-article').scrollNav({
    sections: 'section',
    subSections: false,
    sectionElem: 'section',
    className: 'scroll-nav',
    showHeadline: true,
    headlineText: 'Scroll To',
    showTopLink: true,
    topLinkText: 'Top',
    fixedMargin: 40,
    scrollOffset: 0,
    animated: true,
    speed: 500,
    insertTarget: this.selector,
    insertLocation: 'insertBefore',
    activeClass: 'active',
    arrowKeys: false,
    scrollToHash: true,
    onInit: null,
    onRender: null,
    onDestroy: null
  });

  $('#contact-button-div').show();
}

export default projectsFunc
