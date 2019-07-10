import { TextField } from '@material-ui/core';
import PageContainer from "./PageContainer";
import * as React from "react";
import useForm from "react-hook-form";

const ContentDetail = () => {
	const { register, handleSubmit, errors } = useForm(); // initialise the hook
	const onSubmit = data => {
		console.log(data);
	};

	return (
		<PageContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField fullWidth name="firstName" label="First Name" id="firstName" inputRef={register} />
				<TextField
					fullWidth
					name="lastName"
					label="Last Name"
					id="lastName"
					inputRef={register({ required: true })}
					error={!!errors.lastName}
				/>
				<input type="submit" />
			</form>
		</PageContainer>
	);
};

export default ContentDetail;
