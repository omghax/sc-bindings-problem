// ==========================================================================
// Project:   MyApp
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

MyApp = SC.Application.create({
  store: SC.Store.create().from('MyApp.FixturesDataSource')
});

SC.ready(function() {
  MyApp.mainPane = SC.TemplatePane.append({
    layerId: 'my_app',
    templateName: 'my_app'
  });

  var items = MyApp.store.find('MyApp.Item');
  MyApp.itemsController.set('content', items);
});
