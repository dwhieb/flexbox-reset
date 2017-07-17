require('../../credentials/azure-storage');

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
