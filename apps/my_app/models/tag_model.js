// ==========================================================================
// Project:   MyApp.Tag
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
MyApp.Tag = SC.Record.extend(
/** @scope MyApp.Tag.prototype */ {
  items: SC.Record.toMany('MyApp.Item')
}) ;
