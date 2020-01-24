module.exports = {
  name: 'page3',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/page3',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
