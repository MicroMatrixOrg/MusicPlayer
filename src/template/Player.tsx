import React from "react";
import AudioControl from "./AudioControl";
import SvgIcon from "@/components/SvgIcon";

export function Index() {
	return (
		<div className={"audio-player-wrapper"}>
			<SvgIcon iconClass={"caret-left-fill"} className={undefined}></SvgIcon>
			<AudioControl></AudioControl>
		</div>
	);
}
