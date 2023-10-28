import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.msg);
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our NewsLetter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="name"
          defaultValue="test@test.com"
          required
     
        />
      </div>
      <button type="submit" className="btn btn-block">
        {isSubmitting ? 'submitting': 'submit'}
      </button>
    </Form>
  );
};

export default Newsletter;
