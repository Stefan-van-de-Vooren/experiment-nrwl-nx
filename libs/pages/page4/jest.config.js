module.exports = {
  name: 'page4',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/page4',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
