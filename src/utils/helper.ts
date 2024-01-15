// in this folder we'll create common functions
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handelInput = (
  userState: Dispatch<SetStateAction<any>>,
  prevData: any,
  event: ChangeEvent<HTMLInputElement>
) => {
  event?.preventDefault();
  const name = event?.target.name;
  const value = event?.target.value;

  userState({
    ...prevData,
    [name]: value,
  });
};

export { handelInput };
