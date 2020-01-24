module.exports = {
  name: 'experiment-nrwl-nx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/experiment-nrwl-nx',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
