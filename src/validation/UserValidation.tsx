import * as yup from "yup";

export const signupSchema = yup.object().shape({
	firstName: yup.string().required("First Name is required"),
	lastName: yup.string().required("Last Name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	password: yup
		.string()
		.min(3, "Password must be at least 3 characters")
		.max(10, "Password must be at most 10 characters")
		.required("Password is required"),
	confirmPassword: yup
		.string()
		.test("passwords-match", "Passwords must match", function (value) {
			return value === this.parent.password || value === null;
		})
		.nullable()
		.required("Confirm Password is required"),
	city: yup.string().required("City is a required field"),
});
