import { useForm } from "react-hook-form";
import { ImageUpLoader } from "../components/ImageUploader";
import { FlexDiv } from "../components/style/Wrappers";

export const AdminPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <ImageUpLoader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexDiv dir='column' gap='30px'>
          <label>
            Namn
            <FlexDiv>
              <input {...register("name", { required: true })} />
            </FlexDiv>
          </label>
          <label>
            Beskrivning
            <FlexDiv>
              <input {...register("description", { required: true })} />
            </FlexDiv>
          </label>
          <label>
            Tech
            <FlexDiv>
              <input {...register("tech", { required: true })} />
            </FlexDiv>
          </label>

          <label>
            Länk
            <FlexDiv>
              <input {...register("image", { required: true })} />
            </FlexDiv>
          </label>
          <label>
            Tag
            <FlexDiv>
              <input {...register("image", { required: true })} />
            </FlexDiv>
          </label>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type='submit' />
        </FlexDiv>
      </form>
    </>
  );
};
