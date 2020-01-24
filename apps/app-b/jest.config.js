module.exports = {
  name: 'app-b',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-b',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
