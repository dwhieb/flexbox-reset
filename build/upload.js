require('../../credentials/dlx-js');

const contentSetings = {
  contentEncoding: `utf8`,
  contentType:     `text/css`,
};

const storage = require('azure-storage').createBlobService();

storage.createBlockBlobFromLocalFile(`less`, `flexbox-reset.less`, `flexbox-reset.less`, { contentSetings }, err => {
  if (err) console.error(err);
  else console.log(`"flexbox-reset.less" uploaded to CDN`);
});

storage.createBlockBlobFromLocalFile(`css`, `flexbox-reset.css`, `flexbox-reset.css`, { contentSetings }, err => {
  if (err) console.error(err);
  else console.log(`"flexbox-reset.css" uploaded to CDN`);
});

storage.createBlockBlobFromLocalFile(`less`, `reset.less`, `flexbox-reset.less`, { contentSetings }, err => {
  if (err) console.error(err);
  else console.log(`"reset.less" uploaded to CDN`);
});

storage.createBlockBlobFromLocalFile(`less`, `reset.css`, `flexbox-reset.css`, { contentSetings }, err => {
  if (err) console.error(err);
  else console.log(`"reset.css" uploaded to CDN`);
});
