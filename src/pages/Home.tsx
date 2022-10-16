import { useState } from "react";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import Button from "../component/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";

import { Bold, Form, Left, Trial, Terms, Signup, Right, Input, Title, Excerpt, Container, ErrorMsg } from "./Home.styles";

type UserSubmitForm = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  onClick: boolean
};

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name  cannot be empty"),

    lastname: Yup.string().required("Last name cannot be empty"),

    email: Yup.string().required("Email is required").email("Looks Like this is not an email"),

    password: Yup.string()
      .required("Password cannot be empty")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Container>
      <Left>
        <Title>Learn to code by watching others</Title>
        <Excerpt>
          See how experienced developers solve problems in real-time.Watching scripted tutorials is great, but
          understanding how developers think is invaluable.
        </Excerpt>
      </Left>

      <Right>
        <Trial>
          <Bold>Try it free 7 days</Bold> then $20/mo. thereafter
        </Trial>

        <Signup>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* <FormColum> */}
            <span>
              <Input  
              id={errors.firstname ? 'hasError' : ''}
                type="text"
                placeholder="First Name"
                {...register("firstname")}
                className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
                {...(show ? <img src="../images/icon-error.svg" alt="error" className="error-icon" /> : null)}
              />
              <ErrorMsg>{errors.firstname?.message}</ErrorMsg>
            </span>

            <span>
              <Input
               id={errors.lastname ? 'hasError' : ''}
                type="text"
                placeholder="Last Name"
                {...register("lastname")}
                className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
                {...(show ? <img src="../images/icon-error.svg" alt="error" className="error-icon" /> : null)}
                // {...errors.lastname ? <img src="../images/icon-error.svg" alt="error" className="error-icon" /> : '' }
              />
              <ErrorMsg>{errors.lastname?.message}</ErrorMsg>
            </span>

            <span>
              <Input
               id={errors.email ? 'hasError' : ''}
                type="text"
                placeholder="Email address"
                {...register("email")}
                className={`form-control ${errors.email ? "Looks like this is not an email" : ""}`}
                {...(show ? <img src="../images/icon-error.svg" alt="error" className="error-icon" /> : null)}
              />

              <ErrorMsg>{errors.email?.message}</ErrorMsg>
            </span>

            <span>
              <Input
               id={errors.password ? 'hasError'  : ''}
                type="text"
                placeholder="Password"
                {...register("password")}
                className={`form-control ${errors.password ? "Password cannot be empty" : ""}`}
                {...(show ? <img src="../images/icon-error.svg" alt="error" className="error-icon" /> : null)}
              />
              <ErrorMsg>{errors.password?.message}</ErrorMsg>
            </span>
            {/* </FormColum> */}

            <Button />
            <Terms>by clicking the button youre agreeing to our <b>Terms and condition</b></Terms>
          </Form>
        </Signup>
      </Right>
    </Container>
  );
};

export default Home;
