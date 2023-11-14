export default function Error(props) {
	return (
		<>
			<h1 className="text-2xl font-bold">Error {props.errorcode}</h1>
			<p>Es ist ein Fehler aufgetreten</p>
			<>{props.errormessage && <p>{props.errormessage}</p>}</>
		</>
	);
}
