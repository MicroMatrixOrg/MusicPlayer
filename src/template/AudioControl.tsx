import React from "react";
import "@/assets/css/audioControl.scss";
function AudioControl() {
	return (
		<div className={"leftControl"}>
			<span className={"icon"}>上一首</span>
			<span className={"icon"}>播放</span>
			<span className={"icon"}>下一首</span>
		</div>
	);
}

export default AudioControl;
