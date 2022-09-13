import React from "react";

function Content() {
	return (
		<>
			<div className="p-5 mb-4 bg-light rounded-3">
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
					<p className="col-md-8 fs-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam voluptatum molestias earum! Provident dolore odio molestiae
						deserunt eos veniam. Lorem ipsum dolor sit amet consectetur adipisicing.
					</p>
					<button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
						Click here to show the Modal box
					</button>
				</div>
			</div>

			{/* Modal */}
			<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<p>Ketimpa container</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Content;
