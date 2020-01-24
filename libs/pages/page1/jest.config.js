module.exports = {
  name: 'page1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/page1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
