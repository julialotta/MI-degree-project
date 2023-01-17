import { useForm } from "react-hook-form";
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexDiv dir='column' gap='30px'>
          <label>
            Namn
            <FlexDiv>
              <input {...register("name", { required: true })} />
              {errors.name && <span>This field is required</span>}
            </FlexDiv>
          </label>
          <label>
            Beskrivning
            <FlexDiv>
              <input {...register("description", { required: true })} />
              {errors.description && <span>This field is required</span>}
            </FlexDiv>
          </label>
          <label>
            Tech
            <FlexDiv>
              <input {...register("tech", { required: true })} />
              {errors.tech && <span>This field is required</span>}
            </FlexDiv>
          </label>

          <label>
            Länk
            <FlexDiv>
              <input {...register("link", { required: true })} />
              {errors.link && <span>This field is required</span>}
            </FlexDiv>
          </label>
          <label>
            Tags
            <FlexDiv>
              <input {...register("tags", { required: true })} />
              {errors.tags && <span>This field is required</span>}
            </FlexDiv>
          </label>
          <label>
            Images
            <FlexDiv>
              <input type='file' {...register("images", { required: true })} />
              {errors.tags && <span>This field is required</span>}
            </FlexDiv>
          </label>

          <input type='submit' />
        </FlexDiv>
      </form>
    </>
  );
};
