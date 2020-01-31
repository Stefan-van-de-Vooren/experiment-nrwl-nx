module.exports = {
  name: 'app-a',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-a',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
