// ==========================================================================
// Project:   MyApp.ItemsListView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

/** @class

  (Document Your View Here)

  @extends SC.TemplateCollectionView
*/
MyApp.ItemsListView = SC.TemplateCollectionView.extend(
/** @scope MyApp.ItemsListView.prototype */ {
  itemView: SC.TemplateView.extend({
    tagsBinding: '.content.tags',

    tagNames: function() {
      var tags = this.get('tags');
      if (tags) return tags.mapProperty('name').join(', ');
    }.property('tags.@each.name').cacheable()
  })
});
