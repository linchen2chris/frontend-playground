import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Input,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	TextField,
} from "@material-ui/core";
import PageContainer from "./PageContainer";
import * as React from "react";
import useForm from "react-hook-form";

const ContentDetail = () => {
	const { register, setValue, handleSubmit, errors } = useForm(); // initialise the hook
	const [age, setAge] = React.useState("");
	/* 	const [dob, setDob] = React.useState(""); */
	const onSubmit = data => {
		console.log(data);
	};

	React.useEffect(() => {
		register({ name: "age" });
		register({ name: "dob" });
	}, []);

	const handleSelect = value => {
		setValue("age", value);
		setAge(value);
	};

	/* const handleChooseDate = date => {
		 setValue("dob", value);
		 setDob(value);
	   }; */

	return (
		<PageContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl fullWidth component="fieldset">
					<TextField fullWidth name="firstName" label="First Name" id="firstName" inputRef={register} />
				</FormControl>
				<FormControl fullWidth component="fieldset">
					<TextField
						fullWidth
						name="lastName"
						label="Last Name"
						id="lastName"
						inputRef={register({ required: true })}
						error={!!errors.lastName}
					/>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel htmlFor="age-simple">Age</InputLabel>
					<Select value={age} onChange={e => handleSelect(e.target.value)}>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>

				<FormControl fullWidth component="fieldset">
					<FormLabel component="legend">Gender</FormLabel>
					<RadioGroup row aria-label="Gender" name="gender">
						<FormControlLabel value="female" control={<Radio inputRef={register} />} label="Female" />
						<FormControlLabel value="male" control={<Radio inputRef={register} />} label="Male" />
					</RadioGroup>
				</FormControl>

				<FormControl fullWidth component="fieldset">
					<FormLabel component="legend">Favoriate Color</FormLabel>
					<FormGroup row>
						<FormControlLabel control={<Checkbox name="gray" inputRef={register} value={true} />} label="Gray" />
						<FormControlLabel control={<Checkbox name="red" inputRef={register} value={true} />} label="Red" />
					</FormGroup>
				</FormControl>
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</form>
		</PageContainer>
	);
};

export default ContentDetail;
