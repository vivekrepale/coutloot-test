import React, { useEffect, useState } from "react";

import SvgFlash2 from "../../../../assets/svg/SvgFlash2.js";

const ImageHeader = (props) => {
	// console.log(props);
	const [remainingTime, setRemainingTime] = useState({
		hours: "00",
		minutes: "00",
		seconds: "00",
	});

	const endDate = new Date(`${props.selectedVariant.negotiated.endTime}`);
	const currentDate = new Date();

	const [time, setTime] = useState(endDate.getTime() - currentDate.getTime());

	useEffect(() => {
		setTime(endDate.getTime() - currentDate.getTime());
		// console.log(props.selectedVariant.negotiated.endTime);
	}, [props]);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime - 1000);
			let hours = Math.trunc(time / 3600000);

			const remaining_mins = time % 3600000;
			let minutes = Math.trunc(remaining_mins / 60000);

			const remaining_secs = remaining_mins % 60000;
			let seconds = Math.trunc(remaining_secs / 1000);

			if (JSON.stringify(hours).length == 1) {
				hours = `0${hours}`;
			} else {
				hours = `${hours}`;
			}
			if (JSON.stringify(minutes).length == 1) {
				minutes = `0${minutes}`;
			} else {
				minutes = `${minutes}`;
			}
			if (JSON.stringify(seconds).length == 1) {
				seconds = `0${seconds}`;
			} else {
				seconds = `${seconds}`;
			}

			setRemainingTime({
				hours: hours,
				minutes: minutes,
				seconds: seconds,
			});
			// set(hours, minutes, seconds);
		}, 1000);
		return () => clearInterval(interval);
	}, [remainingTime]);

	return (
		<div className="timer-container">
			<div className="timer-container__title">
				<SvgFlash2
					fill="#EF3B55"
					className="timer-container__title__svg"
				/>
				<h2>Hurry Up !</h2>
			</div>
			<div className="timer-container__timer">
				<div className="timer-container__timer__hours">
					<div>{remainingTime.hours.charAt(0)}</div>
					<div>{remainingTime.hours.charAt(1)}</div>
					{remainingTime.hours.charAt(2) ? (
						<div>{remainingTime.hours.charAt(2)}</div>
					) : (
						""
					)}
				</div>
				<div className="timer-container__timer__colon">:</div>
				<div className="timer-container__timer__minutes">
					<div>{remainingTime.minutes.charAt(0)}</div>
					<div>{remainingTime.minutes.charAt(1)}</div>
				</div>
				<div className="timer-container__timer__colon">:</div>
				<div className="timer-container__timer__seconds">
					<div>{remainingTime.seconds.charAt(0)}</div>
					<div>{remainingTime.seconds.charAt(1)}</div>
				</div>
			</div>
			<div className="timer-container__info">
				{props.selectedVariant.negotiated.offerText}
			</div>
		</div>
	);
};

export default ImageHeader;
