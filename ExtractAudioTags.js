function ExtractAudioTags() {
    var audio_tags = document.getElementsByTagName('audio');
    for (var i = 0; i < audio_tags.length; i++) {
        open(audio_tags[i].src, "");
    }
};
