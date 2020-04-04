document.onkeypress = function(e) { 
    a = document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate
    
    if(e.key == '-'){
        document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate =  a - 0.25
    }
    if(e.key == '+'){ 
        document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate =  a + 0.25 
    } 
}

