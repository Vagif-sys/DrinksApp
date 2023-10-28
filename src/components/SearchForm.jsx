import { Form, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = ({searchTerm}) => {
    const navigation = useNavigate()
    const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type='submit' className="btn">
            {isSubmitting ? 'searching':'search'}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
