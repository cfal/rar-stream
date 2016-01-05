import chai from "chai";
import dirtyChai from "dirty-chai";
chai.use(dirtyChai);
let expect = chai.expect;
chai.should();

import TorrentFileMedia from "../../src/file/torrent-file-media";

describe("TorrentFileMedia", () => {
  describe("#constructor", () => {
    it("should be constructable", () => {
      expect(new TorrentFileMedia({})).to.be.an.instanceOf(TorrentFileMedia);
    });
  });
  describe("#size", () => {
    it("should should convert length into size property", () => {
      expect(new TorrentFileMedia({length: 242}).size).to.be.equal(242);
      expect(new TorrentFileMedia({length: 246}).size).to.be.equal(246);
      expect(new TorrentFileMedia({length: 24211}).size).to.be.equal(24211);
    });
  });

});
