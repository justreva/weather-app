import "./Error.css";

export const Error = () => {
  return (
    <div className="error-container">
			<div className="error__content">
      <h1 className="error__tittle">The city was not found</h1>
			<p className="error__desc">You can repeat the request or change it</p>
			</div>
    </div>
  );
};
