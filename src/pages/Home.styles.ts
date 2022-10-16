import styled from "styled-components";

export const Container = styled.div`
flex: 1;
color: #fff;
display: flex;
padding-left 3rem;
padding-right: 3rem;
align-items: center;
justify-content: space-between;

@media(max-width: 790px){
  padding-left 1rem;
  padding-right: 1rem;
  flex-direction: column;
}

@media(max-width: 650px){

}

`;

export const Left = styled.div`
  flex: 0.5;
`;

export const Title = styled.h1`
  font-size: 2.7rem;
  margin-bottom: 1rem;

  @media (max-width: 790px) {
    font-size: 3.2rem;
    text-align: center;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem;
    text-align: center;
  }
`;

export const Excerpt = styled.p`
  max-width: 445px;
  font-size: 0.8rem;
  letter-spacing: 0.5px;

  @media (max-width: 500px) {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 790px) {
    text-align: center;
    max-width: max-content;
    margin-bottom: 1.5rem;
  }
`;

export const Right = styled.div`
  flex: 0.4;
  // top: -3rem;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;

  // @media(max-width: 650px){
  //   // top: 0;
  //   bottom: 15rem;
  // }
`;

export const Trial = styled.div`
  width: 100%;
  font-weight: 300;
  font-size: 0.8rem;
  text-align: center;
  letter-spacing: 0.5px;
  padding: 0.8rem 3rem;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  background-color: #5d54a3;
`;

export const Bold = styled.b`
  font-weight: 600;
`;

export const Signup = styled.div`
  width: 100%;
  display: flex;
  flex-direcion: column;
  font-size: 0.8rem;
  border-radius: 0.4rem;
  background-color: #fff;
`;

export const Form = styled.form`
  flex: 1;
  color: #000;
  padding: 1.5rem;

  #hasError {
    border: 2px solid #de8d95;
  }
`;

export const FormColum = styled.div`
  // width:100%;
  // display: block;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.9rem 2rem;
  border-radius: 0.2rem;
  border: 1px solid #d1d0d4;

  &:active {
    // border:1px solid #de8d95;
    background-color: inherit;
  }

  .error-icon {
    width: 50%;
    height: 20px;
    border-radius: 50%;
  }

  .form-control {
    margin: 5px 0 0;
    display: inline-block;
  }
`;

export const ErrorMsg = styled.div`
  color: #de8d95;
  display: block;
  font-weight: 500;
  font-size: 0.6rem;
  text-align: right;
  margin-top: 0.3rem;
  font-style: italic;
  position: relative;
  margin-bottom: 0.5rem;
`;
export const Terms = styled.span`
  font-size: 0.6rem;
  color: #d1d0d4;
 

  b {
    color: #de8d95;
    font-weight: 500;
  }
`;
