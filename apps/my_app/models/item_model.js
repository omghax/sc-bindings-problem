// ==========================================================================
// Project:   MyApp.Item
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
MyApp.Item = SC.Record.extend(
/** @scope MyApp.Item.prototype */ {
  tags: SC.Record.toMany('MyApp.Tag')
}) ;
