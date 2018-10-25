if (typeof define === "function" && define.amd) {
    define('SimpleTabs',[], function () {
        function SimpleTabs(p) {
            var o = this;
            this.root = $(p.root);
            this.tabNav = $(p.tabNav, this.root);
            this.tabNavItems = $('.tab-item', this.tabNav);
            this.tabContentItems = $('.tab-content-item', this.root);
            this.hidden = false;
            if(this.root.data('initial-hide-content') == 'Y') { this.hidden = true; }
            this.makeActive = function (el) {
                var item = $(el);
                var contentItem = $(item.attr('href'));

                o.tabNavItems.removeClass('active');
                item.parent(o.tabNavItems).addClass('active');

                o.tabContentItems.not(contentItem).hide();
                contentItem.show();

            };

            this.init = function () {

                var active = o.tabNavItems.filter('.active');
                if (active.size() == 0) {
                    active = o.tabNavItems.first();
                }

                o.makeActive(active.children('a'));
                if(this.hidden) o.tabContentItems.hide();

                o.tabNavItems.find('a').click(function () {
                    o.makeActive(this);
                    return false;
                });

            };

            this.init();
        }

        return SimpleTabs;
    });
}