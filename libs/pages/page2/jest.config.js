module.exports = {
  name: 'page2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/page2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
