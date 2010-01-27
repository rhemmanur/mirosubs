goog.provide('mirosubs.VideoPlayer');

mirosubs.VideoPlayer = function(videoElem) {
    this.videoElem_ = videoElem;
    this.videoDiv_ = videoElem.parentNode;
    this.captionElem_ = null;
};

mirosubs.VideoPlayer.wrap = function(video_elem_id) {
    // in the future can be used to abstract flash player, etc.
    return new mirosubs.VideoPlayer(goog.dom.$(video_elem_id));
};

mirosubs.VideoPlayer.prototype.getPlayheadTime = function() {
    return this.videoElem_["currentTime"];
};

mirosubs.VideoPlayer.prototype.setPlayheadTime = function(playheadTime) {
    this.videoElem_["currentTime"] = playheadTime;
};

/**
 *
 * @param {String} text Caption text to display in video. null for blank.
 */
mirosubs.VideoPlayer.prototype.showCaptionText = function(text) {
    if (text == null || text == "") {
        if (this.captionElem_ != null) {
            this.videoDiv_.removeChild(this.captionElem_);
            this.captionElem_ = null;
        }
    }
    else {
        if (this.captionElem_ == null) {
            this.captionElem_ = document.createElement("div");
            this.captionElem_.setAttribute("class", "mirosubs-captionDiv");
            this.videoDiv_.appendChild(this.captionElem_);
        }
        goog.dom.setTextContent(this.captionElem_, text);
    }
};