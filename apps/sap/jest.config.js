module.exports = {
  name: 'sap',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sap',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
