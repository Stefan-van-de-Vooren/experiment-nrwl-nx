module.exports = {
  name: 'pages-page1',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/pages/page1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
